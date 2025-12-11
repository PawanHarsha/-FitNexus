import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Star, ShoppingCart, Check } from 'lucide-react';

interface MarketplaceProps {
  addToCart: () => void;
}

export const Marketplace: React.FC<MarketplaceProps> = ({ addToCart }) => {
  const [filter, setFilter] = useState('All');
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Supplements', 'Gear', 'Equipment', 'Apparel'];

  const filteredProducts = filter === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  const handleAdd = (id: string) => {
    addToCart();
    setAddedItems(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Marketplace</h2>
          <p className="text-nexus-muted">Premium gear for elite performance.</p>
        </div>
        
        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                filter === cat 
                  ? 'bg-nexus-primary text-nexus-black font-semibold' 
                  : 'bg-nexus-gray text-nexus-text hover:bg-nexus-dark border border-nexus-gray'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-nexus-dark rounded-xl overflow-hidden border border-nexus-gray hover:border-nexus-primary transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-nexus-black/80 text-nexus-primary px-2 py-1 rounded text-xs font-bold">
                {product.category}
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white truncate pr-2">{product.name}</h3>
                <span className="text-nexus-primary font-bold">${product.price}</span>
              </div>
              <p className="text-nexus-muted text-sm mb-4 h-10 overflow-hidden">{product.description}</p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-yellow-500 text-sm">
                  <Star size={16} fill="currentColor" />
                  <span className="ml-1 text-nexus-text">{product.rating}</span>
                </div>
                <button 
                  onClick={() => handleAdd(product.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    addedItems[product.id] 
                      ? 'bg-green-500 text-white'
                      : 'bg-nexus-text text-nexus-black hover:bg-nexus-primary'
                  }`}
                >
                  {addedItems[product.id] ? <Check size={16} /> : <ShoppingCart size={16} />} 
                  {addedItems[product.id] ? 'Added' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};