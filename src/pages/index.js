// src/pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-white text-3xl font-bold">FitTrack</h1>
        <nav>
          <Link href="/login" className="text-white px-4 hover:underline">Login</Link>
          <Link href="/signup" className="text-white px-4 hover:underline">Sign Up</Link>
        </nav>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center text-center">
        <h2 className="text-white text-5xl font-extrabold mb-4">Welcome to FitTrack!</h2>
        <p className="text-white text-lg mb-8 max-w-md">
          Your personal fitness companion. Track your workouts, monitor your progress, and achieve your fitness goals with ease.
        </p>
        <div>
          <Link href="/dashboard">
            <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </main>
      <footer className="p-6 text-center text-white">
        <p>&copy; {new Date().getFullYear()} FitTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;