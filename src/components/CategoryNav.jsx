import React from "react";

export default function CategoryNav() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="category-nav fade-in">
      <div className="category-buttons">
        <button
          onClick={() => scrollToSection("motion-graphics")}
          className="category-btn"
        >
          Motion Graphics
        </button>
        <button
          onClick={() => scrollToSection("typography")}
          className="category-btn"
        >
          Typography
        </button>
        <button
          onClick={() => scrollToSection("reels")}
          className="category-btn"
        >
          Reels
        </button>
        <button
          onClick={() => scrollToSection("edits")}
          className="category-btn"
        >
          Edits
        </button>
        <button
          onClick={() => scrollToSection("visuals")}
          className="category-btn"
        >
          3D Visuals
        </button>
        <button
          onClick={() => scrollToSection("transitions")}
          className="category-btn"
        >
          Transitions
        </button>
      </div>
    </div>
  );
}
