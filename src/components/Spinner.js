import React from 'react';
import styled from 'styled-components';

const LoadingPostDiv = styled.div`
    display: flex;
    margin: 10px 20px;
    max-width: 700px;
    border-radius: 5px;
    background-color: white;
    justify-content: center;
`;

const Spinner = () => (
    <LoadingPostDiv>
        <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#49d1e0"
                strokeWidth="10"
                r="35"
                strokeDasharray="164.93361431346415 56.97787143782138"
                transform="rotate(275.845 50 50)"
            >
                <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
                />
            </circle>
        </svg>
    </LoadingPostDiv>
);

export default Spinner;