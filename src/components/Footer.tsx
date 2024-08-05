import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import insta from '../assets/images/insta.svg';
import facebook from '../assets/images/facbook.svg';
import twiter from '../assets/images/twiter.svg';
import sendIcon from '../assets/images/send-icon.svg';
import { translations } from '../translations';

const LinkList: React.FC<{ links: string[] }> = ({ links }) => (
  <ul className="space-y-2 md:space-y-0">
    {links.map((link, index) => (
      <li key={index}><a href="#" className="text-gray-400 hover:text-gray-200">{link}</a></li>
    ))}
  </ul>
);

const Footer: React.FC = () => {
  const { isArabic } = useLanguage();
  const lang = isArabic ? 'ar' : 'en';
  const quickLinks1 = [translations[lang].home, translations[lang].aboutUs, translations[lang].services, translations[lang].doctors, translations[lang].contactUs];
  const quickLinks2 = [translations[lang].services, translations[lang].doctors, translations[lang].aboutUs, translations[lang].contactUs, translations[lang].home];

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className={isArabic ? 'text-right' : 'text-left'}>
      <div className="max-w-[1140px] mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-64 px-2.5">
            <h2 className="text-white text-xl font-bold">{translations[lang].aboutUs}</h2>
            <p className="mt-2 text-gray-400">
              {translations[lang].aboutUsContent}
            </p>
            <div className={`mt-4 flex space-x-4 ${isArabic ? 'space-x-reverse' : ''}`}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Face" className="w-6 h-6" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twiter} alt="Twit" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Insta" className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-64 px-2.5">
            <h2 className="text-xl font-bold">{translations[lang].quickLinks}</h2>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 mt-4">
              <LinkList links={quickLinks1} />
              <LinkList links={quickLinks2} />
            </div>
          </div>
          <div className="w-full md:w-64 px-2.5">
            <h2 className="text-xl font-bold">{translations[lang].openHours}</h2>
            <p className="mt-2 text-gray-400">
              {translations[lang].openHoursContent}
            </p>
            <ul className="mt-2">
              <li className="flex justify-between text-gray-400">
                <span>{translations[lang].mondayFriday}</span>
                <span>8.00 - 20.00</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-64 px-2.5">
            <h2 className="text-xl font-bold">{translations[lang].newsletter}</h2>
            <p className="mt-2 text-gray-400">
              {translations[lang].newsletterContent}
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder={translations[lang].emailPlaceholder}
                className={`w-full md:w-[160px] px-4 py-2 border ${isArabic ? 'rounded-r-lg rounded-l-none' : 'rounded-l-lg rounded-r-none'} focus:outline-none text-black`}
              />
              <button className={`bg-blue-600 text-white px-4 py-2 ${isArabic ? 'rounded-l-lg rounded-r-none' : 'rounded-r-lg rounded-l-none'} flex items-center justify-center`}>
                <img src={sendIcon} alt="Send" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8 border-t border-gray-600 pt-4">
        © {translations[lang].copyright}
      </div>
    </div>
  );
};

export default Footer;
