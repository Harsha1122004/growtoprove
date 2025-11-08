// /app/page.tsx
"use client";

import { useMemo, useState } from 'react';
import Navbar from 'public/node_modules/components/Navbar';
import Hero from 'public/node_modules/components/Hero';
import { Video } from 'public/node_modules/components/Video';
import { GlowCard } from 'public/node_modules/components/GlowCard';

/** Inline neon app badges */
const Badge = (props: { label: string; children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-800/80 bg-neutral-900/60 px-3 py-2">
    <span className="h-5 w-5">{props.children}</span>
    <span className="text-sm text-neutral-200">{props.label}</span>
  </div>
);

const Ae = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <rect rx="5" width="24" height="24" fill="#1f1a2e" />
    <text x="5" y="17" fontFamily="Inter" fontWeight="900" fontSize="12" fill="#C6FF3F">Ae</text>
  </svg>
);
const Pr = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <rect rx="5" width="24" height="24" fill="#1b1830" />
    <text x="5" y="17" fontFamily="Inter" fontWeight="900" fontSize="12" fill="#C6FF3F">Pr</text>
  </svg>
);
const Davinci = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <rect rx="5" width="24" height="24" fill="#0e2b33" />
    <g fill="#C6FF3F">
      <circle cx="12" cy="8" r="3"/>
      <circle cx="7" cy="16" r="3"/>
      <circle cx="17" cy="16" r="3"/>
    </g>
  </svg>
);
const Capcut = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <rect rx="5" width="24" height="24" fill="#0b0b0b" />
    <path d="M6 7h12v3H6zm0 7h12v3H6z" fill="#C6FF3F"/>
    <path d="M7 6l10 12M17 6L7 18" stroke="#C6FF3F" strokeWidth="1.5"/>
  </svg>
);

/** Your work links */
const SECTIONS: Record<string, { id: string; src: string }[]> = {
  reels: [
    { id: 'r1', src: 'https://youtu.be/SqsWohjvR0A' },
    { id: 'r2', src: 'https://youtu.be/AfWDo8Mwj0I' },
    { id: 'r3', src: 'https://youtu.be/d8zObRHdlhM' },
    { id: 'r4', src: 'https://youtu.be/k95LOTYLDmo' },
    { id: 'r5', src: 'https://youtu.be/GlOguX6gTm4' }
  ],
  motion: [
    { id: 'm1', src: 'https://youtu.be/bSXj8NWKT18' },
    { id: 'm2', src: 'https://youtu.be/yfJ9GJA6D5g' },
    { id: 'm3', src: 'https://youtu.be/8Zf_2j-8E3A' },
    { id: 'm4', src: 'https://youtu.be/47J7DlWu6c8' }
  ],
  typography: [
    { id: 't1', src: 'https://youtu.be/GlOguX6gTm4' },
    { id: 't2', src: 'https://youtu.be/YBU3b2T8-nQ' }
  ]
};

export default function Page() {
  const tabs = useMemo(() => ['reels', 'motion', 'typography'] as const, []);
  const [active, setActive] = useState<(typeof tabs)[number]>('reels');

  return (
    <main className="relative bg-[#0a0b0d] text-white">

      {/* ✅ NAVBAR ADDED HERE */}
      <Navbar />

      {/* ✅ HERO SECTION */}
      <Hero />

      {/* ✅ WHY US */}
      <section className="container py-10 md:py-16">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h2 className="section-title">Why us</h2>
            <p className="mt-3 text-neutral-300">
              We’ve helped <span className="text-neon font-bold">5+ clients</span> and shipped{' '}
              <span className="text-neon font-bold">25 successful projects</span>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Badge label="After Effects"><Ae /></Badge>
              <Badge label="Premiere Pro"><Pr /></Badge>
              <Badge label="DaVinci Resolve"><Davinci /></Badge>
              <Badge label="CapCut"><Capcut /></Badge>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800/70 bg-neutral-950 p-4 md:p-6">
            <h3 className="text-lg font-semibold">Featured Video</h3>
            <div className="mt-3 overflow-hidden rounded-xl">
              <Video src="https://youtu.be/SqsWohjvR0A" />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SERVICES */}
      <section className="container py-16 md:py-20" id="services">
        <h2 className="section-title">Services</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <GlowCard>
            <h3 className="text-xl font-bold">Video Editing</h3>
            <p className="mt-2 text-neutral-300">A→Z workflows, motion graphics, color, sound</p>
          </GlowCard>

          <GlowCard>
            <h3 className="text-xl font-bold">Social Media Handling</h3>
            <p className="mt-2 text-neutral-300">Planning, scripts, posting, analytics</p>
          </GlowCard>

          <GlowCard>
            <h3 className="text-xl font-bold">Brand Building</h3>
            <p className="mt-2 text-neutral-300">Identity systems, offer design, rollout</p>
          </GlowCard>
        </div>
      </section>

      {/* ✅ WORK SECTION WITH TABS */}
      <section className="container py-16 md:py-20" id="work">
        <h2 className="section-title">Our Work</h2>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold capitalize transition ${
                active === t
                  ? 'border-neon text-white shadow-[0_0_0_4px_rgba(198,255,63,0.08)]'
                  : 'border-neutral-800 text-neutral-300 hover:border-neutral-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS[active].map((v) => (
            <div key={v.id} className="overflow-hidden rounded-2xl border border-neutral-800/70 bg-neutral-950">
              <Video src={v.src} />
            </div>
          ))}
        </div>
      </section>

      {/* ✅ PRICING */}
      <section className="container py-16 md:py-20" id="pricing">
        <h2 className="section-title">Pricing</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <GlowCard>
            <h3 className="text-xl font-bold">Package 1</h3>
            <p className="mt-2">1–2 Reels / week</p>
            <p className="mt-4 text-3xl font-extrabold text-neon">₹15,000+</p>
          </GlowCard>

          <GlowCard>
            <h3 className="text-xl font-bold">Package 2</h3>
            <p className="mt-2">2–3 Reels + Posters</p>
            <p className="mt-4 text-3xl font-extrabold text-neon">₹25,000</p>
          </GlowCard>
        </div>
      </section>

      {/* ✅ CTA */}
      <section className="container py-24 text-center">
        <h2 className="mb-4 text-4xl font-extrabold">Ready to Elevate?</h2>
        <p className="mx-auto max-w-xl text-neutral-300">
          Tell us about your brand — we’ll reply within 24 hours.
        </p>

        <a
          href="mailto:growtoprove@gmail.com"
          className="btn btn-primary mt-6 inline-block"
        >
          Start Now
        </a>
      </section>
    </main>
  );
}
