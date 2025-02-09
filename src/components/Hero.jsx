"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Build Your Dream Resume, Get hired quickly. 
        Resumify is {' '}
        <Highlight className="text-white">
          Fast, Modular, And Customizable!
        </Highlight>
      </motion.h1>
      
      <div className="flex justify-center mt-4">
        <button className="relative inline-flex items-center h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <NavLink to='/createResume'>
              Get Started
            </NavLink>
            
          </span>
        </button>
      </div>
    </HeroHighlight>
    </div>
    
  );
};

export default Hero;
