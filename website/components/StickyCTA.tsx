"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ヒーローセクションを過ぎたあたりから表示する（100pxスクロール後など）
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isClosed) return null;

  return (
    <div
      className={`fixed bottom-6 left-4 right-4 z-50 transition-all duration-500 transform md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="relative flex items-center justify-between rounded-full bg-dojo-green p-1.5 shadow-xl shadow-dojo-green/20 ring-1 ring-white/20 backdrop-blur-sm pr-1.5">
        {/* Close Button */}
        <button 
          onClick={() => setIsClosed(true)}
          className="absolute -top-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-dojo-green shadow-sm hover:bg-gray-100 border border-dojo-green/10"
          aria-label="閉じる"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <a
          href="https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=sticky_cta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center gap-3 pl-1"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-inner">
            <span className="text-xl">🥋</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-dojo-gold leading-none mb-0.5">無料で見学・相談</span>
            <span className="text-sm font-bold text-white leading-none">LINEオープンチャットに参加</span>
          </div>
        </a>
        
        <a
          href="https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=sticky_cta"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 flex h-9 items-center justify-center rounded-full bg-dojo-gold px-4 text-xs font-bold text-ink transition-transform active:scale-95 shadow-sm whitespace-nowrap"
        >
          参加する →
        </a>
      </div>
    </div>
  );
}
