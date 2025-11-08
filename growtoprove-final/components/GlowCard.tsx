// /components/GlowCard.tsx
"use client";

export function GlowCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-800/70 bg-neutral-950 p-5 shadow-[0_0_40px_-25px_rgba(198,255,63,.8)]/10">
      {children}
    </div>
  );
}
