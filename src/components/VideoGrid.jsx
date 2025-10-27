import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal.jsx";

export default function VideoGrid() {
  const [active, setActive] = useState(null);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const trackRef = useRef(null);

  const sections = {
    reels: [
      { id: "r1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: "r2", src: "https://www.w3schools.com/html/movie.mp4" },
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
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let scrollX = 0;
    const speed = 0.8;
    const animateScroll = () => {
      scrollX += speed;
      if (scrollX >= track.scrollWidth / 2) scrollX = 0;
      track.style.transform = `translateX(-${scrollX}px)`;
      requestAnimationFrame(animateScroll);
    };
    animateScroll();
  }, []);

  const renderVideo = (src, key) => (
    <video
      key={key}
      playsInline
      muted
      loop
      autoPlay
      className="media-video"
      onClick={() => window.open(src, "_blank")}
    >
      <source src={src} type="video/mp4" />
    </video>
  );

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

  // 🔢 Stats counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let c = 0,
              p = 0;
            const ci = setInterval(() => {
              c += 1;
              setClients(c);
              if (c >= 5) clearInterval(ci);
            }, 200);
            const pi = setInterval(() => {
              p += 2;
              setProjects(p);
              if (p >= 20) clearInterval(pi);
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
      {/* === 🔥 Reels Section === */}
      <section id="reels" className="video-carousel-container fade-in">
        <div className="section-header">
          <h2 className="section-title">🔥 Featured Reels</h2>
          <p className="section-sub">Dynamic creative edits in motion</p>
        </div>

        <div className="video-carousel-mask">
          <div className="video-carousel-track">
            {[...sections.reels, ...sections.reels].map((v, i) => (
              <div className="video-slide" key={`reel-${i}`}>
                <video
                  playsInline
                  muted
                  loop
                  autoPlay
                  className="media-video"
                  onClick={() => window.open(v.src, "_blank")}
                >
                  <source src={v.src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 🚀 Motion Graphics 2x2 === */}
      <section id="motion-graphics" className="motion-grid-section fade-in">
        <h2 className="section-title">🚀 Motion Graphics</h2>
        <div className="media-grid">
          {sections.motion.map((v, i) => renderVideo(v.src, `motion-${i}`))}
        </div>
      </section>

      {/* === 🅰️ Typography 2x2 === */}
      <section id="typography" className="motion-grid-section fade-in">
        <h2 className="section-title">🅰️ Typography Animations</h2>
        <div className="media-grid">
          {sections.typography.map((v, i) =>
            renderVideo(v.src, `typography-${i}`)
          )}
        </div>
      </section>

      {/* === 👥 Clients === */}
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

      {active && <Modal item={active} onClose={() => setActive(null)} />}
    </div>
  );
}
