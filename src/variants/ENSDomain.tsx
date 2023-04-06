import { motion } from 'framer-motion';
import { FC } from 'react';
import { DomainInfo } from 'src/App';

export const ENSDomain: FC<{ domain: DomainInfo }> = ({ domain }) => {
    return (
        <motion.a
            initial={false}
            animate={{ y: -20, opacity: 0 }}
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
            className="relative block aspect-square rounded-md bg-blue-400 text-white font-bold p-4 overflow-hidden"
            target="_blank"
        >
            <div className="text-2xl">
                <span className="opacity-40">luc</span>.{domain.name}
            </div>
            <img
                src="/ens.svg"
                alt="ENS"
                className="absolute right-0 -bottom-[10%] h-[60%]"
            />
        </motion.a>
    );
};
