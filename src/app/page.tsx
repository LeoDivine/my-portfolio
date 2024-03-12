import About from "@/components/section/about";
import Contact from "@/components/section/contact";
import Hero from "@/components/section/hero";
import Projects from "@/components/section/projects";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
