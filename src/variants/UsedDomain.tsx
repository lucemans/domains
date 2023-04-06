import { motion } from 'framer-motion';
import { FC } from 'react';
import { DomainInfo } from 'src/App';

const Divv = motion('div');

export const UsedDomain: FC<{ domain: DomainInfo }> = ({ domain }) => {
    return (
        <Divv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.3,
                type: 'spring',
                bounce: 0.3,
                opacity: { duration: 0.03 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a
                href={`https://luc.${domain.name}`}
                className="relative block rounded-md bg-gradient-to-tr from-blue-500 to-pink-500 text-white font-bold p-4 overflow-hidden"
                target="_blank"
            >
                <div>
                    <span className="opacity-40">luc</span>.{domain.name}
                </div>
            </a>
        </Divv>
    );
};
