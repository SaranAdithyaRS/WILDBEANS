import React from "react";
import Logo from "../../assets/logo1.webp"; // Minimalist logo recommended

// Icons
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <footer className="w-full bg-amber-900 px-6 py-8 text-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Compact Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
          {/* Brand Column - More Compact */}
          <div className="md:w-1/4">
            <img 
              src={Logo} 
              alt="Wild Beans Coffee" 
              className="w-24 mb-4 opacity-90"
            />
            <div className="flex items-center gap-2 text-amber-100 text-sm mb-1">
              <IoMdMail className="text-base" />
              <span>LeoDas@WildBeans.com</span>
            </div>
            <div className="flex items-center gap-2 text-amber-100 text-sm">
              <FiPhone className="text-base" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Compact Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:w-2/3 text-sm">
            <div>
              <h3 className="font-serif font-medium mb-2">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-200 transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Locations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif font-medium mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-200 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Terms</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif font-medium mb-2">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-200 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compact Bottom Bar */}
        <div className="border-t border-amber-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p className="text-amber-200">
            © {new Date().getFullYear()} Wild Beans Coffee
          </p>
          
          <div className="flex gap-4 text-lg">
            <a href="https://www.instagram.com" className="text-amber-100 hover:text-amber-300 transition-colors">
              <IoLogoInstagram />
            </a>
            <a href="https://linkedin.com" className="text-amber-100 hover:text-amber-300 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com" className="text-amber-100 hover:text-amber-300 transition-colors">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;