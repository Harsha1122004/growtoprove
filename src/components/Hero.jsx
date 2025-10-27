import React from "react";

export default function Hero() {
  return (
    <>
      {/* 🌐 NAVBAR */}
      <nav className="topbar">
        <div className="brand">
          <div className="logo">G</div>
          <span>GrowToProve</span>
        </div>

        <div className="nav-links">
          <a href="#discover" className="btn ghost small">
            Discover
          </a>
          <a href="#submit" className="btn ghost small">
            Submit
          </a>
        </div>

        <div className="nav-actions">
          <button className="btn ghost small">Login</button>
          <button className="btn primary small">Register</button>
        </div>
      </nav>

      {/* 🚀 HERO SECTION */}
      <header className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            Welcome to <span className="accent">GrowToProve</span>
          </h1>
          <p className="hero-sub">
            Showcasing reels, motion graphics, and edits — crafted to help your
            brand grow and prove its value.
          </p>

          <div className="hero-cta">
            <a
              href="mailto:growtoprove@gmail.com"
              className="btn primary large"
            >
              Contact Us
            </a>
            <a href="#submit" className="btn ghost large">
              Submit Your Work
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
