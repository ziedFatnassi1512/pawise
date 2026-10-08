import React from 'react';
import { Heart, Plane } from 'lucide-react';

export default function PetCard({ pet, onSelectProfile }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <div className="relative h-56 overflow-hidden">
          <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            <span className={`px-3 py-1 rounded-full text-xs font-bold shadow ${
              pet.status === 'Available' ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white'
            }`}>
              {pet.status}
            </span>
          </div>
          {pet.escortNeeded && (
            <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center space-x-1">
              <Plane className="w-3.5 h-3.5" />
              <span>Flight Nanny Needed</span>
            </div>
          )}
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-slate-900">{pet.name}</h3>
          <p className="text-xs text-slate-500">{pet.breed} • {pet.age}</p>
          <p className="text-xs text-slate-600 line-clamp-2">{pet.story}</p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={() => onSelectProfile(pet)}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl text-xs font-bold transition"
        >
          View Full Profile
        </button>
      </div>
    </div>
  );
}
