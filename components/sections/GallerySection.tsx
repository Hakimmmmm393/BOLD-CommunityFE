"use client";
import React, { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import Modal from "../ui/Modal";
import { GALLERY_ITEMS } from "../../constants";
import { GalleryItem } from "../../types";
import { motion, AnimatePresence } from "framer-motion";

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <AnimatedSection id="gallery" className="bg-zinc-950 py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Gallery
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Moments from our community activities.
        </p>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-xl"
            onClick={() => openModal(item)}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.url}
              alt={item.caption}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold drop-shadow-md">
                {item.caption}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal dengan kartu animasi */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={selectedImage.url}
              className="relative bg-zinc-900 rounded-2xl shadow-2xl max-w-lg w-full p-6 overflow-hidden"
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Tombol Close */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>

              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-72 object-cover rounded-xl mb-5"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImage.caption}
              </h3>
              <p className="text-gray-300 mb-3 text-sm">
                {selectedImage.description || "No description available."}
              </p>
              <p className="text-gray-500 text-sm">{selectedImage.date}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};

export default GallerySection;
