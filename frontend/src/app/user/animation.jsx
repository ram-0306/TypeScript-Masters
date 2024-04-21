'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Animation = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {items.map(item => (
        <motion.div
          layoutId={item.id}
          key={item.id}
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{items.find(item => item.id === selectedId)?.subtitle}</motion.h5>
            <motion.h2>{items.find(item => item.id === selectedId)?.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Animation;
