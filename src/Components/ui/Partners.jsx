import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Partners() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const logos = [
    "/src/assets/bank-bjb.png",
    "/src/assets/uis-logo.png",
    "/src/assets/Kanazawa-dark.png",
    "/src/assets/ykp-bjb.png",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // muncul ketika 30% section terlihat
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white text-center">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.h2
            key="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-8 text-[#0F50A1]"
          >
            Mitra Kami
          </motion.h2>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="w-32 h-32 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Mitra ${i + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
