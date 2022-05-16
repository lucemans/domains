import { FC } from "react";
import styled from "styled-components";

const Code = styled.code`
    font-size: 0.8em;
    padding: 0.2em;
    background: #444;
    width: fit-content;
    display: inline-block;
`;

export const Ethereum: FC = () => {
    return (
        <div>
            <br />
            View my Ethereum-related shenanigans{" "}
            <a
                href="https://etherscan.io/address/0x225f137127d9067788314bc7fcc1f36746a3c3b5"
                target="_blank"
            >
                etherscan
            </a>
            ,
            <br />
            or on other chains using{" "}
            <Code>0x225f137127d9067788314bc7fcc1f36746a3c3b5</Code>
        </div>
    );
};
