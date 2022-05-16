import { FC } from "react";
import styled from "styled-components";
import { useSwiperSlide } from "swiper/react/swiper-react";

export type Domain = {
    name: string,
    status: 'in-use' | 'reserved' | 'in-progress',
    info?: string
};

const Wrapper = styled.div<{ active: string }>`
    font-size: 3rem;
    opacity: ${({ active }) => (active)};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 100%;
`;

const LabelSpot = styled.div`
    min-width: 80px;
    height: 100%;
`;

const CheckMarkLabel = styled.div`
    background: var(--color-green);
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
`;
const ProgressLabel = styled.div`
    background: var(--color-yellow);
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
`;

export const DomainName: FC<{ domain: Domain }> = ({ domain }) => {
    const { isActive } = useSwiperSlide();

    return (
        <Wrapper active={isActive ? "1" : (domain.status=='reserved' ? '0.2' : '0.4')}>
            .{domain.name}
                <LabelSpot>
                    {
                        domain.status == 'in-use' &&
                        <CheckMarkLabel></CheckMarkLabel>
                    }
                    {
                        domain.status == 'in-progress' &&
                        <ProgressLabel />
                    }
                </LabelSpot>
        </Wrapper>
    );
};
