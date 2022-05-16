import { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSwiperSlide } from "swiper/react/swiper-react";

export type Domain = {
    name: string;
    status: "in-use" | "reserved" | "in-progress";
    info?: string;
    domain?: string;
};

const Wrapper = styled.a<{ activeOpacity: string }>`
    font-size: 3rem;
    opacity: ${({ activeOpacity }) => activeOpacity};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 100%;
    color: inherit;
    &:focus {
        outline: none;
    }
`;

const LabelSpot = styled.div`
    min-width: 80px;
    height: 100%;

    @media screen and (max-width: 800px) {
        min-width: 60px;
    }
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
    const ref = useRef();

    useEffect(() => {
        if (isActive) {
            if (ref.current) {
                ref.current["focus"]();
            }
        }
    }, [isActive, ref]);

    return (
        <Wrapper
            ref={ref}
            activeOpacity={
                isActive ? "1" : domain.status == "reserved" ? "0.2" : "0.4"
            }
            href={"https://" + (domain.domain || "luc") + "." + domain.name}
            onClickCapture={(e) => {
                if (ref.current && ref.current == document.activeElement) {

                } else {
                    e.preventDefault();
                }
            }}
        >
            .{domain.name}
            <LabelSpot>
                {domain.status == "in-use" && <CheckMarkLabel></CheckMarkLabel>}
                {domain.status == "in-progress" && <ProgressLabel />}
            </LabelSpot>
        </Wrapper>
    );
};
