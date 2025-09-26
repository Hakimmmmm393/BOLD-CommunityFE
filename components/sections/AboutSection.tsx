import React, { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Star, Users, Target } from "lucide-react"; // ikon

// 🔹 Komponen Card dropdown
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

// 🔹 Komponen Value Card
const ValueCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}> = ({ icon, title, desc, delay }) => (
  <motion.div
    className="bg-zinc-800 p-6 rounded-2xl shadow-lg hover:shadow-xl border border-zinc-700"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-orange-500/20 rounded-full text-orange-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-orange-400">{title}</h3>
    </div>
    <p className="text-gray-300">{desc}</p>
  </motion.div>
);

// 🔹 Bagian About Section
const AboutSection: React.FC = () => {
  return (
    <AnimatedSection id="about">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold sm:text-5xl">About Us</h2>
        <p className="mt-4 text-lg text-gray-400">
          Our values and what drives our community forward.
        </p>
      </div>

      {/* 🔹 Penjelasan tentang BOLD Community */}
      <motion.div
        className="bg-zinc-900/50 p-8 rounded-2xl shadow-lg border border-zinc-700 max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-bold text-orange-500 mb-4 text-center">
          Apa itu BOLD Community?
        </h3>
        <p className="text-gray-300 mb-6 text-center">
          <b>BOLD Community</b> adalah komunitas Roblox yang dibangun untuk
          menyatukan para pemain yang biasanya bermain sendirian, menjadi bagian
          dari tim yang seru, dan penuh kekompakan.
        </p>

        <div className="space-y-3 text-gray-300">
          <h4 className="text-xl font-semibold text-orange-400">
            Makna / Arti dari BOLD :
          </h4>
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <b>Bravery</b> – Berani mencoba hal baru di Roblox.
            </li>
            <li>
              <b>Originality</b> – Kreatif dan orisinal dalam menciptakan
              pengalaman bermain.
            </li>
            <li>
              <b>Loyalty</b> – Setia & kompak bersama teman satu komunitas.
            </li>
            <li>
              <b>Determination</b> – Bertekad mencapai tujuan bersama, baik
              dalam game maupun event komunitas.
            </li>
          </ul>
        </div>

        <motion.p
          className="mt-6 text-lg text-gray-200 italic text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Kami akan menciptakan Roblox bukan sekadar game tapi juga tempat untuk
          membangun persahabatan, solidaritas, dan momen berkesan. Dengan
          bergabung di <b>BOLD</b>, kamu nggak akan lagi main sendirian, tapi
          bareng komunitas yang seru dan suportif ini.
        </motion.p>
      </motion.div>

      {/* Visi Misi Rules */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
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

      {/* Nilai-nilai Community */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-orange-500">BOLD Values</h2>
        <p className="mt-2 text-gray-400">
          Empat nilai utama yang menjadi pondasi komunitas BOLD.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ValueCard
          icon={<Shield size={28} />}
          title="Bravery"
          desc="Berani mencoba hal baru di Roblox."
          delay={0.1}
        />
        <ValueCard
          icon={<Star size={28} />}
          title="Originality"
          desc="Kreatif dan orisinal dalam menciptakan pengalaman bermain."
          delay={0.2}
        />
        <ValueCard
          icon={<Users size={28} />}
          title="Loyalty"
          desc="Setia & kompak bersama teman satu komunitas."
          delay={0.3}
        />
        <ValueCard
          icon={<Target size={28} />}
          title="Determination"
          desc="Bertekad mencapai tujuan bersama, baik dalam game maupun event."
          delay={0.4}
        />
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
