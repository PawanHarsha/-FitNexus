import React from 'react';
import { HOME_GYM_PACKAGES } from '../constants';
import { Check, Truck, PenTool, LayoutTemplate } from 'lucide-react';

interface HomeGymProps {
  addToCart: () => void;
}

export const HomeGym: React.FC<HomeGymProps> = ({ addToCart }) => {
  return (
    <div className="min-h-screen bg-nexus-black">
      {/* Hero */}
      <div className="bg-gradient-to-b from-nexus-gray/50 to-nexus-black py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Build Your Sanctuary</h1>
        <p className="text-xl text-nexus-muted max-w-3xl mx-auto mb-8">
          Professional grade equipment packages tailored to your space. 
          From a corner in your apartment to a full garage conversion.
        </p>
        <div className="flex justify-center gap-8 text-nexus-primary text-sm font-semibold">
          <div className="flex items-center gap-2"><Truck size={20} /> Free Shipping</div>
          <div className="flex items-center gap-2"><PenTool size={20} /> Expert Installation</div>
          <div className="flex items-center gap-2"><LayoutTemplate size={20} /> 3D Design Service</div>
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOME_GYM_PACKAGES.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className={`rounded-2xl overflow-hidden flex flex-col relative border ${
                index === 1 ? 'border-nexus-primary shadow-[0_0_30px_rgba(163,230,53,0.1)] bg-nexus-dark' : 'border-nexus-gray bg-nexus-black'
              }`}
            >
              {index === 1 && (
                <div className="absolute top-0 left-0 w-full bg-nexus-primary text-nexus-black text-center text-xs font-bold py-1">
                  BEST VALUE
                </div>
              )}
              
              <div className="h-48 overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-nexus-muted text-sm mb-6 h-12">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${pkg.price}</span>
                  <span className="text-nexus-muted ml-2">/ bundle</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-nexus-text">
                      <Check className="text-nexus-primary shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={addToCart}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    index === 1 
                      ? 'bg-nexus-primary text-nexus-black hover:bg-nexus-primaryHover' 
                      : 'bg-nexus-gray text-white hover:bg-nexus-text hover:text-nexus-black'
                  }`}
                >
                  Configure & Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Installation CTA */}
      <div className="max-w-5xl mx-auto px-4 py-16 mb-12">
        <div className="bg-nexus-dark rounded-3xl p-8 md:p-12 border border-nexus-gray flex flex-col md:flex-row items-center gap-8">
          <div className="flex-grow">
            <h3 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h3>
            <p className="text-nexus-muted">
              Use our AI Coach to analyze your available space and fitness goals. 
              It will recommend the perfect setup for you.
            </p>
          </div>
          <button className="bg-white text-nexus-black px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:bg-nexus-primary transition-colors">
            Ask AI Assistant
          </button>
        </div>
      </div>
    </div>
  );
};