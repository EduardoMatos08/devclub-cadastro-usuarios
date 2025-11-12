// Importação dos React Hooks
import { useEffect, useState } from "react";

// Importação do Navigate
import { useNavigate } from "react-router-dom";

// Importação dos Componentes de Arquivos Locais
import {
    UsersDiv,
    UserDiv,
    UserLeftDiv,
    UserInformationDiv,
    UserName,
    ErrorDiv,
    ErrorMessage,
    OtherUserInformation,
    DeleteButton,
    Title,
    AvatarUser,
} from "./styles";

import Container from "../../components/Container";
import DivImage from "../../components/DivImage";
import DefaultButton from "../../components/Button";

// Importação da api
import api from "../../services/api";

const UsersList = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]); // useState() --> Cria a variável que pode mudar de valor
    // Para mudar de valor, usar: setVariável(Nova variável)

    // TODA VEZ QUE a TELA CARREGA ou quando uma VARIÁVEL MUDA DE VALOR o "useEffect()" É CHAMADO
    useEffect(
        () => {
            const getUsers = async () => {
                const { data } = await api.get("/users");

                setUsers(data);
            };

            getUsers();
        },
        [] /* , []" <-- Dependências de Variáveis */
    );

    const deleteUsers = async (id) => {
        // Atualiza no Banco de Dados
        await api.delete(`/users/${id}`);
        // Atualiza localmente na página usando o useState()

        setUsers(users.filter((user) => user.id != id));
    };

    if (users.length > 0) {
        return (
            <Container>
                <DefaultButton theme="back" onClick={() => navigate("/")}>
                    Voltar
                </DefaultButton>
                <DivImage></DivImage>
                <Title>Lista de Usuários</Title>
                <UsersDiv>
                    {users.map((user) => (
                        // Div de Usuários
                        <UserDiv key={user.id}>
                            <UserLeftDiv>
                                <AvatarUser
                                    src={`https://avatar.iran.liara.run/public?username=${user.id}`}
                                ></AvatarUser>
                                <UserInformationDiv>
                                    <UserName>{user.name}</UserName>
                                    <OtherUserInformation>
                                        {user.email}
                                    </OtherUserInformation>
                                    <OtherUserInformation>
                                        {user.age} Anos
                                    </OtherUserInformation>
                                </UserInformationDiv>
                            </UserLeftDiv>
                            <DeleteButton onClick={() => deleteUsers(user.id)}>
                                Remover
                            </DeleteButton>
                        </UserDiv>

                    ))}
                </UsersDiv>
            </Container>
        );
    } else {
        return (
            <Container>
                <DefaultButton theme="back" onClick={() => navigate("/")}>
                    Voltar
                </DefaultButton>
                <DivImage></DivImage>
                <Title>Lista de Usuários</Title>
                <UsersDiv>
                    <ErrorDiv>
                        <ErrorMessage>Não há usuários cadastrados.</ErrorMessage>
                        <DefaultButton onClick={() => navigate("/")}>Cadastrar</DefaultButton>
                    </ErrorDiv>
                </UsersDiv>
            </Container>
        );
    }

};

export default UsersList;
