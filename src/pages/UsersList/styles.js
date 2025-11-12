import styled from 'styled-components';

export const TopItemsPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const ErrorDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: none;
    background-color: #ffffff25;
    border-radius: 20px;
    padding: 15px 20px;
    gap: 20px;
`

export const ErrorMessage = styled.p`
    font-size: 1.2rem;
`

export const UsersDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const UserDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: none;
    background-color: #ffffff25;
    border-radius: 40px;
    padding: 15px 20px;
    gap: 20px;
    max-width: 60%;
`;

export const UserLeftDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`;

export const Title = styled.h3`
    font-size: 55px;
    font-weight: 700;
`;

export const UserName = styled.h2`

`;

export const UserInformationDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 5px;
`;

export const OtherUserInformation = styled.p`
    
`;

export const AvatarUser = styled.img`
    width: 22%;
`;

export const DeleteButton = styled.button`
    transition: all 0.15s ease-in-out;
    background: linear-gradient(to bottom, #ff0000 0%, rgba(179, 0, 0, 1) 100%);
    border-radius: 20px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    &:hover {
        transform: scale(1.10);
        opacity: 0.8;
    }
`;