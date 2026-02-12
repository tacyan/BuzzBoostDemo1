import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProcessingView } from './components/ProcessingView';
import { ViewState, FormData } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('input');
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formData, setFormData] = useState<FormData>({
    product: '',
    audience: '',
    painPoint: '',
    benefit: '',
    offer: '',
    cta: 'Book Now'
  });

  const handleStartGeneration = () => {
    setCurrentView('processing');
  };

  const handleReset = () => {
    setCurrentView('input');
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Navbar currentView={currentView} />

      <main className="flex-grow flex items-center justify-center relative pt-20 md:pt-24 pb-12 px-4 md:px-8">
        {currentView === 'input' ? (
          <HeroSection onGenerate={handleStartGeneration} />
        ) : (
          <ProcessingView onBack={handleReset} />
        )}
      </main>

      <footer className="w-full border-t border-white/5 py-6 px-6 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2023 BUZZBOOST Inc. All rendering performed on renewable energy servers.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;