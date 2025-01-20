// src/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">FitTrack</h1>
        <div>
          <Link href="/dashboard" className="text-white px-4 hover:underline">Dashboard</Link>
          
          <Link href="/" className="text-white px-4 hover:underline">Sign Out</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;