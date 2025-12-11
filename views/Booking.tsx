import React, { useState } from 'react';
import { MOCK_GYMS } from '../constants';
import { MapPin, Search, Calendar, Star, CheckCircle } from 'lucide-react';

export const Booking: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookedGyms, setBookedGyms] = useState<Record<string, boolean>>({});

  const filteredGyms = MOCK_GYMS.filter(gym => 
    gym.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    gym.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBook = (id: string) => {
    setBookedGyms(prev => ({ ...prev, [id]: true }));
    // In a real app, this would integrate with a payment gateway and backend
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Pay Here, Gym Everywhere</h2>
        <p className="text-xl text-nexus-muted max-w-2xl mx-auto">
          One account, unlimited access. Book a session at any partner gym or trainer near you instantly.
        </p>
      </div>

      <div className="bg-nexus-gray p-4 rounded-xl flex items-center gap-4 mb-8 max-w-2xl mx-auto shadow-lg">
        <MapPin className="text-nexus-primary" />
        <input 
          type="text" 
          placeholder="Search location, gym name, or trainer..." 
          className="bg-transparent border-none outline-none text-white w-full placeholder-nexus-muted"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-nexus-primary hover:bg-nexus-primaryHover text-nexus-black p-2 rounded-lg">
          <Search size={20} />
        </button>
      </div>

      <div className="space-y-6">
        {filteredGyms.map(gym => (
          <div key={gym.id} className="bg-nexus-dark rounded-xl overflow-hidden border border-nexus-gray flex flex-col md:flex-row hover:border-nexus-muted transition-colors">
            <div className="w-full md:w-1/3 h-48 md:h-auto relative">
              <img src={gym.image} alt={gym.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-nexus-primary text-nexus-black text-xs font-bold px-2 py-1 rounded uppercase">
                {gym.type}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{gym.name}</h3>
                    <p className="text-nexus-muted flex items-center gap-1 text-sm mb-4">
                      <MapPin size={14} /> {gym.location}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-2xl font-bold text-nexus-primary">${gym.pricePerSession}</div>
                    <div className="text-xs text-nexus-muted">per session</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {gym.features.map((feat, idx) => (
                    <span key={idx} className="bg-nexus-black px-2 py-1 rounded text-xs text-nexus-muted border border-nexus-gray">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-nexus-gray/50">
                <div className="flex items-center text-yellow-500">
                  <Star size={18} fill="currentColor" />
                  <span className="ml-1 text-white font-bold">{gym.rating}</span>
                  <span className="text-nexus-muted text-sm ml-1">(120+ reviews)</span>
                </div>
                <button 
                  onClick={() => handleBook(gym.id)}
                  disabled={bookedGyms[gym.id]}
                  className={`px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors ${
                    bookedGyms[gym.id] 
                      ? 'bg-green-900/50 text-green-400 cursor-default border border-green-500/50' 
                      : 'bg-nexus-text text-nexus-black hover:bg-white'
                  }`}
                >
                  {bookedGyms[gym.id] ? (
                    <>Confirmed <CheckCircle size={16} /></>
                  ) : (
                    <>Book Now <Calendar size={16} /></>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredGyms.length === 0 && (
          <div className="text-center py-12 text-nexus-muted">
            No locations found. Try a different search term.
          </div>
        )}
      </div>
    </div>
  );
};