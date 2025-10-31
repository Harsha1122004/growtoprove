import React, { useEffect, useState } from "react";

const categories = [
  { id: "motion-graphics", label: "Motion Graphics" },
  { id: "typography", label: "Typography" },
  { id: "reels", label: "Reels" },
];

export default function CategoryNav() {
  const [active, setActive] = useState("");

  // 🌟 Scroll spy to highlight current section
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      categories.forEach((cat) => {
        const section = document.getElementById(cat.id);
        if (section) {
          const sectionTop = section.offsetTop - 150;
          if (window.scrollY >= sectionTop) current = cat.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="category-nav fade-in">
      <div className="category-container">
        <div className="category-buttons">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`category-btn ${active === cat.id ? "active" : ""}`}
            >
              <span>{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
