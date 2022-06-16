import { FC, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import keybinds from "url:../assets/keybinds.svg";

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

const List: Domain[] = [
    {
        name: "domains",
        status: "in-use",
        info: "The page you are viewing right now",
    },
    {
        name: "contact",
        status: "in-use",
        info: "Ways to contact me and see what is new",
    },
    {
        name: "computer",
        status: "in-use",
        info: "Articles, posts, and other content I create",
    },
    {
        name: "page",
        status: "in-progress",
        info: "Live-hosted preview sites / demos",
    },
    {
        name: "show",
        status: "in-use",
        info: "Collection of Presentations & Slides",
    },
    {
        domain: "lucemans",
        name: "eth",
        status: "in-use",
        info: "Ethereum Address",
    },
    {
        name: "tools",
        status: "in-use",
        info: "List of tools I work on / maintain",
    },
    {
        name: "gay",
        status: "in-use",
        info: "A website to answer the question once and for all",
    },
    {
        name: "community",
        status: "in-use",
        info: "this is where the cool stuff happens!",
    },
    { name: "company", status: "reserved" },
    { name: "social", status: "reserved" },
    { name: "directory", status: "reserved" },
    { name: "software", status: "reserved" },
    { name: "gallery", status: "reserved" },
    { name: "codes", status: "reserved" },
    { name: "cool", status: "reserved" },
    { name: "church", status: "reserved" },
    { name: "foundation", status: "reserved" },
    { name: "finance", status: "reserved" },
    { name: "api", status: "reserved" },
    { name: "txt", status: "reserved" },
    { name: "js", status: "reserved" },
    { name: "university", status: "reserved" },
    { name: "services", status: "reserved" },
    { name: "photos", status: "reserved" },
    { name: "news", status: "reserved" },
    { name: "land", status: "reserved" },
    { name: "institute", status: "reserved" },
    { name: "guide", status: "reserved" },
    { name: "global", status: "reserved" },
    { name: "fan", status: "reserved" },
    { name: "equipment", status: "reserved" },
    { name: "earth", status: "reserved" },
    { name: "direct", status: "reserved" },
    { name: "chat", status: "reserved" },
    { name: "agency", status: "reserved" },
    { name: "wiki", status: "reserved" },
].sort((a, b) =>
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
