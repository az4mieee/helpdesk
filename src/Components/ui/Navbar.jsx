import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: "Beranda", href: "#hero" },
    { name: "Fitur", href: "#features" },
    { name: "Tentang", href: "#about" },
    { name: "Program", href: "#programs" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-md z-50`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo + Teks */}
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/ekuitas-h.png"
            alt="Logo Ekuitas"
            className="h-17 w-29"
          />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="text-gray-700 font-bold hover:text-[#0F50A1] transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle and Login Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-opacity`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="/login"
            className="bg-[#1577B6] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#0F50A1] transition"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md px-4 py-2 space-y-2"
        >
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="block py-2 text-gray-700 hover:text-[#0F50A1]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/login"
              className="block py-2 bg-[#1577B6] text-white rounded-lg text-center hover:bg-[#0F50A1] transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
          </li>
          <li className="flex justify-center py-2">
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </motion.ul>
      )}
    </nav>
  );
}
