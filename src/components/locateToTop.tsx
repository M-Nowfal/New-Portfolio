"use client"

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react"

export function LocateToTop() {

  const [showUpBtn, setShowUpBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUpBtn(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showUpBtn && <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-10 right-10 border border-orange-600 bg-orange-500/30 hover:bg-orange-500/80 rounded-full p-2 shadow-xl animate-float cursor-pointer z-20 group"
    >
      <ArrowUp className="text-orange-700 dark:text-white group-hover:text-white" />
    </motion.button>
  );

};