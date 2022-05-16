import { FC, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

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

const SectionGap = styled.div`
    max-width: 200px;
    flex: 1;
`;

const Domain = styled.div`
    color: var(--color-pink);
    margin-top: 200px;
    text-align: right;
    @media screen and (max-width: 800px) {
        margin-top: 120px;
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
        name: "eth",
        status: "in-use",
        info: "Ethereum Address",
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
    { name: "tools", status: "reserved" },
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
    { name: "community", status: "reserved" },
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
            <SectionGap />
            <Domain>luc</Domain>
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
                    <SwiperSlide className="spacing">
                        <DomainName domain={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {selected >= 0 && selected < List.length && (
                <InfoBox domain={List[selected]} />
            )}
        </Wrapper>
    );
};
