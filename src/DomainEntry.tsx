import { FC } from 'react';

import { DomainInfo } from './App';
import { ContactCard } from './variants/ContactCard';
import { DomainsDomain } from './variants/DomainsDomain';
import { EmojiCard } from './variants/EmojiCard';
import { EmptyDomain } from './variants/EmptyDomain';
import { ENSDomain } from './variants/ENSDomain';
import { UnderConstructionDomain } from './variants/UnderConstructionDomain';
import { UsedDomain } from './variants/UsedDomain';

export const DomainEntry: FC<{ domain: DomainInfo }> = ({ domain }) => {
    if (domain.name === 'eth') {
        return <ENSDomain domain={domain} />;
    }

    if (domain.name === 'contact') {
        return <ContactCard domain={domain} />;
    }

    if (domain.emoji) {
        return <EmojiCard domain={domain} />;
    }

    if (domain.name === 'domains') {
        return <DomainsDomain domain={domain} />;
    }

    if (domain.status === 'in-use') {
        return <UsedDomain domain={domain} />;
    }

    if (domain.status === 'in-progress') {
        return <UnderConstructionDomain domain={domain} />;
    }

    return <EmptyDomain domain={domain} />;
};
