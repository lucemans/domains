import { FC } from 'react';
import { DomainInfo } from 'src/App';

export const ENSDomain: FC<{ domain: DomainInfo }> = ({ domain }) => {
    return (
        <div className="relative rounded-md bg-blue-400 text-white font-bold px-4 py-4 overflow-hidden">
            <div>
                <span className="opacity-40">luc</span>.{domain.name}
            </div>
            <img
                src="/ens.svg"
                alt="ENS"
                className="absolute right-3 -bottom-[40%] h-[140%]"
            />
        </div>
    );
};
