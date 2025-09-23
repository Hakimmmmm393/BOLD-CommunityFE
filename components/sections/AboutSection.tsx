import React, { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

// 🔹 Komponen Card yang bisa dibuka/tutup
const AboutCard: React.FC<{
  title: string;
  children: React.ReactNode;
  delay: number;
}> = ({ title, children, delay }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-zinc-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Header Judul */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-2xl font-bold text-orange-500">{title}</h3>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-orange-400 font-bold text-xl"
        >
          ▶
        </motion.span>
      </button>

      {/* Konten DropDown */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-4 text-gray-300 space-y-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// 🔹 Bagian About Section
const AboutSection: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold sm:text-5xl">About Us</h2>
        <p className="mt-4 text-lg text-gray-400">
          Our values and what drives our community forward.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Visi */}
        <AboutCard title="Visi" delay={0.1}>
          <p>
            Menjadi komunitas yang inklusif, nyaman, dan menyenangkan bagi semua
            orang untuk berkumpul, berinteraksi, dan mengekspresikan diri secara
            positif.
          </p>
        </AboutCard>

        {/* Misi */}
        <AboutCard title="Misi" delay={0.2}>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Menciptakan lingkungan yang aman, bebas dari toxic, diskriminasi,
              dan provokasi.
            </li>
            <li>
              Menumbuhkan rasa saling menghargai antar member tanpa memandang
              latar belakang.
            </li>
            <li>
              Menyediakan ruang interaksi beragam (gaming, sharing, hiburan).
            </li>
            <li>
              Menjaga suasana komunitas tetap fun, kreatif, penuh kebersamaan.
            </li>
            <li>
              Mengedepankan kedisiplinan dengan tetap menghormati aturan dan
              arahan staff.
            </li>
            <li>
              Menjadi wadah positif agar setiap member merasa diterima dan
              dihargai.
            </li>
          </ul>
        </AboutCard>

        {/* Rules */}
        <AboutCard title="Rules" delay={0.3}>
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <b>Hormati Sesama</b> – Tidak ada hinaan, toxic, diskriminasi,
              atau merendahkan orang lain.
            </li>
            <li>
              <b>No Spam</b> – Jangan spam teks, emoji, link, atau mention
              berlebihan.
            </li>
            <li>
              <b>Gunakan Channel Sesuai Fungsi</b> – Post sesuai topik &
              deskripsi channel.
            </li>
            <li>
              <b>Dilarang NSFW</b> – Tidak boleh konten vulgar, kekerasan,
              dewasa.
            </li>
            <li>
              <b>Tidak Promosi Tanpa Izin</b> – Jangan share link/server/media
              tanpa izin staff.
            </li>
            <li>
              <b>Username & Foto Profil Pantas</b> – Hindari nama/profil yang
              menyinggung.
            </li>
            <li>
              <b>Ikuti Arahan Staff</b> – Moderator/Admin berhak menindak
              pelanggaran.
            </li>
            <li>
              <b>Larangan Provokasi</b> – Dilarang memprovokasi atau merendahkan
              member lain.
            </li>
            <li>
              <b>Share Konten Sesuai Channel</b> – Pict, Vid, Link harus sesuai
              tempatnya.
            </li>
            <li>
              <b>Nickname</b> – Tambahkan prefix komunitas, contoh:
              BOLDxNickname.
            </li>
            <li>
              <b>No Exploit / Cheat</b> – Dilarang cheat atau bug abuse di
              Roblox/server.
            </li>
            <li>
              <b>Privasi & Keamanan</b> – Jangan bagikan data pribadi, admin
              tidak akan minta login.
            </li>
            <li>
              <b>No Drama / Konflik Internal</b> – Selesaikan masalah pribadi,
              jangan bawa ke publik.
            </li>
            <li>
              <b>Event & Giveaway</b> – Ikuti aturan staff, curang =
              diskualifikasi/ban.
            </li>
          </ul>
        </AboutCard>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
