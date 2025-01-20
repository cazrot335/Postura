// src/components/Posetrack.js
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import { useRouter } from 'next/router';

const Posetrack = () => {
  const webcamRef = useRef(null);
  const [pose, setPose] = useState(null);
  const [isSquatCorrect, setIsSquatCorrect] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadModel = async () => {
      // Load PoseNet model
      await tf.ready();
      const model = await posenet.load();
      detectPose(model);
    };

    // Detect pose using PoseNet
    const detectPose = async (model) => {
      const interval = setInterval(async () => {
        if (webcamRef.current) {
          const video = webcamRef.current.video;
          const pose = await model.estimateSinglePose(video, {
            flipHorizontal: false,
          });
          setPose(pose);
          checkSquatCorrectness(pose); // Check correctness of squat
        }
      }, 100);
    };

    loadModel();
  }, []);

  // Check if squat posture is correct
  const checkSquatCorrectness = (pose) => {
    if (pose) {
      const keypoints = pose.keypoints;
      const leftKnee = keypoints.find((point) => point.part === 'leftKnee');
      const rightKnee = keypoints.find((point) => point.part === 'rightKnee');
      const leftHip = keypoints.find((point) => point.part === 'leftHip');
      const rightHip = keypoints.find((point) => point.part === 'rightHip');
      
      // Simple rule to detect squat: knees should be bent and hips low
      if (leftKnee.score > 0.5 && rightKnee.score > 0.5) {
        const kneeAngle = calculateAngle(leftHip, leftKnee, rightKnee);
        if (kneeAngle < 160) {
          setIsSquatCorrect(true);
        } else {
          setIsSquatCorrect(false);
        }
      }
    }
  };

  // Calculate angle between three keypoints (hip -> knee -> ankle)
  const calculateAngle = (hip, knee, ankle) => {
    const radians = Math.atan2(ankle.position.y - knee.position.y, ankle.position.x - knee.position.x)
                  - Math.atan2(hip.position.y - knee.position.y, hip.position.x - knee.position.x);
    const angle = Math.abs(radians * (180 / Math.PI));
    return angle;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Squat Pose Tracking</h1>

      {/* Webcam Component */}
      <Webcam
        ref={webcamRef}
        videoConstraints={{ facingMode: 'user' }}
        className="mb-4"
        width="100%"
      />

      {/* Display Pose Status */}
      {isSquatCorrect === null ? (
        <p className="text-lg text-center">Perform squats and we'll track your posture.</p>
      ) : isSquatCorrect ? (
        <p className="text-green-500 text-lg">Good posture! Keep it up!</p>
      ) : (
        <p className="text-red-500 text-lg">Incorrect posture. Try again.</p>
      )}

      <button
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 mt-4"
        onClick={() => router.push('/next-exercise')}
      >
        Pose Tracking Completed
      </button>
    </div>
  );
};

export default Posetrack;
