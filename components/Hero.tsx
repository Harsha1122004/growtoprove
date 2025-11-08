'use client';

import { useEffect, useMemo, useRef } from 'react';

/** IDs from your links */
const VIDEO_IDS = ['SqsWohjvR0A','AfWDo8Mwj0I','d8zObRHdlhM','k95LOTYLDmo','GlOguX6gTm4'];

function yt(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${id}&modestbranding=1&rel=0`;
}

export default function Hero() {
  const strip = useMemo(() => [...VIDEO_IDS, ...VIDEO_IDS], []);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  // Fix autoplay issues
  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;

    const tryPlay = async () => {
      try { await v.play(); } catch {}
    };

    v.muted = true;
    v.playsInline = true;
    tryPlay();
  }, []);

  return (
    <section className="relative overflow-hidden w-full">

      {/* === BACKGROUND VIDEO === */}
     <img
  src="/5 Best Tools to Design Unique and Creative GIF Banners.gif"
  alt="Background Animation"
  className="absolute inset-0 z-0 h-[100vh] w-full object-cover"
/>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/45" />

      {/* === HERO CONTENT === */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-10 text-center md:pt-36">

        {/* ✅ UPDATED NEON-GLASS BADGE */}
       {/* ✅ UPDATED BADGE — only “to” is green */}
<div
  className="
    mx-auto inline-flex items-center gap-3
    rounded-full
    border border-[#C6FF3F]/40
    bg-neutral-900/40
    px-5 py-2.5
    backdrop-blur-xl
    shadow-[0_0_25px_rgba(198,255,63,0.15)]
    animate-neonPulse
  "
>
  <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
    Grow <span className="text-[#C6FF3F] drop-shadow-[0_0_8px_rgba(198,255,63,0.6)]">to</span> Prove
  </span>

  <span className="text-sm md:text-base text-neutral-300 opacity-90">
    presents
  </span>
</div>



        {/* TITLE */}
        <h1 className="mt-6 text-5xl font-black text-[#D8FF4A] drop-shadow-[0_0_22px_rgba(198,255,63,0.5)] md:text-7xl">
          Raw To Magic
        </h1>
      </div>

      {/* === AUTO-SCROLLING STRIP === */}
      <div className="relative z-10 mx-auto mb-12 max-w-6xl overflow-hidden px-4">
        <div className="marquee flex gap-4">
          {strip.map((id, i) => (
            <div
              key={`${id}-${i}`}
              className="min-w-[260px] sm:min-w-[340px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
            >
              <iframe
                src={yt(id)}
                title={id}
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-[200px] w-full sm:h-[240px] md:h-[260px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* GLOBAL ANIMATIONS */}
      <style jsx global>{`
        @keyframes marqueeMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          width: 200%;
          animation: marqueeMove 28s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes neonPulse {
          0% {
            box-shadow: 0 0 20px rgba(198,255,63,0.1),
                        0 0 40px rgba(198,255,63,0.12);
          }
          50% {
            box-shadow: 0 0 30px rgba(198,255,63,0.18),
                        0 0 60px rgba(198,255,63,0.22);
          }
          100% {
            box-shadow: 0 0 20px rgba(198,255,63,0.1),
                        0 0 40px rgba(198,255,63,0.12);
          }
        }

        .animate-neonPulse {
          animation: neonPulse 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
