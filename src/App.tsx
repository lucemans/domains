import { FC, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";

const Wrapper = styled.div`
    display: flex;
    font-size: 3rem;
    position: relative;
`;

const Domain = styled.div`
    color: var(--color-pink);
    position: absolute;
    top: 200px;
    right: 100%;
`;

const ListItems = styled.div`
    height: 100vh;
    padding-top: 200px;
    padding-bottom: calc(100vh - 254px);
    cursor: grab;
    overflow: auto;
    transition: 250ms;
`;

const ListItem = styled.div`
    font-size: 3rem;
    opacity: 0.5;
`;

const List = [
    "domains",
    "contact",
    "computer",
    "page",
    "show",
    "company",
    "social",
    "directory",
    "software",
    "gallery",
    "codes",
    "cool",
    "church",
    "foundation",
    "finance",
    "api",
    "txt",
    "js",
    "university",
    "tools",
    "services",
    "photos",
    "news",
    "land",
    "institute",
    "guide",
    "global",
    "fan",
    "equipment",
    "earth",
    "direct",
    "chat",
    "agency",
    "community",
];

const size = 59;
const updateScrollMethod = (ref) => () => {
    const scrollTop = Number.parseInt(ref.current["scrollTop"]);
    console.log(`${scrollTop} - ${scrollTop / size}`);
    ref.current["scrollTop"] =
        scrollTop % size <= size / 2
            ? Math.ceil(scrollTop / size) * size
            : Math.floor(scrollTop / size) * size;
};

export const App: FC = () => {
    const [selected, setSelected] = useState(0);
    const ref = useRef();
    const updateScroll = useMemo(() => debounce(updateScrollMethod(ref), 1), []);

    return (
        <Wrapper>
            <Domain>LUC</Domain>
            <ListItems
                ref={ref}
                onScroll={(event) => {
                    updateScroll();
                }}
                onScrollCapture={(event) => {
                    console.log('cap');
                }}
            >
                {List.map((item) => (
                    <ListItem>.{item}</ListItem>
                ))}
            </ListItems>
        </Wrapper>
    );
};
