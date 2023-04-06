import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';

import _data from './api.json';
import { DomainEntry } from './DomainEntry';

export type DomainInfo = {
    name: string;
    status: 'in-use' | 'in-progress' | 'reserved';
    info: string;
};

const data: DomainInfo[] = _data as unknown as DomainInfo[];

export const App: FC = () => {
    return (
        <div className="w-full px-4 mx-auto max-w-xl mt-24">
            <div className="flex mb-8 items-center">
                <img src="/output2.webp" alt="" className="w-16" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatePresence initial={false}>
                    {data.map((domain: DomainInfo) => (
                        <DomainEntry key={domain.name} domain={domain} />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
