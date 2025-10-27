import React from "react";
import Hero from "./components/Hero";
import CategoryNav from "./components/CategoryNav";
import VideoGrid from "./components/VideoGrid";

export default function App() {
  return (
    <>
      <Hero />
      <CategoryNav /> {/* Appears below Explore Works */}
      <VideoGrid /> {/* Contains Reels, Motion, Typography, Clients */}
    </>
  );
}
