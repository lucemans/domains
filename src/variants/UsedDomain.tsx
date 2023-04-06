import { motion } from 'framer-motion';
import { FC } from 'react';
import { DomainInfo } from 'src/App';

export const UsedDomain: FC<{ domain: DomainInfo }> = ({ domain }) => {
    return (
        <motion.a
            transition={{
                duration: 0.3,
                type: 'spring',
                bounce: 0.3,
                opacity: { duration: 0.03 },
                y: { duration: 0.3, type: 'spring', bounce: 0.3 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1.05 }}
            href={`https://luc.${domain.name}`}
            className="relative block col-span-2 row-span-1 sm:row-span-2 rounded-md bg-gradient-to-bl from-blue-500 to-blue-500/10 text-white font-bold p-4 overflow-hidden"
        >
            <div className="text-2xl w-full h-full">
                <span className="opacity-40">luc</span>.{domain.name}
            </div>
            <div className="absolute bottom-1 right-1 text-xs text-white/70">
                Click me
            </div>
        </motion.a>
    );
};
