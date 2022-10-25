import { FC, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import keybinds from "url:../assets/keybinds.svg";
import data from './api.json';

const Wrapper = styled.div`
    display: flex;
    font-size: 3rem;
    justify-content: flex-start;
    width: 100%;
    .height {
        height: 100vh;
        overflow: hidden;
        padding-top: 200px;
        @media screen and (max-width: 800px) {
            padding-top: 120px;
            padding-bottom: calc(100vh - 156px);
        }
        padding-bottom: calc(100vh - 259px);
        width: fit-content;
    }
    .spacing {
    }
`;

const Domain = styled.div`
    color: var(--color-pink);
    margin-top: 200px;
    text-align: right;
    max-width: 300px;
    flex: 1;
    @media screen and (max-width: 800px) {
        margin-top: 120px;
    }
`;

const Keybinds = styled.img`
    position: absolute;
    right: 64px;
    bottom: 64px;
    width: auto;
    height: auto;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

const List: Domain[] = data.sort((a, b) =>
    a.status == b.status
        ? 0
        : a.status == "reserved"
        ? 1
        : b.status == "reserved"
        ? -1
        : a.status == "in-progress"
        ? 1
        : b.status == "in-progress"
        ? -1
        : 0,
) as Domain[];

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { A11y, Keyboard, Mousewheel, Scrollbar } from "swiper";
import { Domain, DomainName } from "./DomainName";
import { InfoBox } from "./InfoBox";

export const App: FC = () => {
    const [selected, setSelected] = useState(0);
    return (
        <Wrapper>
            <Domain>
                {(List[selected] && List[selected].domain) || "luc"}
            </Domain>
            <Swiper
                className="height"
                slidesOffsetAfter={0}
                slidesOffsetBefore={0}
                slidesPerView="auto"
                spaceBetween={10}
                speed={500}
                a11y={{}}
                direction="vertical"
                modules={[Scrollbar, A11y, Mousewheel, Keyboard]}
                slideToClickedSlide
                keyboard={{}}
                mousewheel={{
                    releaseOnEdges: true,
                }}
                onSlideChange={() => {
                    setSelected(-1);
                }}
                onTransitionEnd={(swiper) => {
                    setSelected(swiper.activeIndex);
                }}
            >
                {List.map((item) => (
                    <SwiperSlide className="spacing" key={item.name}>
                        <DomainName domain={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {selected >= 0 && selected < List.length && (
                <InfoBox domain={List[selected]} />
            )}
            <Keybinds src={keybinds} />
        </Wrapper>
    );
};
