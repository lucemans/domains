import { FC, ReactChild } from "react";
import styled, { keyframes } from "styled-components";
import { Domain } from "./DomainName";
import { Computer } from "./modules/Computer";
import { Ethereum } from "./modules/Ethereum";

const FadeInPerimAnim = keyframes`
    0% {
        border-color: rgba(255,255,255,1);
    }
    80% {
        border-color: rgba(255,255,255,0);
    }
    100% {
        border-color: rgba(255,255,255,0);
    }
`;

const FadeInAnim = keyframes`
    0% {
        margin-left: -100%;
        max-height: 100vh;
        opacity: 0;
    }
    50% {
        margin-left: 0%;
        opacity: 1;
        max-height: 100vh;
    }
    100% {
        margin-left: 0%;
        max-height: 100vh;
    }
`;

const FadeInPerimiter = styled.div`
    max-width: 800px;
    height: fit-content;
    border-left: 4px solid white;
    margin: 200px 0;
    padding: 1rem 0;
    overflow: hidden;
    position: relative;
    font-size: 2rem;
    padding-left: 1rem;
    animation: ${FadeInPerimAnim} 2s forwards;

    @media screen and (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        width: 100vw;
        background: #111;
        bottom: 0;
        max-height: 400px;
        margin: 0;
        overflow-y: auto;
        box-shadow: 0 0 10px var(--color-blue);
    }
`;

const FadeInBox = styled.div`
    animation: ${FadeInAnim} 1s forwards;
    /* position: absolute; */
    /* border-color: var(--color-blue-alt); */
    font-size: 1.4rem;
    /* border: 1px solid var(--color-blue-alt); */
    overflow: hidden;
    margin-left: 2rem;
    min-width: 600px;
    max-width: 100%;
    width: fit-content;
    border-radius: 0.75rem;
`;

const Header = styled.div`
    padding: 1rem;
    /* background: rgba(40, 154, 252, 0.5); */
`;

const Body = styled.div`
    padding: 1rem;
    font-size: 1.4rem;

    /* background: rgba(89,184,255,0.2); */
`;

const Description = styled.div`
    color: rgba(89, 184, 255, 1);
`;

export const InfoBox: FC<{ domain: Domain }> = ({ domain }) => {
    return (
        <FadeInPerimiter>
            <FadeInBox>
                {/* <Header>{header}</Header> */}
                {(domain.info && (
                    <Body>
                        <div>
                            Status:{" "}
                            <span
                                style={{
                                    color:
                                        domain.status == "in-progress"
                                            ? "var(--color-yellow)"
                                            : domain.status == "in-use"
                                            ? "var(--color-green)"
                                            : "inherit",
                                }}
                            >
                                {domain.status == "in-progress"
                                    ? "In Progress"
                                    : domain.status == "in-use"
                                    ? "Online"
                                    : "Reserved"}
                            </span>
                        </div>
                        <Description>{domain.info}</Description>
                        {
                            domain.name == 'eth' && <Ethereum />
                        }
                        {
                            domain.name == 'computer' && <Computer />
                        }
                    </Body>
                )) || (
                    <Body>
                        <div>No Info Available Yet...</div>
                    </Body>
                )}
            </FadeInBox>
        </FadeInPerimiter>
    );
};
