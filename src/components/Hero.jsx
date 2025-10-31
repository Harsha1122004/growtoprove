import "../App.css";

export default function Hero() {
  const handleContactClick = () => {
    // Opens Gmail compose in a new tab
    const email = "growtoprove@gmail.com";
    const subject = encodeURIComponent("Hello GrowToProve");
    const body = encodeURIComponent("Hi team, I’d like to get in touch regarding...");
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailURL, "_blank");
  };

  return (
    <>
      <nav className="topbar">
        <div className="brand">
          <div className="logo">G</div>
          <span>GrowToProve</span>
        </div>

        <div className="nav-links">
          <a href="#motion-graphics" className="btn ghost small">
            Discover
          </a>
        </div>
      </nav>

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
            <button
              className="btn primary large"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
