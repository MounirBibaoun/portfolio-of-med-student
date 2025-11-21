"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  speed?: number;       // typing speed
  pause?: number;       // pause before deleting
}

export function TypingText({ text, speed = 120, pause = 1200 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!deleting) {
        // Typing forward
        if (index < text.length) {
          setDisplayed(text.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          // Pause then start deleting
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        // Deleting backward
        if (index > 0) {
          setDisplayed(text.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          // Pause then start typing again
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, deleting, text, speed, pause]);

  return (
    <motion.div
      className="text-pink-600 font-extrabold text-3xl sm:text-4xl md:text-5xl drop-shadow-lg flex"
    >
      {displayed}
      {/* Blinking cursor */}
      <motion.span
        className="ml-1 text-pink-700"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </motion.div>
  );
}
