import { motion } from 'framer-motion';
import { FC } from 'react';
import { DomainInfo } from 'src/App';

export const EmojiCard: FC<{ domain: DomainInfo }> = ({ domain }) => {
    const emoji = domain.emoji ? domain.emoji.toLowerCase() : '';

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
            className="relative block col-span-2 row-span-2 aspect-square shadow-md bg-[#333] rounded-md text-white font-bold p-4 overflow-hidden"
        >
            <div className="text-2xl">
                <span className="opacity-40">luc</span>.{domain.name}
            </div>
            <img
                src={`https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/${emoji}.svg`}
                alt=""
                className="absolute -right-[4%] -bottom-[4%] h-[40%]"
            />
        </motion.a>
    );
};
