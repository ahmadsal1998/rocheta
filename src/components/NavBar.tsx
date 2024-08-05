import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/images/logo-en.svg';
import { translations } from '../translations';

const NavBar: React.FC = () => {
  const { isArabic, toggleLanguage } = useLanguage();
  const lang = isArabic ? 'ar' : 'en';
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className={`flex justify-between items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div className="flex items-center py-4 px-2">
            <img src={logo} alt="Logo" className="h-[37px] w-[178px] mr-2" />
          </div>
          {/* Links */}
          <div className="hidden md:flex justify-center items-center flex-1">
            <a href="#" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-green-500 transition duration-300">
              {translations[lang].home}
            </a>
            <a href="#doctors" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-green-500 transition duration-300">
              {translations[lang].doctors}
            </a>
            <a href="#services" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-green-500 transition duration-300">
              {translations[lang].services}
            </a>
            <a href="#contact" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-green-500 transition duration-300">
              {translations[lang].contactUs}
            </a>
          </div>
          {/* Buttons for large screens */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleLanguage} className="py-2 px-4 text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              {translations[lang].switchToArabic}
            </button>
            <a href="#" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">
              {translations[lang].logIn}
            </a>
            <a href="#" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
              {translations[lang].signUp}
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuToggle} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${menuOpen ? '' : 'hidden'} mobile-menu md:hidden ${isArabic ? 'rtl-content' : ''}`}>
        <ul className="space-y-4">
          <li>
            <button onClick={toggleLanguage} className="block text-sm px-4 py-2 text-gray-500 hover:bg-gray-200 transition duration-300">
              {translations[lang].switchToArabic}
            </button>
          </li>
          <li><a href="#" className="block text-sm px-4 py-2 text-gray-500 hover:bg-gray-200 transition duration-300">
            {translations[lang].home}
          </a></li>
          <li><a href="#doctors" className="block text-sm px-4 py-2 text-gray-500 hover:bg-gray-200 transition duration-300">
            {translations[lang].doctors}
          </a></li>
          <li><a href="#services" className="block text-sm px-4 py-2 text-gray-500 hover:bg-gray-200 transition duration-300">
            {translations[lang].services}
          </a></li>
          <li><a href="#contact" className="block text-sm px-4 py-2 text-gray-500 hover:bg-gray-200 transition duration-300">
            {translations[lang].contactUs}
          </a></li>
          <li><a href="#" className="block text-sm px-4 py-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">
            {translations[lang].logIn}
          </a></li>
          <li><a href="#" className="block text-sm px-4 py-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
            {translations[lang].signUp}
          </a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
