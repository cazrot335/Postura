import { useState } from 'react';
import Posetrack from '../components/Posetrack'; // Import Posetrack component

const Squats = () => {
  // Video setup
  const videoId = "HqL0yGEX5oQ"; // Replace this with dynamic extraction if needed
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autohide=1`;

  // State to control the visibility of the camera
  const [isPoseTrackerVisible, setIsPoseTrackerVisible] = useState(false);

  // Handle the button click to toggle the camera module visibility
  const handlePoseTrackerClick = () => {
    setIsPoseTrackerVisible(true); // Show camera when the button is clicked
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Squats</h1>
      <p className="mb-4 text-center">Here you can find information about how to perform squats correctly.</p>

      {/* YouTube Video Embedding */}
      <div className="relative w-full max-w-4xl mb-6" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Pose Tracker Button */}
      <button
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 mb-4"
        onClick={handlePoseTrackerClick}
      >
        Pose Tracker
      </button>

      {/* Conditionally render the camera module (Posetrack) only when the button is clicked */}
      {isPoseTrackerVisible && <Posetrack />}
    </div>
  );
};

export default Squats;
