import React, { useState, useMemo } from 'react';
import { X, Sparkles, Heart } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import PetCard from './features/adopt/PetCard';
import BuyMealCard from './components/BuyMealCard';
import { PETS_DATA, BUSINESSES_DATA } from './data/mockData';

export default function App() {
  const [lang, setLang] = useState('EN');
  const [selectedTab, setSelectedTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dialog Open/Close Modals UI States
  const [selectedPet, setSelectedPet] = useState<any>(null);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [isFlightNannyModalOpen, setIsFlightNannyModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Primary Sponsoring Core States
  const [sponsorAmount, setSponsorAmount] = useState(250);
  const [sponsorPetTarget, setSponsorPetTarget] = useState<any>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 font-sans ${lang === 'AR' ? 'rtl' : 'ltr'}`}>
      
      {/* Dynamic Action Notification Alert Banners */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-teal-900 text-white px-6 py-3 rounded-xl shadow-2xl border border-teal-700 flex items-center space-x-3 transition-all transform animate-bounce">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Shared Modular Global Brand Header Navigation Control Panel Row */}
      <Header 
        lang={lang} 
        setLang={setLang}
        selectedTab={selectedTab} 
        setSelectedTab={setSelectedTab}
        setIsBusinessModalOpen={setIsBusinessModalOpen}
        setIsSponsorModalOpen={setIsSponsorModalOpen}
        setSponsorPetTarget={setSponsorPetTarget}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ==================== HOME MAIN VIEW PORT LAYER ==================== */}
        {selectedTab === 'home' && (
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Pawmise Base Platform</h1>
              <p className="text-slate-500 mt-2 text-sm">Welcome to your clean modular portal engine workspace configuration layout.</p>
            </div>

            {/* Showcase Modular Grid Framework Card Listing Layout Engine Integration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PETS_DATA.map((pet) => (
                <PetCard key={pet.id} pet={pet} onSelectProfile={setSelectedPet} />
              ))}
            </div>
          </div>
        )}

        {/* Note: You can split remaining tab sections out into clean folders under /features as your dashboard scales */}
      </main>

      {/* Showcase Profile Comprehensive Details Overlay Engine Modals Popup Component */}
      {selectedPet && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-6 relative">
            <button
              onClick={() => setSelectedPet(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img src={selectedPet.image} alt={selectedPet.name} className="w-full sm:w-56 h-56 rounded-2xl object-cover" />
              <div className="space-y-3 flex-1">
                <h2 className="text-3xl font-extrabold text-slate-900">{selectedPet.name}</h2>
                <p className="text-xs text-slate-500">{selectedPet.breed} • {selectedPet.age}</p>
                <p className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border">{selectedPet.story}</p>
              </div>
            </div>

            {/* Clean Component Slice Injection Point for the Snoonu Integration Feature Module */}
            <BuyMealCard petName={selectedPet.name} />

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedPet(null);
                  showToast(`Adoption pipeline initiated for ${selectedPet.name}!`);
                }}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-2xl text-xs sm:text-sm transition"
              >
                Apply to Adopt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Base Shared Utility Footer Banner Section Component */}
      <Footer />

    </div>
  );
}
