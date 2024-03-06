import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import React from "react";

export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Projects/>
    </div>
  );
}
