import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  setSelectedTab: (tab: string) => void;
}

export default function Footer({ setSelectedTab }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Brand Information & Quick Link Groups */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-500/10">
              <Heart className="w-5 h-5 fill-current text-teal-100" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">Pawmise Rescue Qatar</div>
              <div className="text-slate-500">Non-Profit Animal Rescue • Doha, Qatar</div>
            </div>
          </div>

          {/* Navigational Anchor Array */}
          <nav className="flex flex-wrap gap-6 text-slate-300 font-semibold" aria-label="Footer Navigation">
            <button onClick={() => setSelectedTab('home')} className="hover:text-teal-400 transition-colors">Home</button>
            <button onClick={() => setSelectedTab('adopt')} className="hover:text-teal-400 transition-colors">Adoptable Pets</button>
            <button onClick={() => setSelectedTab('special')} className="hover:text-teal-400 transition-colors">Special Needs</button>
            <button onClick={() => setSelectedTab('directory')} className="hover:text-teal-400 transition-colors">Local Doha Directory</button>
            <button onClick={() => setSelectedTab('flight')} className="hover:text-teal-400 transition-colors">Flight Nanny</button>
          </nav>
        </div>

        {/* Structural Metadata & Policy Row */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-slate-500 gap-4">
          <div dir="ltr">
            © {new Date().getFullYear()} Pawmise Rescue Qatar. All rights reserved.
          </div>
          <div className="flex space-x-4 rtl:space-x-reverse font-medium">
            <button className="hover:text-slate-400 transition-colors">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-slate-400 transition-colors">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
