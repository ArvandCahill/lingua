import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon, VercelIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="text-lg font-semibold text-gray-500">
          How can I assist you today?
        </p>
        <p className="text-sm text-gray-400">
          Whether you need answers, suggestions, or just a friendly chat, I’m here to help!
        </p>
        <p className="text-xs text-gray-300">
          Ask me anything or let me know how I can help you!
        </p>
      </div>
    </motion.div>

  );
};
