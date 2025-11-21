"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FloatingSparkles() {
  const [positions, setPositions] = useState<number[] | null>(null);

  useEffect(() => {
    // Generate random positions only on the client
    const pos = Array.from({ length: 8 }, () => Math.random() * 100);
    setPositions(pos);
  }, []);

  if (!positions) return null; // Prevent SSR mismatch

  return (
    <div className="absolute inset-0 pointer-events-none">
      {positions.map((left, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -40 }}
          transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
          style={{ left: `${left}%` }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
}
