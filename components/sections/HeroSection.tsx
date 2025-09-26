import React, { Suspense, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import Button from "../ui/Button";

// Komponen untuk load model Bear dengan responsif
const BearHead = () => {
  const { scene } = useGLTF("/models/Bear/scene.gltf");
  const { size } = useThree(); // ambil ukuran canvas (width, height)

  // Hitung skala & posisi sesuai device
  const { scale, position } = useMemo(() => {
    if (size.width > 1600) {
      // TV / Monitor besar
      return { scale: 3.5, position: [0, 0, 0] };
    } else if (size.width > 1024) {
      // Laptop / Monitor biasa
      return { scale: 4.5, position: [0, -1.5, 0] };
    } else if (size.width > 768) {
      // Tablet
      return { scale: 3.5, position: [0, -0.3, 0] };
    } else {
      // HP
      return { scale: 2.5, position: [0, 0, 0] };
    }
  }, [size.width]);

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={[0, 0.2, 0]}
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
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          style={{ width: "100%", height: "100%" }}
        >
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
