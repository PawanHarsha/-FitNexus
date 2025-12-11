import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { Marketplace } from './views/Marketplace';
import { Booking } from './views/Booking';
import { HomeGym } from './views/HomeGym';
import { AICoach } from './views/AICoach';
import { Dashboard } from './views/Dashboard';
import { View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Home changeView={setCurrentView} />;
      case View.MARKETPLACE:
        return <Marketplace addToCart={addToCart} />;
      case View.BOOKING:
        return <Booking />;
      case View.HOME_GYM:
        return <HomeGym addToCart={addToCart} />;
      case View.ASSISTANT:
        return <AICoach />;
      case View.DASHBOARD:
        return <Dashboard />;
      default:
        return <Home changeView={setCurrentView} />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      setCurrentView={setCurrentView}
      cartCount={cartCount}
    >
      {renderView()}
    </Layout>
  );
}

export default App;