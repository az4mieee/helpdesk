// src/components/ui/AnimatedText.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedText() {
  const words = ["Helpdesk", "Support", "Service", "Ekuitas"]; // teks yang mau diganti
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // ganti teks setiap 2.5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-12 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-[#F6E603] text-4xl font-bold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
