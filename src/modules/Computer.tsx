import { FC } from "react";
import styled from "styled-components";

const PostList = styled.ul`
    padding: 0;
    width: fit-content;
    font-size: 1rem;
    li {
        text-decoration: none;
        background: #444;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        border-radius: 0.5rem;
        list-style-type: none;
        color: inherit;
        a {
            color: inherit;
            text-decoration: none;
        }
        &:hover {
            background: #333;
            cursor: pointer;
        }
    }
`;

export const Computer: FC = () => {
    return (
        <div>
            <PostList>
                <li>
                    <a href="https://luc.computer/p/blockchain-zero-to-hero">
                        📹 BLOCKCHAIN FROM ZERO TO HERO
                    </a>
                </li>
                <li>
                    <a href="https://luc.computer/p/merge-strategy">
                        📚 GIT MERGE VS REBASE VS SQUASH
                    </a>
                </li>
                <li>
                    <a href="https://luc.computer/p/scyllo-1.0.0">
                        📦 SCYLLO REACHES V1.0.0 🎉🥳
                    </a>
                </li>
            </PostList>
        </div>
    );
};
