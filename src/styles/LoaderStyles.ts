import styled from '@emotion/styled';

export const LoaderStyles = styled.section`
    display: flex;
    justify-content: center;

    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #43b4d4 transparent transparent transparent;
    }
    .lds-ring div:nth-of-type(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-of-type(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-of-type(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
