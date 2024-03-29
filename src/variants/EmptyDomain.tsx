import { motion } from 'framer-motion';
import { FC } from 'react';
import { DomainInfo } from 'src/App';

export const EmptyDomain: FC<{ domain: DomainInfo }> = ({ domain }) => {
    return (
        <motion.a
            transition={{
                duration: 0.3,
                type: 'spring',
                bounce: 0.3,
                opacity: { duration: 0.03 },
                y: { duration: 0.3, type: 'spring', bounce: 0.3 },
            }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1.05 }}
            href={`https://luc.${domain.name}`}
            className="relative block col-span-2 row-span-2 md:col-span-2 md:aspect-square rounded-md bg-gradient-to-tr from-neutral-50/10 to-pink-500 text-white font-bold p-4 overflow-hidden"
        >
            <div className="w-full h-full text-2xl">
                <span className="opacity-40">luc</span>.{domain.name}
            </div>
            <div className="absolute bottom-1 right-1 text-xs text-white/70">
                soon™️
            </div>
        </motion.a>
    );
};
