"use client";
import { Navbar } from "./components/Navbar";
import { SectionCard } from "./components/SectionCard";
import { AnimatedHeart } from "./components/AnimatedHeart";
import { FloatingSparkles } from "./components/FloatingSparkles";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "./components/TypingText";
import { RandomMedicalIcons } from "./components/MedicalFloatingIcons";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-pink-50 via-pink-100 to-pink-50 overflow-hidden">
      {/* Floating Sparkles & Hearts */}
      <FloatingSparkles />
      <motion.div
        className="absolute inset-0 bg-pink-200 opacity-10 rounded-full blur-3xl -translate-y-20 scale-125"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center mt-12 md:mt-16 text-center px-4 sm:px-6 lg:px-0 relative z-10">
        {/* Cute animated ribbon above the profile */}
        <motion.div
          className="mb-4 sm:mb-6 px-4 sm:px-6 py-1 sm:py-2 bg-pink-300/60 text-pink-800 rounded-full font-bold shadow-lg text-xs sm:text-sm tracking-wide"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          🎀 Future Doctor & Dreamer ✨
        </motion.div>

        {/* Floating hearts */}
        <AnimatedHeart />

        <TypingText text="Derya Abdo" />
        <motion.div
          className="h-1 w-32 bg-pink-300 rounded-full mt-2"
          animate={{ width: ["6rem", "8rem", "6rem"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <p className="max-w-md sm:max-w-lg md:max-w-xl mt-2 sm:mt-3 text-pink-700 text-sm sm:text-base md:text-lg px-2">
          Passionate medical student exploring the world of medicine with love
          and curiosity.
        </p>

        {/* Profile Picture with soft pink glow */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mt-6"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10" />
            <Image
              src="/profile1.jpg"
              alt="profile"
              width={180}
              height={180}
              className="rounded-full border-4 border-pink-300 shadow-xl"
            />
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
          • Clinical Skills <br />
          • Anatomy & Physiology <br />
          • Patient Care <br />• Research Methods
        </SectionCard>

        <SectionCard title="Projects">
          • Infant Nutrition Research <br />
          • Anatomy App <br />• Volunteering at clinics
        </SectionCard>

        <SectionCard title="Contact">
          Email: derya.med@gmail.com <br />
          Instagram: @future.doctor.derya
        </SectionCard>
      </section>
      {/* <RandomMedicalIcons /> */}
    </main>
  );
}
