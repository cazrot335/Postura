// src/pages/signup.js
import Link from 'next/link';

const Signup = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Create an Account</h2>
      <form className="bg-white p-6 rounded-lg shadow-md w-80">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <button className="bg-blue-500 text-white py-2 rounded w-full hover:bg-blue-600 transition duration-300">Sign Up</button>
      </form>
      <p className="mt-4">
        Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
``