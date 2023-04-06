import { FC } from 'react';
import { DomainInfo } from 'src/App';

export const UnderConstructionDomain: FC<{ domain: DomainInfo }> = ({
    domain,
}) => {
    return (
        <div className="relative rounded-md border-2 border-yellow-400 text-yellow-400 px-4 py-2">
            <div className="h-full w-full flex items-center">
                <span className="opacity-40">luc</span>.{domain.name}
            </div>
            <img
                src="/crane.svg"
                alt="Construction"
                className="absolute right-10 bottom-0 h-[80%] -scale-x-100"
            />
        </div>
    );
};
