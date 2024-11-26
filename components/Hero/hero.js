"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export function Hero() {
  return (
    <>
    <WavyBackground
      blur={15} // Adjust blur if needed
      speed="fast"
      waveWidth={60}
      waveOpacity={0.6}
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      backgroundFill="#000" // Adjust background color
      className="text-center"
      containerClassName="relative"
    >
      {/* Centered Content */}
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
        Fast File Sharing
      </h1>
      <p className="mt-4 text-lg md:text-xl text-white">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
    <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-lg md:text-xl text-white opacity-55">
        scroll down 🔻
      </p>
      </>
  );
}
