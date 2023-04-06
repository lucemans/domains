import { FC } from 'react';

import _data from './api.json';
import { DomainEntry } from './DomainEntry';

export type DomainInfo = {
    name: string;
    status: 'in-use' | 'in-progress' | 'reserved';
    info: string;
    emoji?: string;
};

const data: DomainInfo[] = _data as unknown as DomainInfo[];

export const App: FC = () => {
    return (
        <div className="w-full px-4 mx-auto max-w-4xl mt-12 md:mt-24">
            <div className="flex mb-8 items-center gap-4">
                <img src="/output2.webp" alt="" className="w-16" />
                <div>
                    <div className="text-xl">Luc van Kampen</div>
                    <p className="opacity-80">@lucemans</p>
                </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 auto-rows-fr">
                {data.map((domain: DomainInfo) => (
                    <DomainEntry key={domain.name} domain={domain} />
                ))}
            </div>
        </div>
    );
};
