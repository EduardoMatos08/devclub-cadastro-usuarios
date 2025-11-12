import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 60%;
    height: auto;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
`;

export const InputsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 30px 0;
    width: 70%;
`;

export const TopInputsDiv = styled.div`
    display: flex;
    gap: 2.5%;
    justify-content: space-between;
`;

export const BottomInputsDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 5px;
`;

export const InputLabel = styled.label``;

export const Span = styled.span`
    color: red;
`;