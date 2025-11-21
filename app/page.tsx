"use client";
import { Navbar } from "./components/Navbar";
import { SectionCard } from "./components/SectionCard";
import { AnimatedHeart } from "./components/AnimatedHeart";
import { FloatingSparkles } from "./components/FloatingSparkles";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "./components/TypingText";
import { RandomMedicalIcons } from "./components/MedicalFloatingIcons";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-pink-50 via-pink-100 to-pink-50 overflow-hidden">
      {/* Floating Sparkles & Hearts */}
      <FloatingSparkles />
      {/* Floating Pink Bubbles */}
{[...Array(40)].map((_, i) => (
  <motion.div
    key={i}
    className={`absolute rounded-full bg-pink-200 opacity-${10 + Math.floor(Math.random() * 30)} w-${2 + Math.floor(Math.random() * 6)} h-${2 + Math.floor(Math.random() * 6)}`}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${8 + Math.random() * 12}px`,
      height: `${8 + Math.random() * 12}px`,
    }}
    animate={{
      y: [0, -20 - Math.random() * 20, 0],
      x: [0, 10 - Math.random() * 20, -10 + Math.random() * 20, 0],
      opacity: [0.2, 0.6, 0.2],
    }}
    transition={{
      duration: 5 + Math.random() * 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 3,
    }}
  />
))}

      <motion.div
        className="absolute inset-0 bg-pink-200 opacity-10 rounded-full blur-3xl -translate-y-20 scale-125"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <Navbar />

      {/* Hero Section */}
     <section className="flex flex-col items-center mt-12 md:mt-16 text-center px-4 sm:px-6 lg:px-0 relative z-10">
        {/* Animated ribbon with sparkle trail */}
        <motion.div
          className="relative mb-4 sm:mb-6 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full font-bold shadow-xl text-sm sm:text-base tracking-wide"
          initial={{ y: -30, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            duration: 1, 
            delay: 0.3 
          }}
          whileHover={{ 
            scale: 1.05,
            background: "linear-gradient(45deg, #f9a8d4, #f472b6)"
          }}
        >
          🎀 Future Doctor & Dreamer 
          {/* Sparkle effect */}
          <motion.div
            className="absolute -top-1 -right-1 text-yellow-200"
            animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨
          </motion.div>
        </motion.div>

        {/* Floating hearts */}
        <AnimatedHeart />

        {/* Enhanced Typing Text with glow */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-pink-200 blur-xl opacity-50 rounded-full scale-125" />
          <TypingText text="Derya Abdo" />
        </motion.div>
        
        {/* Animated divider */}
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded-full mt-6"
          initial={{ width: 0 }}
          animate={{ width: "12rem" }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />

        {/* Enhanced description */}
        <motion.p
          className="max-w-md sm:max-w-lg md:max-w-xl mt-4 sm:mt-6 text-pink-700 text-sm sm:text-base md:text-lg px-2 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Passionate medical student at {" "} <span className="font-semibold text-pink-600">UPSSA</span> exploring the world of medicine with{" "}
          <motion.span
            className="text-pink-600 font-semibold"
            animate={{ 
              color: ["#db2777", "#ec4899", "#db2777"],
              textShadow: ["0 0 0px #fff", "0 0 8px #f9a8d4", "0 0 0px #fff"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            love
          </motion.span>{" "}
          and{" "}
          <motion.span
            className="text-pink-600 font-semibold"
            animate={{ 
              color: ["#db2777", "#ec4899", "#db2777"],
              textShadow: ["0 0 0px #fff", "0 0 8px #f9a8d4", "0 0 0px #fff"]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            curiosity
          </motion.span>
          .
        </motion.p>

        {/* Enhanced Profile Picture */}
  <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            duration: 1.5,
            delay: 0.5 
          }}
          className="relative mt-10 group"
        >
          {/* Animated Pink Border */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 rounded-full p-1 blur-lg opacity-70 -z-10"
            animate={{ 
              rotate: 360,
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity }
            }}
          />
          
          {/* Glass Effect Container */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative bg-white/30 backdrop-blur-lg rounded-full p-2 border border-white/40 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full -z-10" />
              <Image
                src="/profile1.jpg"
                alt="profile"
                width={220}
                height={220}
                className="rounded-full border-4 border-white/90 shadow-2xl transition-all duration-500 group-hover:border-white group-hover:shadow-pink-300/50"
              />
              
              {/* Floating Medical Icons */}
              <motion.div
                className="absolute -top-3 -right-3 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg text-pink-500 text-xl border border-white/50"
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                🩺
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg text-pink-400 text-lg border border-white/50"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
                whileHover={{ scale: 1.2, rotate: -360 }}
              >
                📚
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-12 md:mt-14 max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionCard title="About Me">
          I’m Derya, a passionate medical student at UPSSA – Université Privée
          des Sciences de la Santé d’Agadir. Ever since I was young, I’ve been
          fascinated by how the human body works and how medicine can change
          lives. My journey in medical school is driven by empathy, curiosity,
          and a deep desire to help people heal and feel understood. I believe
          that being a doctor is not only about science — it's about compassion,
          communication, and making people feel safe. My goal is to become a
          caring doctor who brings comfort and confidence to every patient.
        </SectionCard>

        <SectionCard title="Skills">
          • Patient Communication & Empathy <br />
          • Clinical Observation Skills <br />
          • Basic Diagnostics (Vitals, Examination) <br />
          • Anatomy & Physiology Knowledge <br />
          • First Aid & Emergency Basics <br />
          • Teamwork in Clinical Settings <br />• Medical Research & Case
          Analysis
        </SectionCard>
      </section>
      {/* <RandomMedicalIcons /> */}

      {/* Gallery Section */}
      {/* Image Slider Section */}
      <section className="mt-16 max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-center text-3xl font-bold text-pink-700 mb-6">
          📸 My Gallery
        </h2>
        <p className="text-center text-pink-600 mb-8 max-w-md mx-auto">
          Some moments from my journey ✨
        </p>

        <motion.div
          className="overflow-hidden rounded-2xl"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex gap-4"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {[1, 2, 3, 4, 5].map((id) => (
              <motion.div
                key={id}
                className="min-w-[80%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[25%] bg-white rounded-xl shadow-md overflow-hidden border border-pink-200"
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={`/gallery/img${id}.jpg`} // <-- your images
                  alt="Gallery"
                  width={600}
                  height={600}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* Medical Knowledge Cards Section */}
      <section className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-center text-3xl font-bold text-pink-700 mb-6">
          🧠 Medical Knowledge Cards
        </h2>
        <p className="text-center text-pink-600 mb-10 max-w-lg mx-auto">
          Fun medical facts to explore and learn ✨
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              title: "Heart",
              icon: "❤️",
              fact: "The human heart beats around 100,000 times per day, pumping roughly 7,500 liters of blood daily. The left ventricle generates enough pressure to theoretically squirt blood over 9 meters, highlighting the immense power of this muscular organ.",
            },
            {
              id: 2,
              title: "Brain",
              icon: "🧠",
              fact: "The adult brain weighs about 1.4 kg and contains roughly 86 billion neurons. Each neuron can form thousands of synapses, creating an estimated 100 trillion connections, which are responsible for memory, learning, and regulating all bodily functions.",
            },
            {
              id: 3,
              title: "Lungs",
              icon: "🌬️",
              fact: "The lungs contain around 300 million alveoli with a total surface area of roughly 70 m². Each day, an adult breathes in enough air to fill over 20,000 liters, facilitating efficient oxygen and carbon dioxide exchange.",
            },
          ].map((card) => {
            const [flipped, setFlipped] = React.useState(false);

            return (
              <div
                key={card.id}
                className="relative w-full h-64 rounded-2xl cursor-pointer"
                style={{ perspective: "1000px" }}
                onMouseEnter={() => setFlipped(true)}
                onMouseLeave={() => setFlipped(false)}
                onClick={() => setFlipped(!flipped)} // works for mobile
              >
                <div
                  className="relative w-full h-full transition-transform duration-500 rounded-2xl"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute w-full h-full bg-pink-100 rounded-2xl shadow-lg flex flex-col items-center justify-center border border-pink-200"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <span className="text-5xl mb-4">{card.icon}</span>
                    <h3 className="text-xl font-bold text-pink-700">
                      {card.title}
                    </h3>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute w-full h-full bg-pink-200 rounded-2xl shadow-lg flex items-center justify-center p-4 text-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="text-pink-800 text-sm">{card.fact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 w-full bg-pink-100/60 border-t border-pink-200 py-6 relative overflow-hidden">
        {/* Floating soft glow circle */}
        <motion.div
          className="absolute inset-0 bg-pink-200 opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          {/* Cute divider */}
          <motion.div
            className="h-1 w-24 bg-pink-300 rounded-full mb-3"
            animate={{ width: ["5rem", "7rem", "5rem"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <p className="text-pink-700 text-sm md:text-base font-medium">
            Made with ❤️ by Derya • Future Doctor
          </p>

          {/* Animated icons */}
          <div className="flex gap-4 text-pink-500 text-xl mt-3">
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🩺
            </motion.span>

            <motion.span
              animate={{
                y: [0, -5, 0],
                transition: { duration: 2.4, repeat: Infinity },
              }}
            >
              💗
            </motion.span>

            <motion.span
              animate={{
                y: [0, -5, 0],
                transition: { duration: 2.8, repeat: Infinity },
              }}
            >
              🌸
            </motion.span>
          </div>

          <p className="text-pink-600 text-xs mt-3">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
