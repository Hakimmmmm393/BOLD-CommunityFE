
import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import Modal from '../ui/Modal';
import { GALLERY_ITEMS } from '../../constants';
import { GalleryItem } from '../../types';
import { motion } from 'framer-motion';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatedSection id="gallery" className="bg-zinc-950">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold sm:text-5xl">Gallery</h2>
        <p className="mt-4 text-lg text-gray-400">Moments from our community activities.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openModal(item)}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.url} alt={item.caption} className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-semibold">{item.caption}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      <Modal isOpen={!!selectedImage} onClose={closeModal}>
        {selectedImage && (
          <div>
            <img src={selectedImage.url} alt={selectedImage.caption} className="w-full h-auto object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-white">{selectedImage.caption}</h3>
            <p className="text-sm text-gray-400">{selectedImage.date}</p>
          </div>
        )}
      </Modal>
    </AnimatedSection>
  );
};

export default GallerySection;
