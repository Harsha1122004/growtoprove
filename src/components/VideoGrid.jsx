import React, { useEffect, useRef, useState } from "react";
// Import Modal if you plan to use it for video popups
// import Modal from "./Modal.jsx";

const sections = {
  // Note: Use unique IDs for each video item, though keys are used for React list rendering.
  reels: [
    { id: "r1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: "r2", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: "r3", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: "r4", src: "https://www.w3schools.com/html/movie.mp4" },
  ],
  motion: [
    { id: "m1", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: "m2", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: "m3", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: "m4", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ],
  typography: [
    { id: "t1", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: "t2", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: "t3", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: "t4", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ],
  // Add placeholders for other sections referenced in CategoryNav.jsx
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

  // 🔁 Smooth auto-scroll for reels (Infinite loop logic)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let scrollX = 0;
    const speed = 0.8;

    const animateScroll = () => {
      // Check if the scroll position has reached the end of the first set of duplicated videos
      if (scrollX >= track.scrollWidth / 2) {
        scrollX = 0;
        // Temporarily disable transition for snap back
        track.style.transition = "none";
        track.style.transform = `translateX(-${scrollX}px)`;
        // Re-enable transition on the next frame to maintain smooth scrolling
        requestAnimationFrame(() => (track.style.transition = "transform 0s"));
      }

      scrollX += speed;
      track.style.transform = `translateX(-${scrollX}px)`;
      const animationId = requestAnimationFrame(animateScroll);
      return animationId;
    };

    // Set initial transition property for smooth scroll
    track.style.transition = "transform 0s";

    const animationId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // 🎥 Render Media (Ensures consistent .video-slide wrapping for Demo 1 styling)
  const renderVideo = (src, key) => (
    <div className="video-slide" key={key}>
      <video
        playsInline
        muted
        loop
        autoPlay
        className="media-video"
        // Use setActive for the Modal functionality (if implemented)
        onClick={() => setActive({ src, title: key })}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );

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
              c += 1;
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
      {/* === 🔥 Reels Section (Contained Cinematic Strip) === */}
      <section id="reels" className="video-carousel-container fade-in">
        <div className="section-header">
          <h2 className="section-title">🔥 Featured Reels</h2>
          <p className="section-sub">Dynamic creative edits in action</p>
        </div>

        <div className="video-carousel-mask">
          <div className="video-carousel-track" ref={trackRef}>
            {/* Duplicate the array for seamless infinite scroll effect */}
            {[...sections.reels, ...sections.reels].map((v, i) =>
              renderVideo(v.src, `reel-${i}`)
            )}
          </div>
        </div>
      </section>

      {/* === 🚀 Motion Graphics Section (Grid) === */}
      <section id="motion-graphics" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">🚀 Motion Graphics</h2>
          <p className="section-sub">Vibrant animations with smooth flow</p>
        </div>
        <div className="media-grid">
          {sections.motion.map((v, i) => renderVideo(v.src, `motion-${i}`))}
        </div>
      </section>

      {/* === 🅰️ Typography Section (Grid) === */}
      <section id="typography" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">🅰️ Typography Animations</h2>
          <p className="section-sub">
            Expressive text styles that bring life to your message
          </p>
        </div>
        <div className="media-grid">
          {sections.typography.map((v, i) =>
            renderVideo(v.src, `typography-${i}`)
          )}
        </div>
      </section>

      {/* --- Additional Sections (Added for CategoryNav completeness) --- */}

      <section id="edits" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">✂️ Edits</h2>
          <p className="section-sub">Precision-cut video stories.</p>
        </div>
        <div className="media-grid">
          {sections.edits.map((v, i) => renderVideo(v.src, `edits-${i}`))}
        </div>
      </section>

      <section id="visuals" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">🧊 3D Visuals</h2>
          <p className="section-sub">Depth and dynamic rendering.</p>
        </div>
        <div className="media-grid">
          {sections.visuals.map((v, i) => renderVideo(v.src, `visuals-${i}`))}
        </div>
      </section>

      <section id="transitions" className="motion-grid-section fade-in">
        <div className="section-header">
          <h2 className="section-title">🔄 Transitions</h2>
          <p className="section-sub">Seamless motion for maximum impact.</p>
        </div>
        <div className="media-grid">
          {sections.transitions.map((v, i) =>
            renderVideo(v.src, `transitions-${i}`)
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

      {/* {active && <Modal item={active} onClose={() => setActive(null)} />} */}
    </div>
  );
}
