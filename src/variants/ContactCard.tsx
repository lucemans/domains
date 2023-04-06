import { motion } from 'framer-motion';
import { FC } from 'react';
import { DomainInfo } from 'src/App';

export const ContactCard: FC<{ domain: DomainInfo }> = ({ domain }) => {
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
            className="relative block row-span-3 col-span-2 rounded-md bg-white text-white font-bold border-2 overflow-hidden"
        >
            <div className="relative w-full h-full text-2xl bg-[#222] rounded-md overflow-hidden">
                <img
                    src="/contact.webp"
                    className="absolute inset-0 object-fill h-full"
                    alt=""
                />
            </div>
        </motion.a>
    );
};
