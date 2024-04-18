import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a2538] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p className="text-md">© 2024 eSUM. All rights reserved.</p>
        <nav className="text-md">
          <a href="#" className="mr-4 hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
