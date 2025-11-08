// /components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="
        fixed left-1/2 top-0 z-50 w-[92%] max-w-6xl -translate-x-1/2
        translate-y-4
      "
    >
      <nav
        className={`flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur transition-colors
          ${atTop
            ? "border-transparent bg-transparent"
            : "border-neutral-800/70 bg-neutral-900/60 shadow-[0_10px_40px_-20px_rgba(0,0,0,.6)]"
          }`}
      >
        <a href="#" className="font-extrabold tracking-tight">
          <span>Grow</span><span className="text-[#C6FF3F]">to</span><span>Prove</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#services" className="opacity-90 hover:opacity-100">Services</a>
          <a href="#work" className="opacity-90 hover:opacity-100">Work</a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=growtoprove@gmail.com"
            className="rounded-full bg-[#C6FF3F] px-4 py-2 font-semibold text-black"
          >
            Hire us
          </a>
        </div>
      </nav>
    </div>
  );
}
