import { FC } from 'react';
import { DomainInfo } from 'src/App';

export const EmptyDomain: FC<{ domain: DomainInfo }> = ({ domain }) => {
    return (
        <div className="rounded-md border px-3 py-4 text-lg">
            <div>
                <span className="opacity-40">luc</span>.{domain.name}
            </div>
        </div>
    );
};
