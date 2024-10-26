import React, { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface TypingEffectProps {
  text: string;
}

const TypingEffect = ({ text = '' }: TypingEffectProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 100); // Adjust typing speed here

    return () => clearTimeout(timeout);
  }, [index, text]);

  return (
    <div>
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {text.slice(0, index + 1)}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TypingEffect;
