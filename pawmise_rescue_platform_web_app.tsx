import React, { useState, useMemo } from 'react';
import { 
  Heart, Shield, Search, Filter, MapPin, Calendar, Globe, Award,
  Phone, Mail, CheckCircle2, ChevronRight, Plane, Sparkles, UserCheck,
  Building2, ShoppingBag, Stethoscope, ArrowUpRight, HelpCircle, X,
  ExternalLink, Gift, DollarSign, Users, Info, BadgeAlert, Tag
} from 'lucide-react';

const PETS_DATA = [
  {
    id: 'p1',
    name: 'Sultan',
    species: 'Cat',
    breed: 'Arabian Mau',
    age: '2 Years',
    gender: 'Male',
    location: 'West Bay, Doha',
    specialNeeds: true,
    condition: 'Three-legged (Tripod - Amputee)',
    story: 'Sultan was rescued near Katara Cultural Village after a traffic accident. Despite losing his left hind leg, he is exceptionally affectionate and loves lap naps!',
    status: 'Available',
    sponsorGoal: 1500,
    sponsorRaised: 1120,
    escortNeeded: true,
    destination: 'London / Frankfurt',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    name: 'Luna',
    species: 'Dog',
    breed: 'Saluki Cross',
    age: '1.5 Years',
    gender: 'Female',
    location: 'Al Rayyan, Doha',
    specialNeeds: true,
    condition: 'Visually Impaired (Blind in Left Eye)',
    story: 'Rescued from an industrial zone in Doha. Luna responds wonderfully to voice commands and soft touch. She is great with children and other friendly dogs.',
    status: 'Foster Care',
    sponsorGoal: 2000,
    sponsorRaised: 1850,
    escortNeeded: true,
    destination: 'Amsterdam / Paris',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    name: 'Milo',
    species: 'Cat',
    breed: 'Domestic Short Hair',
    age: '6 Months',
    gender: 'Male',
    location: 'The Pearl, Doha',
    specialNeeds: false,
    condition: 'Healthy & Fully Vaccinated',
    story: 'Found abandoned outside a shopping plaza. Milo is playful, energetic, loves feather wands, and is looking for a loving home in Doha or overseas!',
    status: 'Available',
    sponsorGoal: 500,
    sponsorRaised: 500,
    escortNeeded: false,
    destination: null,
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p4',
    name: 'Zeus',
    species: 'Dog',
    breed: 'Canaan Dog Mix',
    age: '3 Years',
    gender: 'Male',
    location: 'Al Wakrah',
    specialNeeds: false,
    condition: 'Requires Daily Joint Supplements',
    story: 'Gentle giant who guards your heart! Fully microchipped, neutered, and loves long evening strolls along the Souq Waqif promenade.',
    status: 'Available',
    sponsorGoal: 1200,
    sponsorRaised: 800,
    escortNeeded: true,
    destination: 'Toronto / Chicago',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p5',
    name: 'Cleopatra',
    species: 'Cat',
    breed: 'Persian Cross',
    age: '4 Years',
    gender: 'Female',
    location: 'Lusail City',
    specialNeeds: true,
    condition: 'Chronic Kidney Disease (Special Diet Needed)',
    story: 'Cleo is a serene princess who requires renal food and regular vet checkups. She compensates with infinite purrs and calm companionship.',
    status: 'Foster Care',
    sponsorGoal: 2500,
    sponsorRaised: 1900,
    escortNeeded: false,
    destination: null,
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800'
  }
];

const BUSINESSES_DATA = [
  {
    id: 'b1',
    name: 'Doha Veterinary Center',
    category: 'Veterinary Clinic',
    tier: 'Pawmise Platinum Partner',
    rating: 4.9,
    reviews: 128,
    area: 'Al Waab, Doha',
    phone: '+974 4468 1234',
    perk: '20% off First Wellness Checkup for Pawmise Adopters',
    code: 'PAWMISE-VET20',
    description: 'Comprehensive 24/7 veterinary clinic with advanced surgery, diagnostics, and dedicated special-needs animal care units.',
    logoBg: 'bg-teal-100 text-teal-800'
  },
  {
    id: 'b2',
    name: 'Qatar Pet Planet Supply',
    category: 'Pet Store & Supplies',
    tier: 'Verified Sponsor',
    rating: 4.8,
    reviews: 94,
    area: 'The Pearl-Qatar',
    phone: '+974 4493 5678',
    perk: 'Free Starter Goodie Bag + 15% off first food bundle',
    code: 'PAWMISE-BAG15',
    description: 'Premium organic food brands, specialized orthopedic beds for disabled pets, and eco-friendly accessories.',
    logoBg: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'b3',
    name: 'Royal Paws Spa & Grooming',
    category: 'Grooming Salon',
    tier: 'Verified Sponsor',
    rating: 4.7,
    reviews: 76,
    area: 'West Bay Lagoon',
    phone: '+974 4411 9900',
    perk: 'Complimentary Gentle Bath & Nail Trim for Newly Adopted Rescue',
    code: 'PAWMISE-SPA',
    description: 'Stress-free grooming environment tailored for nervous, senior, or special-needs cats and dogs.',
    logoBg: 'bg-indigo-100 text-indigo-800'
  },
  {
    id: 'b4',
    name: 'Gulf Pet Resort & Hotel',
    category: 'Boarding & Daycare',
    tier: 'Pawmise Platinum Partner',
    rating: 4.9,
    reviews: 110,
    area: 'Al Rayyan',
    phone: '+974 4477 4433',
    perk: '1 Free Daycare Session upon showing Adoption Certificate',
    code: 'PAWMISE-HOTEL1D',
    description: 'Climate-controlled suites, specialized medical boarding supervision, and interactive playtime paddocks.',
    logoBg: 'bg-emerald-100 text-emerald-800'
  }
];

export default function App() {
  const [lang, setLang] = useState('EN');
  const [selectedTab, setSelectedTab] = useState('home');
  const [filterSpecies, setFilterSpecies] = useState('All');
  const [filterSpecialNeeds, setFilterSpecialNeeds] = useState(false);
  const [filterEscortNeeded, setFilterEscortNeeded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal states
  const [selectedPet, setSelectedPet] = useState(null);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [isFlightNannyModalOpen, setIsFlightNannyModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Sponsoring state form
  const [sponsorAmount, setSponsorAmount] = useState(250);
  const [sponsorPetTarget, setSponsorPetTarget] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const filteredPets = useMemo(() => {
    return PETS_DATA.filter((pet) => {
      if (filterSpecies !== 'All' && pet.species !== filterSpecies) return false;
      if (filterSpecialNeeds && !pet.specialNeeds) return false;
      if (filterEscortNeeded && !pet.escortNeeded) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          pet.name.toLowerCase().includes(q) ||
          pet.breed.toLowerCase().includes(q) ||
          pet.location.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [filterSpecies, filterSpecialNeeds, filterEscortNeeded, searchQuery]);

  const specialNeedsPets = useMemo(() => {
    return PETS_DATA.filter(p => p.specialNeeds);
  }, []);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 font-sans ${lang === 'AR' ? 'rtl' : 'ltr'}`}>
      
      {}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-teal-900 text-white px-6 py-3 rounded-xl shadow-2xl border border-teal-700 flex items-center space-x-3 transition-all transform animate-bounce">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Branding */}
          <div 
            onClick={() => setSelectedTab('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <Heart className="w-6 h-6 fill-current text-teal-100" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-xl tracking-tight text-slate-900">Pawmise</span>
                <span className="bg-teal-100 text-teal-800 text-xs px-2 py-0.5 rounded-full font-semibold">Doha, Qatar</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Safe Haven & Global Re-homing</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'adopt', label: 'Adopt & Foster' },
              { id: 'special', label: 'Special Needs' },
              { id: 'directory', label: 'Vet & Store Directory' },
              { id: 'flight', label: 'Flight Nanny (DOH)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedTab === tab.id
                    ? 'bg-teal-50 text-teal-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
              className="px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-600 hover:border-slate-400"
            >
              {lang === 'EN' ? 'العربية' : 'English'}
            </button>

            <button
              onClick={() => setIsBusinessModalOpen(true)}
              className="hidden lg:flex items-center space-x-1.5 px-3.5 py-2 rounded-xl border border-teal-600 text-teal-700 hover:bg-teal-50 text-xs font-semibold transition"
            >
              <Building2 className="w-4 h-4" />
              <span>Partner Login</span>
            </button>

            <button
              onClick={() => {
                setSponsorPetTarget(null);
                setIsSponsorModalOpen(true);
              }}
              className="flex items-center space-x-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 transition transform active:scale-95"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Donate & Sponsor</span>
            </button>
          </div>
        </div>
      </header>

      {}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ==================== HOME TAB ==================== */}
        {selectedTab === 'home' && (
          <div className="space-y-16">
            
            {/* Hero Section */}
            <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
              
              <div className="relative z-10 max-w-3xl space-y-6">
                <div className="inline-flex items-center space-x-2 bg-amber-400/20 border border-amber-300/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-amber-300 text-xs font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Qatari Non-Profit Rescue & International Relocation</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  A Safe Haven for Doha’s <span className="text-teal-400">Rescued Cats & Dogs</span>.
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  As a Qatari animal rescue, Pawmise promises to save, rehabilitate, and re-home stray and special-needs animals both locally in Doha and abroad. Every pet deserves a loving second chance.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => setSelectedTab('adopt')}
                    className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-6 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-teal-500/25 transition flex items-center space-x-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Find a Pet to Adopt</span>
                  </button>

                  <button
                    onClick={() => setSelectedTab('flight')}
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-2xl font-bold text-sm backdrop-blur-md transition flex items-center space-x-2"
                  >
                    <Plane className="w-4 h-4" />
                    <span>Become a Flight Nanny</span>
                  </button>
                </div>

                {/* Impact Badges */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">480+</div>
                    <div className="text-xs text-slate-400 font-medium">Pets Saved in Doha</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">190+</div>
                    <div className="text-xs text-slate-400 font-medium">Re-homed Internationally</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</div>
                    <div className="text-xs text-slate-400 font-medium">Non-Profit Guarantee</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Search & Filter Bar */}
            <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                
                <div className="relative w-full md:w-1/3">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search by breed, name, or Doha area..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  {/* Species Switch */}
                  <div className="flex bg-slate-100 p-1 rounded-2xl text-xs font-semibold">
                    {['All', 'Cat', 'Dog'].map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setFilterSpecies(s);
                          setSelectedTab('adopt');
                        }}
                        className={`px-4 py-2 rounded-xl transition ${
                          filterSpecies === s ? 'bg-white shadow text-teal-700' : 'text-slate-600'
                        }`}
                      >
                        {s === 'All' ? 'All Pets' : s + 's'}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setFilterSpecialNeeds(!filterSpecialNeeds);
                      setSelectedTab('adopt');
                    }}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-semibold border transition flex items-center space-x-1.5 ${
                      filterSpecialNeeds
                        ? 'bg-amber-50 border-amber-300 text-amber-800'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5 text-amber-500 fill-current" />
                    <span>Special Needs Only</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedTab('adopt');
                    }}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-2xl text-xs font-bold transition ml-auto"
                  >
                    Explore Gallery
                  </button>
                </div>
              </div>
            </section>

            {/* Special Needs Urgent Feature */}
            <section className="space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-amber-600 uppercase">Pawmise Promise</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Special Needs Spotlight</h2>
                  <p className="text-sm text-slate-500">Animals with medical requirements deserve love and dedicated sponsorship.</p>
                </div>
                <button
                  onClick={() => setSelectedTab('special')}
                  className="text-teal-700 hover:text-teal-800 text-sm font-bold flex items-center space-x-1"
                >
                  <span>View All Special Needs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialNeedsPets.slice(0, 3).map((pet) => {
                  const progressPct = Math.min(100, Math.round((pet.sponsorRaised / pet.sponsorGoal) * 100));
                  return (
                    <div key={pet.id} className="bg-white rounded-3xl border border-amber-200/60 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between">
                      <div>
                        <div className="relative h-48 overflow-hidden">
                          <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
                          <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow">
                            <Heart className="w-3 h-3 fill-current" />
                            <span>{pet.condition}</span>
                          </div>
                        </div>

                        <div className="p-6 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-slate-900">{pet.name}</h3>
                              <p className="text-xs text-slate-500">{pet.breed} • {pet.age}</p>
                            </div>
                            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-semibold">
                              {pet.location}
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 line-clamp-2">{pet.story}</p>

                          {/* Progress bar */}
                          <div className="space-y-1.5 pt-2">
                            <div className="flex justify-between text-xs font-semibold">
                              <span className="text-slate-500">Monthly Medical Care Fund</span>
                              <span className="text-teal-700">{pet.sponsorRaised} / {pet.sponsorGoal} QAR</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-teal-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                                style={{ width: `${progressPct}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 pt-0 flex gap-2">
                        <button
                          onClick={() => setSelectedPet(pet)}
                          className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 py-2.5 rounded-xl text-xs font-bold transition"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => {
                            setSponsorPetTarget(pet);
                            setIsSponsorModalOpen(true);
                          }}
                          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-xl text-xs font-bold shadow-sm transition"
                        >
                          Sponsor {pet.name}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Monetization / Local Doha Business Highlight */}
            <section className="bg-teal-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="max-w-3xl space-y-6 relative z-10">
                <span className="bg-teal-800 text-teal-200 text-xs px-3 py-1 rounded-full font-semibold border border-teal-700">
                  Qatar Pet Ecosystem & Marketplace
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold">Are you a Doha Veterinary Clinic or Pet Store?</h2>
                <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
                  Join Pawmise Rescue’s Partner Directory! Connect with thousands of passionate pet owners in Qatar, offer welcome discount perks to new adopters, and show your corporate social responsibility (CSR) support.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => setSelectedTab('directory')}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-md transition"
                  >
                    Explore Partner Directory
                  </button>
                  <button
                    onClick={() => setIsBusinessModalOpen(true)}
                    className="bg-teal-800 hover:bg-teal-700 border border-teal-600 text-white font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm transition"
                  >
                    Register Your Business
                  </button>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ==================== ADOPT & FOSTER TAB ==================== */}
        {selectedTab === 'adopt' && (
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-6">
              <h1 className="text-3xl font-extrabold text-slate-900">Adoptable & Foster Pets</h1>
              <p className="text-slate-500 text-sm mt-1">
                Browse dogs and cats currently in Pawmise rescue care in Doha seeking local adoption, foster care, or international flight escorts.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filters:</span>
                
                {/* Species */}
                <select
                  value={filterSpecies}
                  onChange={(e) => setFilterSpecies(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold px-3 py-2 focus:outline-none"
                >
                  <option value="All">All Species</option>
                  <option value="Cat">Cats Only</option>
                  <option value="Dog">Dogs Only</option>
                </select>

                {/* Special Needs Switch */}
                <label className="flex items-center space-x-2 cursor-pointer bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold">
                  <input
                    type="checkbox"
                    checked={filterSpecialNeeds}
                    onChange={(e) => setFilterSpecialNeeds(e.target.checked)}
                    className="rounded text-teal-600 focus:ring-teal-500"
                  />
                  <span>Special Needs</span>
                </label>

                {/* Flight Escort Needed */}
                <label className="flex items-center space-x-2 cursor-pointer bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold">
                  <input
                    type="checkbox"
                    checked={filterEscortNeeded}
                    onChange={(e) => setFilterEscortNeeded(e.target.checked)}
                    className="rounded text-teal-600 focus:ring-teal-500"
                  />
                  <span>Flight Escort Needed</span>
                </label>
              </div>

              <div className="text-xs text-slate-500 font-semibold">
                Showing <span className="text-teal-700 font-bold">{filteredPets.length}</span> pets
              </div>
            </div>

            {/* Pets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPets.map((pet) => (
                <div key={pet.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition flex flex-col justify-between">
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold shadow ${
                          pet.status === 'Available' ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white'
                        }`}>
                          {pet.status}
                        </span>
                        {pet.specialNeeds && (
                          <span className="bg-amber-500 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow">
                            <Heart className="w-3 h-3 fill-current" />
                            <span>Special Needs</span>
                          </span>
                        )}
                      </div>

                      {pet.escortNeeded && (
                        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center space-x-1">
                          <Plane className="w-3.5 h-3.5" />
                          <span>Flight Nanny Needed</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{pet.name}</h3>
                          <p className="text-xs text-slate-500">{pet.breed} • {pet.age} • {pet.gender}</p>
                        </div>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg font-medium">
                          {pet.location}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2">{pet.story}</p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 gap-2 flex">
                    <button
                      onClick={() => setSelectedPet(pet)}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1"
                    >
                      <span>View Full Profile</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== SPECIAL NEEDS TAB ==================== */}
        {selectedTab === 'special' && (
          <div className="space-y-8">
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 space-y-3">
              <div className="flex items-center space-x-2 text-amber-800 font-bold text-sm">
                <Heart className="w-5 h-5 fill-current text-amber-600" />
                <span>Our Core Mission</span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900">Pawmise Special Needs Sanctuary</h1>
              <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
                Many rescued animals in Qatar face permanent disabilities, chronic conditions, or mobility injuries. We promise never to turn our backs on them. You can directly sponsor an animal’s monthly veterinary medication, special food, or therapy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialNeedsPets.map((pet) => {
                const progressPct = Math.min(100, Math.round((pet.sponsorRaised / pet.sponsorGoal) * 100));
                return (
                  <div key={pet.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col md:flex-row gap-6">
                    <img src={pet.image} alt={pet.name} className="w-full md:w-48 h-48 object-cover rounded-2xl" />
                    <div className="flex-1 space-y-3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-slate-900">{pet.name}</h3>
                          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">
                            {pet.condition}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{pet.breed} • {pet.age} • {pet.location}</p>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">{pet.story}</p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-bold">
                            <span className="text-slate-500">Monthly Medical Fund</span>
                            <span className="text-teal-700">{pet.sponsorRaised} / {pet.sponsorGoal} QAR ({progressPct}%)</span>
                          </div>
                          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-amber-500 to-teal-600 h-full rounded-full" style={{ width: `${progressPct}%` }}></div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSponsorPetTarget(pet);
                              setIsSponsorModalOpen(true);
                            }}
                            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-xl text-xs font-bold shadow-sm transition"
                          >
                            Direct Sponsor (from 50 QAR)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== VET & STORE DIRECTORY (MONETIZATION) TAB ==================== */}
        {selectedTab === 'directory' && (
          <div className="space-y-8">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs px-3 py-1 rounded-full font-bold">
                  Verified Local Doha Partners
                </span>
                <h1 className="text-3xl font-extrabold">Pet Directory & Adopter Perks</h1>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Support local Doha businesses that support rescue animals! Adopters receive exclusive welcome vouchers and discounts from our registered veterinary clinics, pet stores, and groomers.
                </p>
              </div>

              <button
                onClick={() => setIsBusinessModalOpen(true)}
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded-2xl text-sm shrink-0 shadow-lg transition"
              >
                + Register Business Listing
              </button>
            </div>

            {/* Business Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BUSINESSES_DATA.map((biz) => (
                <div key={biz.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg ${biz.logoBg}`}>
                        {biz.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">{biz.name}</h3>
                        <p className="text-xs text-slate-500">{biz.category} • {biz.area}</p>
                      </div>
                    </div>

                    <span className="bg-teal-50 text-teal-800 border border-teal-200 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center space-x-1">
                      <Award className="w-3.5 h-3.5 text-teal-600" />
                      <span>{biz.tier}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{biz.description}</p>

                  {/* Adopter Perk Voucher Box */}
                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <Gift className="w-5 h-5 text-amber-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-amber-900">Pawmise Adopter Voucher</div>
                        <div className="text-xs text-amber-700">{biz.perk}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => showToast(`Voucher code copied: ${biz.code}`)}
                      className="bg-amber-200/80 hover:bg-amber-300 text-amber-900 font-bold px-3 py-1.5 rounded-xl text-xs transition shrink-0"
                    >
                      Use Voucher
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs border-t border-slate-100">
                    <span className="font-medium text-slate-500">Contact: {biz.phone}</span>
                    <button
                      onClick={() => showToast(`Connecting to ${biz.name}...`)}
                      className="text-teal-700 font-bold hover:underline flex items-center space-x-1"
                    >
                      <span>Contact Business</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== FLIGHT NANNY TAB ==================== */}
        {selectedTab === 'flight' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-300 border border-amber-300/30 px-3 py-1 rounded-full text-xs font-semibold">
                <Plane className="w-4 h-4" />
                <span>Hamad International Airport (DOH) Escorts</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">Fly a Rescue Pet to Their Forever Home!</h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Are you flying out of Doha to Europe, the US, or Canada? You can save a life without paying a single QAR! Pawmise Rescue covers all export paperwork, vet checks, crate fees, and ticket add-ons.
              </p>
              <button
                onClick={() => setIsFlightNannyModalOpen(true)}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3 rounded-2xl text-sm transition shadow-lg inline-block"
              >
                Sign Up as Flight Nanny
              </button>
            </div>

            {/* How it works grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Share Flight Details',
                  desc: 'Provide your flight date, airline (e.g. Qatar Airways), and destination city.'
                },
                {
                  step: '02',
                  title: 'We Handle Everything',
                  desc: 'Pawmise prepares export health certificates, microchip papers, and airline bookings.'
                },
                {
                  step: '03',
                  title: 'Airport Hand-off',
                  desc: 'We meet you at DOH departure terminal, and the adopters meet you upon arrival!'
                }
              ].map((s) => (
                <div key={s.step} className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
                  <div className="text-3xl font-extrabold text-teal-600">{s.step}</div>
                  <h3 className="font-bold text-lg text-slate-900">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Pets needing flight escorts */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">Pets Currently Awaiting Airport Escorts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PETS_DATA.filter(p => p.escortNeeded).map(pet => (
                  <div key={pet.id} className="bg-white p-4 rounded-3xl border border-slate-200 flex items-center space-x-4">
                    <img src={pet.image} alt={pet.name} className="w-20 h-20 rounded-2xl object-cover" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900">{pet.name} ({pet.species})</h4>
                      <div className="text-xs text-amber-700 bg-amber-50 font-semibold px-2 py-0.5 rounded-md inline-block">
                        Destination: {pet.destination}
                      </div>
                      <p className="text-xs text-slate-500">{pet.breed}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {}
      {selectedPet && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedPet(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img src={selectedPet.image} alt={selectedPet.name} className="w-full sm:w-56 h-56 rounded-2xl object-cover" />
              <div className="space-y-3 flex-1">
                <div className="flex items-center space-x-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {selectedPet.species}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{selectedPet.location}</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">{selectedPet.name}</h2>
                <div className="text-xs text-slate-600 space-y-1">
                  <div><span className="font-semibold">Breed:</span> {selectedPet.breed}</div>
                  <div><span className="font-semibold">Age & Gender:</span> {selectedPet.age} • {selectedPet.gender}</div>
                  <div><span className="font-semibold">Medical Status:</span> {selectedPet.condition}</div>
                </div>

                {selectedPet.escortNeeded && (
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 text-xs text-indigo-900 font-medium">
                    ✈️ International adoption ready for: <span className="font-bold">{selectedPet.destination}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Rescue Story</h3>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {selectedPet.story}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedPet(null);
                  showToast(`Adoption application initiated for ${selectedPet.name}! Our team in Doha will contact you.`);
                }}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-2xl text-xs sm:text-sm shadow-md transition"
              >
                Apply to Adopt / Foster
              </button>
              <button
                onClick={() => {
                  const target = selectedPet;
                  setSelectedPet(null);
                  setSponsorPetTarget(target);
                  setIsSponsorModalOpen(true);
                }}
                className="flex-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3 rounded-2xl text-xs sm:text-sm transition"
              >
                Sponsor Medical Fund
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {isSponsorModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 relative shadow-2xl border border-slate-100">
            <button
              onClick={() => setIsSponsorModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-teal-600">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-xs font-bold uppercase">Non-Profit Contribution</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {sponsorPetTarget ? `Sponsor ${sponsorPetTarget.name}` : 'Support Pawmise Rescue'}
              </h2>
              <p className="text-xs text-slate-500">
                Your donation directly funds veterinary care, specialized food, and international travel preparations.
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700">Select Amount (QAR - Qatari Riyal)</label>
              <div className="grid grid-cols-4 gap-2">
                {[100, 250, 500, 1000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSponsorAmount(amt)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition ${
                      sponsorAmount === amt
                        ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {amt} QAR
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setIsSponsorModalOpen(false);
                showToast(`Thank you! Your donation of ${sponsorAmount} QAR has been received with gratitude.`);
              }}
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-3.5 rounded-2xl text-sm shadow-md transition"
            >
              Confirm Donation ({sponsorAmount} QAR)
            </button>
          </div>
        </div>
      )}

      {}
      {isBusinessModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setIsBusinessModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-teal-600 uppercase">Local Business Network</span>
              <h2 className="text-2xl font-extrabold text-slate-900">Partner With Pawmise Doha</h2>
              <p className="text-xs text-slate-500">
                Join our verified directory for local veterinary clinics, pet stores, and pet care services in Qatar.
              </p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              setIsBusinessModalOpen(false);
              showToast("Business partnership request submitted! Our Doha representative will contact you within 24 hours.");
            }} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Business Name</label>
                <input required type="text" placeholder="e.g. Al Rayyan Veterinary Clinic" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Category</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold">
                  <option>Veterinary Clinic</option>
                  <option>Pet Store & Supplies</option>
                  <option>Grooming Salon</option>
                  <option>Boarding & Daycare</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Proposed Adopter Perk / Discount Offer</label>
                <input required type="text" placeholder="e.g. 15% off first grooming session" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>

              <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-2xl shadow-md transition">
                Submit Business Application
              </button>
            </form>
          </div>
        </div>
      )}

      {}
      {isFlightNannyModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setIsFlightNannyModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-600 uppercase">DOH Departure Travel</span>
              <h2 className="text-2xl font-extrabold text-slate-900">Flight Nanny Registration</h2>
              <p className="text-xs text-slate-500">
                Help a rescued cat or dog fly to their adoption family overseas at no cost to you.
              </p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              setIsFlightNannyModalOpen(false);
              showToast("Flight Nanny details registered! Our flight coordinator will reach out via WhatsApp.");
            }} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Your Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Airline</label>
                  <input required type="text" placeholder="e.g. Qatar Airways" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Destination City</label>
                  <input required type="text" placeholder="e.g. Frankfurt / London" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Travel Date</label>
                <input required type="date" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>

              <button type="submit" className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3.5 rounded-2xl shadow-md transition">
                Register Travel Itinerary
              </button>
            </form>
          </div>
        </div>
      )}

      {}
      <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-600 flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">Pawmise Rescue Qatar</div>
                <div className="text-slate-500">Non-Profit Animal Rescue • Doha, Qatar</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-slate-300 font-semibold">
              <button onClick={() => setSelectedTab('home')} className="hover:text-teal-400">Home</button>
              <button onClick={() => setSelectedTab('adopt')} className="hover:text-teal-400">Adoptable Pets</button>
              <button onClick={() => setSelectedTab('special')} className="hover:text-teal-400">Special Needs</button>
              <button onClick={() => setSelectedTab('directory')} className="hover:text-teal-400">Local Doha Directory</button>
              <button onClick={() => setSelectedTab('flight')} className="hover:text-teal-400">Flight Nanny</button>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-slate-500 gap-4">
            <div>© {new Date().getFullYear()} Pawmise Rescue Qatar. All rights reserved.</div>
            <div className="flex space-x-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}