import React, { useState } from 'react';
import { View } from '../types';
import { Menu, X, ShoppingBag, Dumbbell, MapPin, Home as HomeIcon, Bot, Activity } from 'lucide-react';

interface LayoutProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  cartCount: number;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, setCurrentView, cartCount, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: View.HOME, label: 'Home', icon: <HomeIcon size={18} /> },
    { id: View.MARKETPLACE, label: 'Shop', icon: <ShoppingBag size={18} /> },
    { id: View.BOOKING, label: 'Book Gym', icon: <MapPin size={18} /> },
    { id: View.HOME_GYM, label: 'Build Gym', icon: <Dumbbell size={18} /> },
    { id: View.DASHBOARD, label: 'My Progress', icon: <Activity size={18} /> },
    { id: View.ASSISTANT, label: 'AI Coach', icon: <Bot size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-nexus-black text-nexus-text font-sans flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-nexus-black/95 border-b border-nexus-gray backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView(View.HOME)}>
              <div className="w-8 h-8 bg-nexus-primary rounded-lg flex items-center justify-center text-nexus-black font-bold text-xl">N</div>
              <span className="font-bold text-xl tracking-tight">FitNexus</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`relative flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      currentView === item.id
                        ? 'bg-nexus-gray text-nexus-primary'
                        : 'text-nexus-muted hover:text-white hover:bg-nexus-gray'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                    {item.id === View.MARKETPLACE && cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-nexus-primary text-nexus-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-nexus-black">
                        {cartCount}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-nexus-muted hover:text-white hover:bg-nexus-gray focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-nexus-gray bg-nexus-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-3 py-3 rounded-md text-base font-medium ${
                    currentView === item.id
                      ? 'bg-nexus-gray text-nexus-primary'
                      : 'text-nexus-muted hover:text-white hover:bg-nexus-gray'
                  }`}
                >
                  <div className="flex items-center gap-3 w-full">
                    {item.icon}
                    {item.label}
                    {item.id === View.MARKETPLACE && cartCount > 0 && (
                      <span className="ml-auto bg-nexus-primary text-nexus-black text-xs font-bold px-2 py-0.5 rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-nexus-dark border-t border-nexus-gray py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-nexus-muted text-sm">
          <p>&copy; {new Date().getFullYear()} FitNexus Global. All rights reserved.</p>
          <p className="mt-2">Pay Here, Gym Everywhere.</p>
        </div>
      </footer>
    </div>
  );
};