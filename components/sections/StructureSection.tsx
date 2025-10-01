"use client";
import React, { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import { TEAM_STRUCTURE } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const StructureSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  // Card Member
  const MemberCard = ({ img, name, role }: any) => (
    <motion.div
      className="relative flex flex-col items-center bg-gradient-to-b from-zinc-800 to-zinc-900 
                 rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-orange-500/20 
                 transition-all duration-300 w-40"
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <motion.img
        className={`mx-auto rounded-full border-4 ${
          role === "President"
            ? "border-orange-500 w-28 h-28 shadow-lg shadow-orange-500/40"
            : "border-zinc-700 w-20 h-20"
        }`}
        src={img}
        alt={name}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <h4 className="mt-3 text-base font-bold text-white truncate max-w-[150px]">
        {name}
      </h4>
      <p
        className={`text-sm ${
          role === "President"
            ? "text-orange-400 font-semibold"
            : "text-gray-400"
        }`}
      >
        {role}
      </p>
    </motion.div>
  );

  // Grouping role
  const president = TEAM_STRUCTURE.filter((m) => m.role === "President");
  const vicePresidents = TEAM_STRUCTURE.filter(
    (m) => m.role === "Vice President"
  );
  const leaders = TEAM_STRUCTURE.filter((m) => m.role === "Leader");
  const admins = TEAM_STRUCTURE.filter((m) => m.role === "Admin");
  const guards = TEAM_STRUCTURE.filter((m) => m.role === "Guard");

  // Role Section with collapse/expand
  const RoleSection = ({
    title,
    members,
  }: {
    title: string;
    members: any[];
  }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-full">
        {/* Header clickable */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center px-4 py-3
                     bg-zinc-800/60 rounded-xl text-gray-200 hover:bg-zinc-700
                     transition-colors duration-300"
        >
          <h3 className="text-lg font-semibold uppercase tracking-wide">
            {title}
          </h3>
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-orange-400 font-bold text-xl"
          >
            ›
          </motion.span>
        </button>

        {/* Expand section */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="flex flex-wrap justify-center gap-6 mt-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              {members.map((m, i) => (
                <MemberCard key={i} {...m} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <AnimatedSection id="structure">
      <div className="text-center mb-14">
        <motion.h2
          className="text-4xl font-extrabold sm:text-5xl text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Structure
        </motion.h2>
        <motion.p
          className="mt-3 text-lg text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          The team that keeps BOLD running smoothly.
        </motion.p>
      </div>

      <div className="flex flex-col gap-6">
        <RoleSection title="President" members={president} />
        <RoleSection title="Vice President" members={vicePresidents} />
        <RoleSection title="Leader" members={leaders} />
        <RoleSection title="Admin" members={admins} />
        <RoleSection title="Guard" members={guards} />
      </div>
    </AnimatedSection>
  );
};

export default StructureSection;
