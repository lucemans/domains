import { motion } from 'framer-motion';
import { FC } from 'react';
import { DomainInfo } from 'src/App';

export const UnderConstructionDomain: FC<{ domain: DomainInfo }> = ({
    domain,
}) => {
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
            className="relative block aspect-square rounded-md border-4 border-yellow-400 text-yellow-400 font-bold p-4 overflow-hidden"
            target="_blank"
        >
            <div className="">
                <span className="opacity-40">luc</span>.{domain.name}
            </div>
            <img
                src="/crane.svg"
                alt="Construction"
                className="absolute right-[10%] bottom-0 h-[40%] -scale-x-100"
            />
        </motion.a>
    );
};
