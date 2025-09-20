import React from "react";
import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const AboutCard: React.FC<{
  title: string;
  children: React.ReactNode;
  delay: number;
}> = ({ title, children, delay }) => (
  <motion.div
    className="bg-zinc-800 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-2xl font-bold text-orange-500 mb-4">{title}</h3>
    <div className="text-gray-300 space-y-2">{children}</div>
  </motion.div>
);

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
        <AboutCard title="Visi" delay={0.1}>
          <p>
            Menjadi komunitas yang inklusif, nyaman, dan menyenangkan bagi semua
            orang untuk berkumpul, berinteraksi, dan mengekspresikan diri secara
            positif.
          </p>
        </AboutCard>
        <AboutCard title="Misi" delay={0.2}>
          <li>
            <p>
              1. Menciptakan lingkungan yang aman, bebas dari toxic yang
              berlebihan, diskriminasi, dan provokasi.
            </p>
          </li>
          <li>
            <p>
              2. Menumbuhkan rasa saling menghargai antar member tanpa memandang
              latar belakang apapun.
            </p>
          </li>
          <li>
            <p>
              3. Menyediakan ruang interaksi yang beragam (gaming, sharing, dan
              hiburan).
            </p>
          </li>
          <li>
            <p>
              4. Menjaga suasana komunitas tetap fun, kreatif, dan penuh
              kebersamaan.
            </p>
          </li>
          <li>
            <p>
              5. Mengedepankan kedisiplinan dengan tetap menghormati aturan
              serta arahan staff.
            </p>
          </li>
          <li>
            <p>
              6. Menjadi wadah positif di mana setiap member merasa diterima dan
              dihargai.
            </p>
          </li>
        </AboutCard>
        <AboutCard title="Rules" delay={0.3}>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <b>1. Hormati Sesama</b>
              <p>
                Tidak ada hinaan, toxic, diskriminasi, SARA, atau hal yang
                merendahkan orang lain.
              </p>
            </li>
            <li>
              <b>2. No Spam</b>
              <p>Jangan spam teks, emoji, link, atau mention berlebihan.</p>
            </li>
            <li>
              <b>3. Gunakan Channel Sesuai Fungsi</b>
              <p>
                Post sesuai topik dan tempatnya. Baca deskripsi channel sebelum
                mengirim.
              </p>
            </li>
            <li>
              <b>4. Dilarang NSFW / Konten Tidak Pantas</b>
              <p>
                Komunitas ini untuk semua umur. Konten vulgar, kekerasan, atau
                dewasa tidak diperbolehkan.
              </p>
            </li>
            <li>
              <b>5. Tidak Promosi Tanpa Izin</b>
              <p>
                Jangan share server Discord lain, sosial media, atau link jualan
                tanpa izin staff.
              </p>
            </li>
            <li>
              <b>6. Gunakan Username & Foto Profil yang Pantas</b>
              <p>
                Hindari nama/profil yang menyinggung atau mengandung hal
                negatif.
              </p>
            </li>
            <li>
              <b>7. Ikuti Arahan Staff</b>
              <p>
                Moderator dan Admin berhak menindak pelanggaran. Taatilah arahan
                mereka.
              </p>
            </li>
            <li>
              <b>8. Larangan Provokasi </b>
              <p>
                Dilarang memprovokasi, menghina atau merendahkan player lain
                dalam alasan apapun
              </p>
            </li>
            <li>
              <b>9. Share Konten</b>
              <p>
                Kirimkan konten dalam bentuk apapun (Pict, Vid, Link) sesuai
                dengan channel yang sudah tersedia.
              </p>
            </li>
          </ul>
        </AboutCard>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
