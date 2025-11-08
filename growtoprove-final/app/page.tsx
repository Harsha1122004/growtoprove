// /app/page.tsx
"use client";

import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Video } from "../components/Video";
import { GlowCard } from "../components/GlowCard";

/** ✅ UPDATED Badge with BIGGER ICONS */
const Badge = (props: { label: string; children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-3 rounded-xl border border-neutral-800/80 bg-neutral-900/60 px-4 py-2">
    <span className="h-7 w-7">{props.children}</span> {/* bigger icon */}
    <span className="text-base text-neutral-200">{props.label}</span>
  </div>
);

/** ✅ UPDATED ICON SIZES */
const Ae = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7">
    <rect rx="5" width="24" height="24" fill="#1f1a2e" />
    <text x="5" y="17" fontFamily="Inter" fontWeight="900" fontSize="12" fill="#C6FF3F">Ae</text>
  </svg>
);

const Pr = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7">
    <rect rx="5" width="24" height="24" fill="#1b1830" />
    <text x="5" y="17" fontFamily="Inter" fontWeight="900" fontSize="12" fill="#C6FF3F">Pr</text>
  </svg>
);

const Davinci = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7">
    <rect rx="5" width="24" height="24" fill="#0e2b33" />
    <g fill="#C6FF3F">
      <circle cx="12" cy="8" r="3"/>
      <circle cx="7" cy="16" r="3"/>
      <circle cx="17" cy="16" r="3"/>
    </g>
  </svg>
);

const Capcut = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7">
    <rect rx="5" width="24" height="24" fill="#0b0b0b" />
    <path d="M6 7h12v3H6zm0 7h12v3H6z" fill="#C6FF3F"/>
    <path d="M7 6l10 12M17 6L7 18" stroke="#C6FF3F" strokeWidth="1.5"/>
  </svg>
);

/** Your work links */
const SECTIONS: Record<string, { id: string; src: string }[]> = {
  reels: [
    { id: "r1", src: "https://youtu.be/SqsWohjvR0A" },
    { id: "r2", src: "https://youtu.be/AfWDo8Mwj0I" },
    { id: "r3", src: "https://youtu.be/d8zObRHdlhM" },
    { id: "r4", src: "https://youtu.be/k95LOTYLDmo" },
    { id: "r5", src: "https://youtu.be/GlOguX6gTm4" }
  ],
  motion: [
    { id: "m1", src: "https://youtu.be/bSXj8NWKT18" },
    { id: "m2", src: "https://youtu.be/yfJ9GJA6D5g" },
    { id: "m3", src: "https://youtu.be/8Zf_2j-8E3A" },
    { id: "m4", src: "https://youtu.be/47J7DlWu6c8" }
  ],
  typography: [
    { id: "t1", src: "https://youtu.be/GlOguX6gTm4" },
    { id: "t2", src: "https://youtu.be/YBU3b2T8-nQ" }
  ]
};

export default function Page() {
  const tabs = useMemo(() => ["reels", "motion", "typography"] as const, []);
  const [active, setActive] = useState<(typeof tabs)[number]>("reels");

  return (
    <main className="relative bg-[#0a0b0d] text-white">

      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero section */}
      <Hero />

      {/* ✅ WHY US */}
      <section id="why" className="container mx-auto w-[92%] max-w-6xl py-10 md:py-16">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h2 className="section-title text-3xl font-extrabold">Why us</h2>
            <p className="mt-3 text-neutral-300">
              We’ve helped <span className="text-[#C6FF3F] font-bold">5+ clients</span> and shipped{" "}
              <span className="text-[#C6FF3F] font-bold">25 successful projects</span>.
            </p>

            {/* ✅ BIGGER APP BADGES HERE */}
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

     {/* ✅ SERVICES — GLASSMORPHISM CARDS */}
{/* SERVICES (TharunSpeaks Style Cards) */}
<section
  id="services"
  className="container mx-auto w-[92%] max-w-6xl py-16 md:py-20"
>
  <h2 className="section-title text-4xl font-extrabold mb-10">
    Services
  </h2>

  <div className="grid gap-10 md:grid-cols-3">

    {/* CARD 1 */}
    <div className="
      rounded-2xl 
      bg-[#0b0c0e]
      border-[3px]
      border-[#1f1f22]
      hover:border-[#C6FF3F]
      transition-all
      duration-300
      p-8
      shadow-[0_0_35px_-12px_rgba(0,0,0,0.7)]
      hover:shadow-[0_0_50px_-8px_rgba(198,255,63,0.25)]
    ">
      <h3 className="text-2xl font-bold mb-4">Video Editing</h3>
      <p className="text-neutral-300 leading-relaxed mb-6">
        Professional editing workflows, color grading, motion graphics,
        sound design, export optimization & delivery.
      </p>

      <ul className="space-y-3 text-neutral-300">
        <li className="flex items-center gap-2">
          <span className="text-[#C6FF3F] text-xl">+</span> Reels & Shorts Editing
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#C6FF3F] text-xl">+</span> Long-form Editing
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#C6FF3F] text-xl">+</span> Motion Graphics & Text Animations
        </li>
      </ul>
    </div>

    {/* CARD 2 */}
    <div className="
      rounded-2xl 
      bg-[#0b0c0e]
      border-[3px]
      border-[#1f1f22]
      hover:border-[#C6FF3F]
      transition-all
      duration-300
      p-8
      shadow-[0_0_35px_-12px_rgba(0,0,0,0.7)]
      hover:shadow-[0_0_50px_-8px_rgba(198,255,63,0.25)]
    ">
      <h3 className="text-2xl font-bold mb-4">Social Media Handling</h3>
      <p className="text-neutral-300 leading-relaxed mb-6">
        We manage your entire online presence with strategy, posting,
        analytics, and growth-focused execution.
      </p>

      <ul className="space-y-3 text-neutral-300">
        <li className="flex items-center gap-2">
          <span className="text-[#C6FF3F] text-xl">+</span> Content Strategy & Planning
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#C6FF3F] text-xl">+</span> Script Writing & Creative Direction
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#C6FF3F] text-xl">+</span> Posting & Weekly Analytics
        </li>
      </ul>
    </div>

    {/* CARD 3 */}
    <div className="
      rounded-2xl 
      bg-[#0b0c0e]
      border-[3px]
      border-[#1f1f22]
      hover:border-[#C6FF3F]
      transition-all
      duration-300
      p-8
      shadow-[0_0_35px_-12px_rgba(0,0,0,0.7)]
      hover:shadow-[0_0_50px_-8px_rgba(198,255,63,0.25)]
    ">
      <h3 className="text-2xl font-bold mb-4">Brand Building</h3>
      <p className="text-neutral-300 leading-relaxed mb-6">
        Complete brand identity & positioning — designed to make you
        stand out and grow faster.
      </p>

      <ul className="space-y-3 text-neutral-300">
        <li className="flex items-center gap-2">
          <span className="text-[#C6FF3F] text-xl">+</span> Brand Identity Design
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#C6FF3F] text-xl">+</span> Offer Building & Story Framework
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#C6FF3F] text-xl">+</span> Full Creative Guidelines
        </li>
      </ul>
    </div>

  </div>
</section>

      {/* ✅ WORK */}
      <section id="work" className="container mx-auto w-[92%] max-w-6xl py-16 md:py-20">
        <h2 className="section-title text-3xl font-extrabold">Our Work</h2>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold capitalize transition ${
                active === t
                  ? "border-[#C6FF3F] text-white shadow-[0_0_0_4px_rgba(198,255,63,0.08)]"
                  : "border-neutral-800 text-neutral-300 hover:border-neutral-600"
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

      {/* ✅ CTA */}
      {/* CONTACT SECTION */}
<section className="container mx-auto w-[92%] max-w-6xl py-24 text-center">
  <h2 className="mb-4 text-4xl font-extrabold">Ready to Elevate?</h2>
  <p className="mx-auto max-w-xl text-neutral-300">
    Tell us about your brand — we’ll reply within 24 hours.
  </p>

  {/* ✅ Social Buttons */}
  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">

    {/* ✅ Instagram */}
    <a
      href="https://instagram.com/growtoprove"
      target="_blank"
      className="flex items-center gap-3 rounded-full border border-neutral-700 bg-neutral-900/60 px-5 py-3 text-white transition hover:border-[#C6FF3F] hover:text-[#C6FF3F]"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0121 7.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zm4.5 4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm5.25-.75h.008v.008H17.25V6.75z" />
      </svg>
      Instagram
    </a>

    {/* ✅ WhatsApp */}
    <a
      href="https://wa.me/918019418844"
      target="_blank"
      className="flex items-center gap-3 rounded-full border border-neutral-700 bg-neutral-900/60 px-5 py-3 text-white transition hover:border-[#C6FF3F] hover:text-[#C6FF3F]"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.1 6.48 2.1 11.94c0 2.1.62 4.05 1.78 5.72L2 22l4.47-1.82a10.02 10.02 0 005.57 1.65h.01c5.46 0 9.94-4.48 9.94-9.94C22 6.48 17.5 2 12.04 2zm5.55 14.36c-.23.65-1.34 1.23-1.85 1.29-.47.06-1.07.09-1.72-.11-.4-.13-.92-.3-1.6-.59-2.82-1.23-4.65-4.12-4.79-4.31-.14-.19-1.14-1.51-1.14-2.88 0-1.37.72-2.04.97-2.32.25-.28.53-.35.71-.35.18 0 .36.002.52.01.17.008.39-.063.61.47.23.54.77 1.86.84 2 .07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.3.38-.43.51-.14.14-.29.29-.13.57.16.28.7 1.15 1.51 1.87 1.04.92 1.91 1.21 2.22 1.35.31.14.49.12.67-.07.18-.18.78-.91.99-1.22.21-.31.42-.26.71-.16.3.1 1.89.89 2.21 1.05.31.17.52.25.6.39.08.14.08.82-.15 1.47z"/>
      </svg>
      WhatsApp
    </a>

    {/* ✅ Email */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=growtoprove@gmail.com"
  target="_blank"
  className="flex items-center gap-3 rounded-full border border-neutral-700 bg-neutral-900/60 px-5 py-3 text-white hover:border-[#C6FF3F] hover:text-[#C6FF3F] active:scale-95 cursor-pointer"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75l-9.75 6-9.75-6m19.5 0v10.5A2.25 2.25 0 0119.5 19.5H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 12.75m0 0L2.25 6.75" />
  </svg>
  Email
</a>

  </div>

</section>

    </main>
  );
}
