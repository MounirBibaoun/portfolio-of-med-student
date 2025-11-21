"use client";
import { motion } from "framer-motion";

export function AnimatedHeart() {
  return (
    <motion.div
      className="text-pink-400 text-5xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: -20 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      ❤
    </motion.div>
  );
}
