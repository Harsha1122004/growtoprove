import React, { useEffect, useRef, useState } from "react";

const sections = {
  reels: [
    { id: "r1", src: "https://youtu.be/SqsWohjvR0A" },
    { id: "r2", src: "https://youtu.be/k95LOTYLDmo" },
    { id: "r3", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: "r4", src: "https://youtu.be/GlOguX6gTm4" },
  ],
  motion: [
    { id: "m1", src: "https://youtu.be/SqsWohjvR0A" },
    { id: "m2", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: "m3", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: "m4", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ],
  typography: [
    { id: "t1", src: "https://youtu.be/GlOguX6gTm4" },
    { id: "t2", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: "t3", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: "t4", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ],
  edits: [
    { id: "e1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: "e2", src: "https://www.w3schools.com/html/movie.mp4" },
  ],
  visuals: [
    { id: "v1", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: "v2", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ],
  transitions: [
    { id: "tr1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: "tr2", src: "https://www.w3schools.com/html/movie.mp4" },
  ],
};

export default function VideoGrid() {
  const [active, setActive] = useState(null);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const trackRef = useRef(null);

  // 🔁 Smooth auto-scroll for reels (Infinite loop)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let scrollX = 0;
    const speed = 0.8;

    const animateScroll = () => {
      if (scrollX >= track.scrollWidth / 2) scrollX = 0;
      scrollX += speed;
      track.style.transform = `translateX(-${scrollX}px)`;
      requestAnimationFrame(animateScroll);
    };
    animateScroll();
  }, []);

  // 🎥 Render YouTube, Drive, or MP4
  const renderMedia = (src, key) => {
    // YouTube Embed
    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      let videoId = "";
      if (src.includes("v=")) {
        videoId = src.split("v=")[1].split("&")[0];
      } else if (src.includes("youtu.be/")) {
        videoId = src.split("youtu.be/")[1];
      }

      return (
        <iframe
          key={key}
          className="media-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0`}
          title={`YouTube video ${videoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        ></iframe>
      );
    }

    // Google Drive or MP4
    return (
      <video
        key={key}
        playsInline
        muted
        loop
        autoPlay
        className="media-video"
        onClick={() => setActive({ src, title: key })}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  };

  // ✨ Fade-in scroll animation
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

  // 🔢 Count-up animation for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let c = 0;
            const clientTimer = setInterval(() => {
              c++;
              setClients(c);
              if (c >= 5) clearInterval(clientTimer);
            }, 200);

            let p = 0;
            const projectTimer = setInterval(() => {
              p += 2;
              setProjects(p);
              if (p >= 20) clearInterval(projectTimer);
            }, 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    const target = document.querySelector("#clients");
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-sections">
      {/* === 🔥 Reels Section === */}
      <section id="reels" className="video-carousel-container fade-in">
        <div className="section-header">
          <h2 className="section-title">🔥 Featured Reels</h2>
          <p className="section-sub">Dynamic creative edits in action</p>
        </div>

        <div className="video-carousel-mask">
          <div className="video-carousel-track" ref={trackRef}>
            {[...sections.reels, ...sections.reels].map((v, i) =>
              renderMedia(v.src, `reel-${i}`)
            )}
          </div>
        </div>
      </section>

      {/* === 🚀 Motion Graphics Section === */}
      <section id="motion-graphics" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">🚀 Motion Graphics</h2>
          <p className="section-sub">Vibrant animations with smooth flow</p>
        </div>
        <div className="media-grid">
          {sections.motion.map((v, i) => renderMedia(v.src, `motion-${i}`))}
        </div>
      </section>

      {/* === 🅰️ Typography Section === */}
      <section id="typography" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">🅰️ Typography Animations</h2>
          <p className="section-sub">
            Expressive text styles that bring life to your message
          </p>
        </div>
        <div className="media-grid">
          {sections.typography.map((v, i) =>
            renderMedia(v.src, `typography-${i}`)
          )}
        </div>
      </section>

      {/* === ✂️ Edits Section === */}
      <section id="edits" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">✂️ Edits</h2>
          <p className="section-sub">Precision-cut video stories.</p>
        </div>
        <div className="media-grid">
          {sections.edits.map((v, i) => renderMedia(v.src, `edits-${i}`))}
        </div>
      </section>

      {/* === 🧊 3D Visuals === */}
      <section id="visuals" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">🧊 3D Visuals</h2>
          <p className="section-sub">Depth and dynamic rendering.</p>
        </div>
        <div className="media-grid">
          {sections.visuals.map((v, i) => renderMedia(v.src, `visuals-${i}`))}
        </div>
      </section>

      {/* === 🔄 Transitions === */}
      <section id="transitions" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">🔄 Transitions</h2>
          <p className="section-sub">Seamless motion for maximum impact.</p>
        </div>
        <div className="media-grid">
          {sections.transitions.map((v, i) =>
            renderMedia(v.src, `transitions-${i}`)
          )}
        </div>
      </section>

      {/* === 👥 Clients Section === */}
      <section id="clients" className="clients-section fade-in">
        <h2 className="section-title">🤝 Our Happy Clients</h2>
        <p className="section-sub">
          Trusted by <span className="accent">{clients}+ Brands</span> worldwide
          🌍
        </p>

        <div className="client-stats">
          <div className="stat-card">
            <h3 className="stat-num">{clients}+</h3>
            <p className="stat-label">Clients</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-num">{projects}+</h3>
            <p className="stat-label">Projects</p>
          </div>
        </div>

        <div className="client-reacts">
          {[1, 2, 3].map((i) => (
            <div className="react-card" key={`react-${i}`}>
              <img
                src={`https://placehold.co/240x320?text=Client+Reaction+${i}`}
                alt={`Client Reaction ${i}`}
                className="client-react-img"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
