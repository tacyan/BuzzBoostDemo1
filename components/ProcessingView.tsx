import React, { useState, useEffect } from 'react';
import { Lightbulb, CheckCircle2, ShieldCheck, Info } from 'lucide-react';
import { ChecklistItem } from '../types';

interface ProcessingViewProps {
  onBack: () => void;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: '1', label: '3秒以内のフック', status: 'completed', detail: '0:02秒で強い視覚的変化を検出' },
  { id: '2', label: 'スマホ最適化 (9:16)', status: 'completed', detail: '9:16比率で完全調整済み' },
  { id: '3', label: 'キャプション最適化', status: 'checking', detail: 'キーワードを分析中...', detailColor: 'text-primary' },
  { id: '4', label: 'CTA (行動喚起) の配置', status: 'pending', detail: 'レンダリング待ち' },
  { id: '5', label: '音声シンクロ確認', status: 'pending', detail: '保留中' },
];

export const ProcessingView: React.FC<ProcessingViewProps> = ({ onBack }) => {
  const [progress, setProgress] = useState(0);
  const [items, setItems] = useState(CHECKLIST_ITEMS);

  useEffect(() => {
    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Simulate checklist progress
  useEffect(() => {
    if (progress > 40 && items[2].status === 'checking') {
       setItems(prev => prev.map(item => item.id === '3' ? { ...item, status: 'completed', detail: '維持率向上のため最適化済み' } : item));
       setItems(prev => prev.map(item => item.id === '4' ? { ...item, status: 'checking', detail: 'CTAオーバーレイを統合中...', detailColor: 'text-primary' } : item));
    }
    if (progress > 80 && items[3].status === 'checking') {
        setItems(prev => prev.map(item => item.id === '4' ? { ...item, status: 'completed', detail: 'エンゲージメントピークにCTAを配置' } : item));
        setItems(prev => prev.map(item => item.id === '5' ? { ...item, status: 'checking', detail: 'ビート同期中...', detailColor: 'text-primary' } : item));
    }
    if (progress >= 100) {
        setItems(prev => prev.map(item => item.id === '5' ? { ...item, status: 'completed', detail: '音声同期完了' } : item));
    }
  }, [progress, items]);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
      
      {/* Top Section: Progress */}
      <div className="w-full max-w-3xl text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">バズる動画を生成中...</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">AIが魔法をかけています。少々お待ちください。</p>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full bg-slate-200 dark:bg-surface-dark rounded-full h-8 overflow-hidden shadow-inner border border-slate-300 dark:border-white/5 cursor-pointer" onClick={onBack}>
          <div 
            className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-200 ease-out shadow-[0_0_20px_rgba(19,236,106,0.4)]"
            style={{ width: `${progress}%` }}
          >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full -skew-x-12 animate-progress-shimmer"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <span className="text-sm font-bold tracking-widest text-slate-900 dark:text-white drop-shadow-md">{Math.floor(progress)}% 完了</span>
          </div>
        </div>

        <div className="flex justify-between text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2">
          <span>フェーズ: {progress < 100 ? 'エフェクト適用中' : '仕上げ中'}</span>
          <span>残り時間: {progress < 100 ? '12秒' : '完了'}</span>
        </div>
      </div>

      {/* Split Content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Video Placeholder */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-surface-darker shadow-2xl group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2_kz-mEHWfJU0FMCe0bhV1LS71PJeQT_7ydFAaGGpow80t_YgePA0bHghSQ9bJlPzhQOnvqwQdglm5PpPn8ZDBZly0lBRC7m33_IhnoziJdDw6ZYNAM9BrU2h_WDJbIPZCcCufUHFpscjiZS8qS2xHx2b5X62qggeoqhXaW9v47sTFeWosc85BCGYErGD7mlYq6CoKb14jQN0US-tSv2kfWWDwIVah1jMt1h_ESJX4D2lndgO1ddYSinqijpfGGbspRNGOLrwCQiI" 
              alt="Processing" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
            />
            
            {progress < 100 ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                    <p className="text-sm font-medium text-white/80 animate-pulse">シーン3をエンコード中...</p>
                </div>
            ) : (
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm">
                     <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(19,236,106,0.5)] animate-bounce">
                        <CheckCircle2 size={32} className="text-black" />
                     </div>
                    <p className="text-lg font-bold text-white mt-4">動画完成！</p>
                 </div>
            )}
            
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-2 py-1 bg-black/50 backdrop-blur text-[10px] text-white rounded font-mono border border-white/10">HD 1080P</span>
              <span className="px-2 py-1 bg-black/50 backdrop-blur text-[10px] text-primary rounded font-mono border border-white/10">60 FPS</span>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 rounded-lg p-6 relative overflow-hidden shadow-lg transform transition-all hover:scale-[1.01]">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Lightbulb size={20} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider">Pro Tip #42</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                   字幕付きの動画は、ミュート再生時でもエンゲージメントが<span className="text-primary font-bold">40%向上</span>します。AIが文字サイズをモバイル向けに自動最適化しました。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Checklist */}
        <div className="lg:col-span-5 h-full">
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-xl p-6 h-full flex flex-col shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck size={24} className="text-primary" />
                バイラル投稿チェックリスト
              </h2>
              <span className="text-xs px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-slate-500">自動チェック中</span>
            </div>

            <div className="flex-grow space-y-4">
              {items.map((item) => (
                <ChecklistItemRow key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-center">
              <button className="text-xs text-slate-400 hover:text-primary transition-colors flex items-center justify-center gap-1 mx-auto">
                <Info size={14} />
                なぜこれらが重要なのですか？
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const ChecklistItemRow: React.FC<{ item: ChecklistItem }> = ({ item }) => {
  const isCompleted = item.status === 'completed';
  const isChecking = item.status === 'checking';

  return (
    <div className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
      isCompleted ? 'bg-primary/10 border border-primary/20' : 
      isChecking ? 'bg-slate-50 dark:bg-white/5 border border-primary/50 relative overflow-hidden' : 
      'opacity-50'
    }`}>
      {isChecking && (
        <div className="absolute inset-0 bg-primary/5 w-1/2 animate-pulse pointer-events-none"></div>
      )}

      <div className={`relative z-10 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center shadow-sm transition-colors ${
        isCompleted ? 'bg-primary text-black' :
        isChecking ? 'border-2 border-primary border-t-transparent animate-spin' :
        'border-2 border-slate-300 dark:border-slate-600'
      }`}>
        {isCompleted && <CheckCircle2 size={14} strokeWidth={3} />}
      </div>

      <div className="relative z-10 flex-grow">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</p>
        <p className={`text-xs mt-0.5 ${item.detailColor ? item.detailColor : 'text-slate-500 dark:text-slate-400'}`}>
          {item.detail}
        </p>
      </div>
    </div>
  );
};