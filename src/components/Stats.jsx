import React, { useEffect, useRef } from "react";

const counters = [
  { id: "c1", label: "Clients", value: 2 },
  { id: "c2", label: "Projects", value: 56 },
  { id: "c3", label: "Hours", value: 420 },
];

export default function Stats() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll(".count").forEach((node) => {
              const target = +node.getAttribute("data-target");
              const duration = 1200;
              const start = performance.now();
              const animate = (t) => {
                const progress = Math.min(1, (t - start) / duration);
                node.textContent = Math.floor(progress * target) + "+";
                if (progress < 1) requestAnimationFrame(animate);
              };
              requestAnimationFrame(animate);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="stats-grid container">
      {counters.map((c) => (
        <div key={c.id} className="stat-card">
          <div className="stat-num count" data-target={c.value}>
            0
          </div>
          <div className="stat-label">{c.label}</div>
        </div>
      ))}
    </div>
  );
}
