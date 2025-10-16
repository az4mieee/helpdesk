import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} p-6 shadow-lg z-40 transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >

      <button
        onClick={toggleSidebar}
        className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} absolute top-4 right-4 text-2xl`}
      >
        ✖
      </button>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Helpdesk</h2>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-opacity`}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
      <nav className="flex flex-col gap-3">
        <Link to="/Pages/Dashboard" className={`${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} p-2 rounded`}>📊 Dashboard</Link>
        <Link to="/Pages/buattiket" className={`${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} p-2 rounded`}>➕ Buat Tiket</Link>
        <Link to="/Pages/daftartiket" className={`${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} p-2 rounded`}>📂 Daftar Tiket</Link>

      </nav>
    </aside>
  );
}
