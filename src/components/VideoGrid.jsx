import React, { useEffect, useRef, useState } from "react";
import "../App.css";

const sections = {
  reels: [
    { id: "r1", src: "https://youtu.be/SqsWohjvR0A" },
    { id: "r2", src: "https://youtu.be/AfWDo8Mwj0I" },
    { id: "r3", src: "https://youtu.be/d8zObRHdlhM" },
    { id: "r4", src: "https://youtu.be/k95LOTYLDmo" },
    { id: "r5", src: "https://youtu.be/GlOguX6gTm4" },
  ],
  motion: [
    { id: "m1", src: "https://youtu.be/bSXj8NWKT18" },
    { id: "m2", src: "https://youtu.be/yfJ9GJA6D5g" },
    { id: "m3", src: "https://youtu.be/8Zf_2j-8E3A" },
    { id: "m4", src: "https://youtu.be/47J7DlWu6c8" },
  ],
  typography: [
    { id: "t1", src: "https://youtu.be/GlOguX6gTm4" },
    { id: "t2", src: "https://youtu.be/YBU3b2T8-nQ" },
  ],
};

export default function VideoGrid() {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const maskRef = useRef(null);
  const fillRef = useRef(null);

  // 🎥 YouTube Embed Renderer
  const renderMedia = (src, key) => {
    let videoId = "";
    if (src.includes("v=")) videoId = src.split("v=")[1].split("&")[0];
    else if (src.includes("youtu.be/")) videoId = src.split("youtu.be/")[1];
    else if (src.includes("/embed/")) videoId = src.split("/embed/")[1];

    return (
      <div key={key} className="video-card">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1`}
          title={`YouTube video ${videoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  // ✨ Fade-In Animation
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.2 }
    );
    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 🔢 Animated Counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let c = 0,
              p = 0;
            const clientTimer = setInterval(() => {
              c++;
              setClients(c);
              if (c >= 5) clearInterval(clientTimer);
            }, 200);
            const projectTimer = setInterval(() => {
              p += 2;
              setProjects(p);
              if (p >= 20) clearInterval(projectTimer);
            }, 100);
          }
        }),
      { threshold: 0.3 }
    );
    const target = document.querySelector("#clients");
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // 🔄 Scroll progress update
  useEffect(() => {
    const mask = maskRef.current;
    const fill = fillRef.current;
    if (!mask || !fill) return;

    const updateProgress = () => {
      const maxScroll = Math.max(1, mask.scrollWidth - mask.clientWidth);
      const pct = (mask.scrollLeft / maxScroll) * 100;
      fill.style.width = `${pct}%`;
    };

    mask.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => mask.removeEventListener("scroll", updateProgress);
  }, []);

  // 🎯 Scroll button logic
  const scrollLeft = () => {
    maskRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    maskRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="video-sections">
      {/* === 🔥 Featured Reels === */}
      <section id="reels" className="video-carousel-container fade-in">
        <div className="section-header">
          <h2 className="section-title">🔥 Featured Reels</h2>
          <p className="section-sub">
            Dynamic creative edits crafted to captivate audiences.
          </p>
        </div>

        {/* Scroll Buttons */}
        <button className="scroll-btn left" onClick={scrollLeft}>
          ◀
        </button>
        <button className="scroll-btn right" onClick={scrollRight}>
          ▶
        </button>

        {/* Video Carousel */}
        <div className="video-carousel-mask" ref={maskRef}>
          {[...sections.reels, ...sections.reels].map((v, i) =>
            renderMedia(v.src, `reel-${i}`)
          )}
        </div>

        <div className="scroll-progress-bar">
          <div className="scroll-progress-fill" ref={fillRef}></div>
        </div>
      </section>

      {/* === 🚀 Motion Graphics === */}
      <section id="motion-graphics" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">🚀 Motion Graphics</h2>
          <p className="section-sub">Vibrant animations with flow and impact.</p>
        </div>
        <div className="media-grid">
          {sections.motion.map((v, i) => renderMedia(v.src, `motion-${i}`))}
        </div>
      </section>

      {/* === 🅰️ Typography === */}
      <section id="typography" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">🅰️ Typography Animations</h2>
          <p className="section-sub">
            Expressive text visuals that elevate storytelling.
          </p>
        </div>
        <div className="media-grid">
          {sections.typography.map((v, i) =>
            renderMedia(v.src, `typography-${i}`)
          )}
        </div>
      </section>

      {/* === 👥 Clients === */}
      <section id="clients" className="clients-section fade-in">
        <h2 className="section-title">🤝 Our Happy Clients</h2>
        <p className="section-sub">
          Trusted by <span className="accent">{clients}+ Brands</span> worldwide 🌍
        </p>

        <div className="client-stats">
          <div className="stat-card glass">
            <h3 className="stat-num">{clients}+</h3>
            <p className="stat-label">Clients</p>
          </div>
          <div className="stat-card glass">
            <h3 className="stat-num">{projects}+</h3>
            <p className="stat-label">Projects</p>
          </div>
        </div>
      </section>
    </div>
  );
}
