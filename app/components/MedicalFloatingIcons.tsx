"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function RandomMedicalIcons() {
  const [positions, setPositions] = useState<
    { top: number; left: number; icon: string }[]
  >([]);

  const icons = ["🩺", "💊", "🧬", "✨", "🌸", "🫀", "🩹"];

  useEffect(() => {
    const randomItems = Array.from({ length: 12 }, () => ({
      icon: icons[Math.floor(Math.random() * icons.length)],
      top: Math.random() * 260 - 120,  // stays around name area
      left: Math.random() * 260 - 130, // stays around center
    }));

    setPositions(randomItems);
  }, []);

  return (
    <div className="absolute pointer-events-none inset-0">
      {positions.map((i, idx) => (
        <motion.div
          key={idx}
          className="absolute text-xl"
          style={{
            top: `${i.top}px`,
            left: `${i.left}px`,
            opacity: 0.25,
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 2.5 + Math.random() * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {i.icon}
        </motion.div>
      ))}
    </div>
  );
}
