// src/components/Dashboard.js
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Your Dashboard</h2>
      <p className="mb-4">Track your workouts, monitor your progress, and achieve your fitness goals!</p>

      {/* Exercises Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Exercises</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="mb-2">Here you can view and select exercises to track your workouts.</p>
          <ul className="list-disc pl-5">
            <li>
              <Link href="/exercises/squats" className="text-blue-500 hover:underline">
                Squats
              </Link>
            </li>
            <li>Push-ups</li>
            <li>Deadlifts</li>
            <li>Bench Press</li>
            <li>Yoga</li>
          </ul>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            View All Exercises
          </button>
        </div>
      </section>

      {/* Feedback Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Feedback</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="mb-2">Here you can view feedback on your workouts and progress.</p>
          <ul className="list-disc pl-5">
            <li>Great job on your last workout!</li>
            <li>Try to increase your push-up count next time.</li>
            <li>Focus on your form during squats.</li>
          </ul>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            View Detailed Feedback
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;