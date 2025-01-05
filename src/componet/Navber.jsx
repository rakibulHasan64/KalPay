import { useState } from 'react';
import { FaAlignJustify } from "react-icons/fa";


function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header className="text-black font-bold">
         <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
               {/* Logo */}
               <div className="logo">
                  <a href="index.html">
                     <img src="/public/logo.png" alt="logo" className="w-32" />
                  </a>
               </div>

               {/* Navigation List */}
               <nav className="hidden md:flex space-x-6">
                  <ul className="flex space-x-6">
                     <li>
                        <a href="index.html" className="hover:text-blue-500">
                           Home
                        </a>
                     </li>
                     <li>
                        <a href="business.html" className="hover:text-blue-500">
                           Are you a business?
                        </a>
                     </li>
                     <li>
                        <a href="about.html" className="hover:text-blue-500">
                           About Us
                        </a>
                     </li>
                     <li>
                        <a href="contact.html" className="hover:text-blue-500">
                           Contact Us
                        </a>
                     </li>
                  </ul>
               </nav>

               {/* Desktop Login/Signup */}
               <div className="hidden md:flex space-x-4">
                  <a
                     href="/public/logo.png"
                     className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-800"
                  >
                     Login
                  </a>
                  <a
                     className="px-4 py-2 bg-red-600 rounded-3xl "
                  >
                     Sign Up
                  </a>
               </div>

               {/* Mobile Menu Button */}
               <div className="md:hidden">
                  <button onClick={toggleMenu} className="p-2 border border-white rounded">
                     <FaAlignJustify />
                  </button>
               </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
               <ul className="space-y-4 text-center mt-4">
                  <li>
                     <a href="index.html" className="block hover:text-blue-500">
                        Home
                     </a>
                  </li>
                  <li>
                     <a href="business.html" className="block hover:text-blue-500">
                        Are you a business?
                     </a>
                  </li>
                  <li>
                     <a href="about.html" className="block hover:text-blue-500">
                        About Us
                     </a>
                  </li>
                  <li>
                     <a href="contact.html" className="block hover:text-blue-500">
                        Contact Us
                     </a>
                  </li>
                  <li>
                     <a
                        className="block px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-800"
                     >
                        Login
                     </a>
                  </li>
                  <li>
                     <a
                        className="block px-4 py-2 bg-red-600 rounded-3xl"
                     >
                        Sign Up
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
}

export default Navbar;
