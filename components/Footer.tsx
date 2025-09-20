
import React from 'react';
import { LOGO_URL, DISCORD_LINK, TIKTOK_LINK } from '../constants';
import DiscordIcon from './icons/DiscordIcon';
import TiktokIcon from './icons/TiktokIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-4 md:mb-0">
            <img className="h-10 w-10 rounded-full mr-3" src={LOGO_URL} alt="BOLD Community Logo" />
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} BOLD Community. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <span className="sr-only">Discord</span>
              <DiscordIcon className="h-6 w-6" />
            </a>
            <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <span className="sr-only">TikTok</span>
              <TiktokIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
