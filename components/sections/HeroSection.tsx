import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Dodecahedron, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Scene = () => {
  const meshRef = useRef<any>();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Dodecahedron ref={meshRef} args={[1.5, 0]}>
        <meshStandardMaterial
          color="#f97316"
          roughness={0.5}
          metalness={0.1}
          wireframe
        />
      </Dodecahedron>
    </>
  );
};

const HeroSection: React.FC = () => {
  // 🔹 Fungsi scroll ke About
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
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 p-4 bg-zinc-900/50 backdrop-blur-sm rounded-xl">
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
