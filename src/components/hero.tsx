"use client";

import { GraduationCap, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";

export function Hero() {
  const floating_skills = [
    // Top row
    { src: "/skills/frontend/html.png", pos: "top-[10%] left-[35%]" },
    { src: "/skills/frontend/css-3.png", pos: "top-[10%] right-[12%]" },
    { src: "/skills/frontend/react.png", pos: "top-[8%] left-[7%] w-25" },

    // Sides
    { src: "/skills/frontend/js.png", pos: "top-[40%] left-[4%]" },
    { src: "/skills/backend/nodejs.png", pos: "bottom-[25%] left-[6%]" },
    { src: "/skills/backend/express.png", pos: "top-[30%] right-[6%] dark:invert" },
    { src: "/skills/backend/mongodb.png", pos: "bottom-[35%] right-[8%]" },

    // Bottom row
    { src: "/skills/frontend/ts.jpg", pos: "bottom-[12%] left-[20%]" },
    { src: "/skills/frontend/tailwind-css.png", pos: "bottom-[10%] left-[50%]" },
    { src: "/skills/frontend/nextjs.png", pos: "bottom-[10%] right-[15%] dark:invert" },
  ];

  return (
    <section className="relative flex flex-col md:flex-row-reverse justify-center items-center gap-10 w-full min-h-svh">
      {/* Floating skills around section */}
      {floating_skills.map((skill, i) => (
        <Image
          key={skill.src}
          src={skill.src}
          alt="Skill"
          width={60}
          height={60}
          className={`
            absolute opacity-15 hover:opacity-80 hover:drop-shadow-xl transition rounded-2xl
            animate-float
            ${skill.pos}
          `}
          style={{ animationDelay: `${i * 1.2}s` }}
        />
      ))}

      {/* Hero image */}
      <figure className="inline-block">
        <Image
          src="/portfolio/nowfal-portfolio.png"
          alt="Portfolio Image"
          width={300}
          height={300}
          className="
            rounded-[40%] sm:w-56 md:w-80 lg:w-96 
            drop-shadow-[15px_20px_20px_rgba(0,0,0,0.6)] 
            dark:drop-shadow-[0_0_20px_rgba(255,166,0,0.3)]
            animate-drift
          "/>
      </figure>

      {/* Hero content */}
      <div className="flex flex-col items-center gap-15 justify-center z-10">
        <div className="text-4xl lg:text-6xl font-semibold text-center flex flex-col gap-7">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold relative bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
            Muhammed Nowfal
          </h1>
          <h2 className="font-extrabold tracking-tight text-shadow-lg dark:text-shadow-gray-700">
            <Typewriter
              options={{
                strings: [
                  "Web Development.", "MERN Stack.", "Full Stack.",
                  "Front-end.", "Back-end.", "Designer.", "Fast Learner."
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          <Button
            variant="secondary"
            size="lg"
            className="
              w-fit m-auto border bg-transparent border-orange-600 hover:bg-orange-700 transition 
              text-shadow-lg text-orange-700 hover:text-white font-bold cursor-pointer 
              hover:scale-105 shadow-md hover:shadow-2xl hover:shadow-orange-600 animate-float
            ">
            Resume
          </Button>
        </div>

        <address className="not-italic text-gray-500 font-semibold flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2">
            <GraduationCap size={22} /> B.Sc, Computer Science
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} /> +91 8610297319
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} /> nowfalmmuhammed@gmail.com
          </div>
        </address>

        {/* PlaceHolder */}
        <div></div>
      </div>
    </section>
  );
}
