import React from "react";

const categories = [
  { id: "motion-graphics", label: "Motion Graphics" },
  { id: "typography", label: "Typography" },
  { id: "reels", label: "Reels" },
  { id: "edits", label: "Edits" },
  { id: "visuals", label: "3D Visuals" },
  { id: "transitions", label: "Transitions" },
];

export default function CategoryNav() {
  // Using <a> tags for navigation and CSS smooth scrolling
  return (
    <div className="category-nav fade-in">
      <div className="category-buttons">
        {categories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="category-btn">
            {cat.label}
          </a>
        ))}
      </div>
    </div>
  );
}
