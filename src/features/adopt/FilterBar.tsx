import React from 'react';
import { Search, Heart } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterSpecies: string;
  setFilterSpecies: (species: string) => void;
  filterSpecialNeeds: boolean;
  setFilterSpecialNeeds: (checked: boolean) => void;
  filterEscortNeeded: boolean;
  setFilterEscortNeeded: (checked: boolean) => void;
  totalResults: number;
}

export default function FilterBar({
  searchQuery,
  setSearchQuery,
  filterSpecies,
  setFilterSpecies,
  filterSpecialNeeds,
  setFilterSpecialNeeds,
  filterEscortNeeded,
  setFilterEscortNeeded,
  totalResults,
}: FilterBarProps) {
  return (
    <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Live Search Input Field */}
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

        {/* Dynamic Controls Grid Matrix */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          
          {/* Species Toggle Buttons Array */}
          <div className="flex bg-slate-100 p-1 rounded-2xl text-xs font-semibold">
            {['All', 'Cat', 'Dog'].map((species) => (
              <button
                key={species}
                type="button"
                onClick={() => setFilterSpecies(species)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  filterSpecies === species 
                    ? 'bg-white shadow text-teal-700' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {species === 'All' ? 'All Pets' : `${species}s`}
              </button>
            ))}
          </div>

          {/* Special Needs Status Flag Toggle */}
          <button
            type="button"
            onClick={() => setFilterSpecialNeeds(!filterSpecialNeeds)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-semibold border transition flex items-center space-x-1.5 ${
              filterSpecialNeeds
                ? 'bg-amber-50 border-amber-300 text-amber-800'
                : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 text-amber-500 ${filterSpecialNeeds ? 'fill-current' : ''}`} />
            <span>Special Needs</span>
          </button>

          {/* Flight Escort Required Flag Toggle */}
          <label className="flex items-center space-x-2 cursor-pointer bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl text-xs font-semibold hover:bg-slate-100 transition">
            <input
              type="checkbox"
              checked={filterEscortNeeded}
              onChange={(e) => setFilterEscortNeeded(e.target.checked)}
              className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4 border-slate-300"
            />
            <span>Flight Escort Needed</span>
          </label>

        </div>
      </div>

      {/* Reactive Counter Row */}
      <div className="text-xs text-slate-500 font-semibold border-t border-slate-100 pt-3 flex justify-between items-center">
        <span>Active Criteria Results</span>
        <span>Showing <span className="text-teal-700 font-bold">{totalResults}</span> matches</span>
      </div>
    </section>
  );
}
