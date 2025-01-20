// src/components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-blue-600 p-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} FitTrack. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;