"use client";

import { Marquee } from "@/components/ui/marquee";

const Logos = {
  logo1: () => (
    <img 
      src="https://res.cloudinary.com/effichat/image/upload/vapi.png"
      alt="Company Logo"
      className="h-[50px] w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
    />
  ),
  logo2: () => (
    <img 
      src="https://res.cloudinary.com/effichat/image/upload/v1751453689/b8opodbcbxapqu04eefy.png"
      alt="Company Logo"
      className="h-[50px] w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
    />
  ),
  logo3: () => (
    <img 
      src="https://res.cloudinary.com/effichat/image/upload/v1751453690/gxui6hpx6fdi8qx76j1p.png"
      alt="Company Logo"
      className="h-[50px] w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
    />
  ),
  logo4: () => (
    <img 
      src="https://res.cloudinary.com/effichat/image/upload/v1751453690/sq1fnm4kwhupkaefhz8g.png"
      alt="Company Logo"
      className="h-[50px] w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
    />
  ),
  logo5: () => (
    <img 
      src="https://res.cloudinary.com/effichat/image/upload/v1751453690/vg1alcbyp1mylf7nbzm2.png"
      alt="Company Logo"
      className="h-[50px] w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
    />
  ),
};

export function MarqueeDemo() {
  const arr = [Logos.logo1, Logos.logo2, Logos.logo3, Logos.logo4, Logos.logo5];

  return (
    <Marquee>
      {arr.map((Logo, index) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[4rem] flex items-center justify-center"
        >
          <Logo />
        </div>
      ))}
    </Marquee>
  );
}