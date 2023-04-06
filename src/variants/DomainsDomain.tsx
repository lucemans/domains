import { motion } from 'framer-motion';
import { FC } from 'react';
import { DomainInfo } from 'src/App';

export const DomainsDomain: FC<{ domain: DomainInfo }> = ({ domain }) => {
    return (
        <motion.div
            transition={{
                duration: 0.3,
                type: 'spring',
                bounce: 0.3,
                opacity: { duration: 0.03 },
                y: { duration: 0.3, type: 'spring', bounce: 0.3 },
            }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1.05 }}
            className="relative block z-10 row-span-2 col-span-4 rounded-xl shadow-xl bg-gradient-to-br from-zinc-500/40 to-zinc-900/40 border-2 drop-shadow backdrop-blur-lg text-white font-bold p-4 overflow-hidden"
        >
            <h2>.domains</h2>
            <p>
                Welcome to luc.domains. This page has... domains, hope that
                helps 🤣
            </p>
        </motion.div>
    );
};
