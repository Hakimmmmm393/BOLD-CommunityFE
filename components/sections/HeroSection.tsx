import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import Button from "../ui/Button";

// Komponen untuk load model Bear
const BearHead = () => {
  const { scene } = useGLTF("/models/Bear/scene.gltf");
  return (
    <primitive
      object={scene}
      scale={3.5} // perbesar agar dominan
      position={[0, 0, 0]} // turunkan sedikit supaya kepala pas di tengah
      rotation={[0, 0.2, 0]} // miring sedikit biar lebih hidup
    />
  );
};

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background 3D */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Suspense fallback={null}>
            <BearHead />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Text dan tombol */}
      <div className="relative z-10 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-orange-500">BOLD</span> Community
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Welcome to the official hub for the BOLD Roblox Community.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        >
          <Button onClick={scrollToAbout}>Explore About</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
