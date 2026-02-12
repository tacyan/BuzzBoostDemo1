import React from 'react';
import { ShoppingBag, Users, AlertCircle, CheckCircle, Tag, MousePointerClick, Sparkles, TrendingUp, Volume2, VolumeX, Play } from 'lucide-react';

interface HeroSectionProps {
  onGenerate: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGenerate }) => {
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
      {/* Left Column: Hero & Form */}
      <div className="lg:col-span-5 flex flex-col justify-center h-full pt-4 lg:pt-8">
        {/* Headline Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            AI 動画ジェネレーター
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
            売れる動画を<br/>
            <span className="text-primary italic">60秒で生成</span>。
          </h1>
          <p className="text-lg text-gray-400 max-w-md leading-relaxed">
            ジム、サロン、実店舗の集客動画を、編集スキルなしで瞬時に作成。
          </p>
        </div>

        {/* Input Form Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 md:p-8 shadow-2xl relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur pointer-events-none"></div>
          
          <div className="relative space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField 
                label="商品 / サービス名" 
                icon={<ShoppingBag size={16} />} 
                placeholder="例: 30日間集中フィットネス" 
              />
              <InputField 
                label="ターゲット層" 
                icon={<Users size={16} />} 
                placeholder="例: 忙しい主婦、会社員" 
              />
            </div>

            <InputField 
              label="顧客の悩み・課題" 
              icon={<AlertCircle size={16} />} 
              placeholder="例: 運動する時間がない、体力が落ちた" 
            />
            
            <InputField 
              label="主なベネフィット" 
              icon={<CheckCircle size={16} />} 
              placeholder="例: 1日15分でOK、2週間で効果実感" 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField 
                label="オファー内容" 
                icon={<Tag size={16} />} 
                placeholder="例: 初月50%OFF" 
              />
               <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">アクション (CTA)</label>
                <div className="relative">
                  <div className="absolute left-4 top-3.5 text-gray-500 pointer-events-none">
                    <MousePointerClick size={16} />
                  </div>
                  <select className="w-full bg-black/40 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-white rounded-xl py-3 pl-10 pr-8 text-sm placeholder-gray-600 transition-all outline-none appearance-none cursor-pointer">
                    <option>予約する (Book Now)</option>
                    <option>詳細を見る (Learn More)</option>
                    <option>登録する (Sign Up)</option>
                    <option>クーポンを受け取る (Get Offer)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={onGenerate}
                className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg py-4 px-8 rounded-full shadow-[0_0_20px_rgba(19,236,106,0.3)] hover:shadow-[0_0_30px_rgba(19,236,106,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                動画を生成する (無料)
              </button>
              
              <div className="text-center mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                <div className="flex -space-x-2 overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOumI-U4gVh8LfXnjYi5T1TTwnhER05rA_V4b8FBZ-ERFriUFRJtkqyKpMN0nUSoAL5cjCESBGUKHZ1K0CLRZMZdQyXxP4_AC9-iqVy-FGJwxlSnTf9V2yfqffFdVzTkXJC1cXT4O07O8mAIphEIO3KmuaWDPpOH8jC9d4ldzhCWOhbOHupOrNbmL6726i4_EXsItmtkWZnDV0OZ9WDWD8b18cuqHd9y3NlC5N6rTqnKCSHykLS4g9_NNQs6HGNTyJJQtxhW9cGhjQ" alt="User 1" className="inline-block h-5 w-5 rounded-full ring-2 ring-background-dark grayscale opacity-70" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPuBJxc3AP0jA121OLwpzPxi0lko9_1qnKtgl8LdyEFa7mz3WKEN1-A1OOqbuLQuPoY3rjm3g7873XE8OJSpeaneQw9Q12q2cFizKsRGOKR3zFRCRgIwcjyNX0q3N6Zu_ZtGjvY-CZxTYce4iKh8Ku8ssp3crZC7NICHR-MPkTUY3anNy55o_eXoa2EmE50WtoLo-fJgLzsZoE701-dKZhfzciYqoPQLkxNYPxrk44fQC9igapQF0pygKdaRhDjjOeex4lvqSRl9j8" alt="User 2" className="inline-block h-5 w-5 rounded-full ring-2 ring-background-dark grayscale opacity-70" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy1iys4UcXYIkW-ULJo4m6Elk1Jx9FWSxPq7l0z0-xsUG3diLXeK0lh5w0vl_9yiHr2ofcKznxpMzfRW9Y4ykEEBGpQRks5GRI8Iuh_ZvPgcHk4PGKn4qhZsqr_XoVipYhgmB0uB-wjTV1fFw7CJXzxX8jdrj3NHt3wIQ8ddZVCkAn3vKG71lrKRAgcy6S7eV-5vHzDBjRBPtQrTdXTphjzjBb4UrWlmhs8y47xulIMzwJlQlivI1nJs12CQt2fHUu834On96_FmWd" alt="User 3" className="inline-block h-5 w-5 rounded-full ring-2 ring-background-dark grayscale opacity-70" />
                </div>
                今週2,000社以上が利用
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Video Preview Grid */}
      <div className="lg:col-span-7 relative h-full flex flex-col justify-center mt-12 lg:mt-0">
         <div className="absolute -top-12 right-12 text-gray-800 dark:text-gray-800 text-9xl font-bold opacity-10 select-none z-0">
          DEMO
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Card 1 */}
          <VideoCard 
            offset="md:translate-y-12"
            title="ハイテンション" 
            desc="速いカット割りと音楽"
            templateTag="テンプレート A"
            muted
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCvzQ1iv-qJEXewMvphOc5NLYyZ4ydZRTKkbKZ3Aco8rMZQQFVSdC2YTKqwCQCPyjZZpYGTsafv3OSk6538RkkNxgzaUMjUtuC7VJyhYw98e-g-O6YGT2KpSf_glTgc7RCoUn-OFyXjw9RVcL-57EHXFRM09qdtgO1Nvc8iCxM5FnfmRO5wSc_JHmbhP1kumsaW8XX9bOpO3p-Cz1QKE4aTykYrq4rKxuVkYrRSsweW8GRTf9Fq_YqFOEZXxqSolKeDT6PDoGeLuFp3"
          >
             <div className="absolute bottom-6 left-4 right-4 space-y-2">
                <div className="bg-white text-black text-xs font-bold px-3 py-2 rounded-lg inline-block shadow-lg transform -rotate-1">
                  🔥 短期間で理想のボディ！
                </div>
                <div className="bg-primary text-black text-xs font-bold px-3 py-2 rounded-lg inline-block shadow-lg transform rotate-1">
                  今日だけ50%OFF
                </div>
              </div>
          </VideoCard>

          {/* Card 2 (Selected) */}
          <VideoCard 
            offset="md:-translate-y-0"
            title="お客様の声" 
            desc="信頼を構築する証言形式"
            descColor="text-primary"
            templateTag="選択中"
            tagColor="bg-primary text-black"
            borderColor="border-primary"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAMxBnyXKfEpwLY28Y_XkKpjte7jCLe2tmnMsR7rsXY7Ljs0Z9emEu30h0-txYq3uJci85zV7ZHcns7rkH3ILtloRBOpP6AbUANbKV3DV6ZDHojQfOlBDPxf8WaFor78bP3Jha2VgGzXdnkrhQ7gFY4sJb8RQ-dsueQaiRbP4ttP0TWA1HY5tGxdu98ecvLZ5V8KMLjG2ZjO64H-kQf7jjvwjjKJHk4Hr8zcAxv33-oyexnngpuagnL47nL-a2Yn4eVVi5hDCq4sZb-"
            glow
          >
             <div className="absolute bottom-12 left-0 right-0 px-6 text-center">
                <p className="text-white font-bold text-sm drop-shadow-md leading-tight">"こんなに早く結果が出るとは<span className="text-primary">思いませんでした</span>！"</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                <div className="h-full bg-primary w-2/3"></div>
              </div>
          </VideoCard>

          {/* Card 3 */}
          <VideoCard 
            offset="md:translate-y-8"
            title="ショーケース" 
            desc="プロフェッショナルな商品紹介"
            templateTag="テンプレート C"
            muted
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAK8pftAjhGqmxqdg-7NudM6v_P5esduNsJamK0xZnZVBVfM3yiW_Y0vKsK7IdQ6uvdghfvGxs9lR22vm4W5cdofN1zuAOX9PjMhAWKQ5T0_0oh8XgbWCU_QxovLUthALJNzzLnsFCYZ_URY0UhiA6Pla6CsYNTp95UYq9t3LHA_4z0S4uTYEH8TdEEIvgGlcy335Ra0GBTTC00aKmLd_V2n9MV1FCtgvsGT5r3qwD8t_BBVPJjZhW-rxO2cziJIfokQR_OzVjKAj3X"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
              <div className="bg-white/90 backdrop-blur rounded-xl p-3 shadow-xl transform rotate-3 border border-white/50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="h-2 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                <div className="h-2 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
             <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="bg-black/60 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded border border-white/10">SHOWCASE</span>
              </div>
          </VideoCard>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 right-0 md:-right-8 lg:-right-12 translate-y-12 md:translate-y-0 hidden xl:block">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 max-w-[200px]">
            <div className="bg-primary/20 p-2 rounded-full">
              <TrendingUp size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-gray-400">平均コンバージョン</p>
              <p className="text-lg font-bold text-white">+145%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const InputField = ({ label, icon, placeholder }: { label: string, icon: React.ReactNode, placeholder: string }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-3.5 text-gray-500 pointer-events-none">
        {icon}
      </div>
      <input 
        type="text" 
        className="w-full bg-black/40 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-white rounded-xl py-3 pl-10 pr-4 text-sm placeholder-gray-600 transition-all outline-none" 
        placeholder={placeholder} 
      />
    </div>
  </div>
);

interface VideoCardProps {
  title: string;
  desc: string;
  descColor?: string;
  offset?: string;
  templateTag: string;
  tagColor?: string;
  muted?: boolean;
  borderColor?: string;
  glow?: boolean;
  children?: React.ReactNode;
  imageUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  title, desc, descColor = "text-white", offset = "", templateTag, tagColor = "bg-black/50 backdrop-blur-md text-white", muted = false, borderColor = "border-white/10", glow = false, children, imageUrl 
}) => {
  return (
    <div className={`relative group cursor-pointer ${offset}`}>
      {glow && (
        <div className="absolute -inset-1 bg-gradient-to-b from-primary to-transparent rounded-[2.2rem] opacity-40 blur-sm pointer-events-none"></div>
      )}
      {!glow && (
         <div className="absolute -inset-0.5 bg-primary/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none"></div>
      )}
      <div className={`relative aspect-[9/16] bg-gray-800 rounded-[2rem] overflow-hidden border ${borderColor} shadow-2xl ${glow ? 'shadow-primary/20' : ''} group-hover:scale-[1.02] transition-transform duration-300`}>
        <img 
          src={imageUrl}
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        
        {/* Top Overlay */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${tagColor} shadow-lg border border-white/10`}>{templateTag}</span>
          <div className="w-6 h-6 rounded-full bg-black/50 backdrop-blur border border-white/20 flex items-center justify-center">
            {muted ? <VolumeX size={12} className="text-white" /> : <Volume2 size={12} className="text-white" />}
          </div>
        </div>

        {children}

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
          <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
            <Play size={24} fill="currentColor" />
          </div>
        </div>
      </div>
      
      <div className="mt-3 text-center">
        <p className={`text-sm font-semibold ${descColor === 'text-white' ? 'text-white' : 'text-primary'}`}>{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
};