import styled from "styled-components";

export const ButtonStylePrimary = styled.button`
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 30px;
    background: linear-gradient(to bottom, #f6795d 0%, #ec5668ff 100%);
    padding: 1rem 1.5rem;
    border: none;
    font-size: 1.2rem;
    &:hover {
        box-shadow: 0 0 5px #f6795d;
        transform: scale(1.05);
    }
`;

export const ButtonStyleSecondary = styled.button`
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: none;
    border: 2px solid white;
    border-radius: 30px;
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    &:hover {
        box-shadow: 0 0 10px white;
        transform: scale(1.05);
    }
`;

export const ButtonStyleBack = styled.button`
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 30px;
    background: linear-gradient(to bottom, #f6795d 0%, #ec5668ff 100%);
    padding: 10px 20px;
    border: none;
    font-size: 1.2rem;
    position: fixed;
    top: 5vh;
    left: 5vh;
    &:hover {
        box-shadow: 0 0 5px #f6795d;
        transform: scale(1.05);
    }
`;