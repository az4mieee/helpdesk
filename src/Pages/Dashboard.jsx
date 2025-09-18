import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [summary, setSummary] = useState({ open: 0, progress: 0, done: 0 });
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSummary({ open: 500, progress: 3, done: 100 });
    setTickets([
      { id: "#1001", judul: "Email Error", status: "Open", tanggal: "10-09-2025" },
      { id: "#1002", judul: "Login Tidak Bisa", status: "Diproses", tanggal: "09-09-2025" },
      { id: "#1003", judul: "Reset Password", status: "Selesai", tanggal: "08-09-2025" },
    ]);
  }, []);

  const filteredTickets = tickets.filter((t) =>
    t.judul.toLowerCase().includes(search.toLowerCase())
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const purpleBlue = "#4B5CC4"; // biru ke ungu

  return (
    <div className="min-h-screen flex bg-white">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-[#4B5CC4] mb-6">📊 Dashboard Helpdesk</h1>

        {/* Ringkasan Tiket */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            className={`bg-[${purpleBlue}] p-6 rounded-xl shadow`}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-medium text-white">Tiket Open</h3>
            <div className="text-3xl font-bold text-white">{summary.open}</div>
          </motion.div>

          <motion.div
            className={`bg-[${purpleBlue}] p-6 rounded-xl shadow`}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-medium text-white">Tiket Diproses</h3>
            <div className="text-3xl font-bold text-white">{summary.progress}</div>
          </motion.div>

          <motion.div
            className={`bg-[${purpleBlue}] p-6 rounded-xl shadow`}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-medium text-white">Tiket Selesai</h3>
            <div className="text-3xl font-bold text-white">{summary.done}</div>
          </motion.div>
        </div>

        {/* Search */}
        <div className="flex flex-col items-center mb-6">
          <h3 className="text-xl font-semibold text-[#4B5CC4] mb-3">📌 Tiket Terbaru</h3>
          <input
            type="text"
            placeholder="Cari tiket..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B6DE5] w-64 text-center"
          />
        </div>

        {/* Table Tiket */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#4B5CC4] text-white">
                <th className="p-3 rounded-l-lg">ID Tiket</th>
                <th className="p-3">Judul</th>
                <th className="p-3">Status</th>
                <th className="p-3 rounded-r-lg">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.length > 0 ? (
                filteredTickets.map((t, i) => (
                  <motion.tr
                    key={i}
                    className="border-b hover:bg-[#4B5CC4]/10 transition"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <td className="p-3 font-medium text-[#4B5CC4]">{t.id}</td>
                    <td className="p-3 text-[#4B5CC4]">{t.judul}</td>
                    <td
                      className={`p-3 font-semibold ${
                        t.status === "Open"
                          ? "text-[#F6E603]"
                          : t.status === "Diproses"
                          ? "text-[#49B6B0]"
                          : "text-[#6FD36A]"
                      }`}
                    >
                      {t.status}
                    </td>
                    <td className="p-3 text-[#4B5CC4]">{t.tanggal}</td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    Tidak ada tiket ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>
      </main>
    </div>
  );
}
