import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


export default function Hero() {
  // kata-kata yang akan berganti animasi
  const words = ["Helpdesk", "Support", "Service"]; 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    alert("⚠️ Layanan masih dalam pengembangan!");
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url('/Ekuitas-Campus.jpg')`, // taruh gambar di folder public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F50A1]/90 to-[#1577B6]/90"></div>

      {/* Konten Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center z-10 flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Selamat Datang di{" "}
          <span className="text-[#F6E603]">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="ml-3">Ekuitas</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Layanan informasi dan bantuan untuk mahasiswa, dosen, dan civitas
          akademika Universitas Ekuitas.
        </p>

        {/* Tombol Ajukan Pengaduan */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="bg-[#F6E603] text-[#0F50A1] px-8 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
        >
          Ajukan Pengaduan
        </motion.button>
      </motion.div>
    </section>
  );
}
