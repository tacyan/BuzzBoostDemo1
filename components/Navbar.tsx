import React from 'react';
import { Zap } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView }) => {
  return (
    <nav className="w-full px-6 py-6 absolute top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold">
            <Zap size={20} fill="black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">BUZZBOOST</span>
        </div>

        {currentView === 'input' ? (
          <>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
              <a href="#" className="hover:text-primary transition-colors">機能</a>
              <a href="#" className="hover:text-primary transition-colors">テンプレート</a>
              <a href="#" className="hover:text-primary transition-colors">料金</a>
            </div>
            <div className="flex gap-4 items-center">
              <button className="hidden md:block text-sm font-medium text-white hover:text-primary transition-colors">
                ログイン
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 text-white text-sm font-medium px-5 py-2 rounded-full transition-all">
                無料で試す
              </button>
            </div>
          </>
        ) : (
           <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-400">ステータス: <span className="text-primary">処理中</span></span>
            <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
          </div>
        )}
      </div>
    </nav>
  );
};