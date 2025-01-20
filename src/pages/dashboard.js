// src/pages/dashboard.js
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;