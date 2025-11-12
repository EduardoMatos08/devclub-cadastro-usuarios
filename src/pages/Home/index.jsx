// Importação dos React Hooks
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// Importação dos Componentes de Arquivos Locais
import {
    Title,
    InputLabel,
    Span,
    Form,
    DivInput,
    InputsDiv,
    TopInputsDiv,
    BottomInputsDiv,
} from "./styles.js";

import Container from "../../components/Container";
import DivImage from "../../components/DivImage";
import Input from "../../components/Input";
import Button from "../../components/Button";

// Importação da api
import api from "../../services/api";

const App = () => {
    // Declarações de Variáveis
    const inputName = useRef();
    const inputAge = useRef();
    const inputEmail = useRef();

    const navigate = useNavigate();

    // Declarações de Funções
    const registerNewUser = async () => {
        const data = await api.post("/users", {
            name: inputName.current.value,
            age: parseInt(inputAge.current.value),
            email: String(inputEmail.current.value),
        });
        console.log(data);
    };

    // Retorno do JSX
    return (
        <Container>

            <DivImage></DivImage>
            <Form onSubmit={registerNewUser}>
                <Title>Cadastro de Usuários</Title>

                <InputsDiv>
                    <TopInputsDiv>
                        <DivInput>
                            <InputLabel>
                                Nome <Span>*</Span>
                            </InputLabel>
                            <Input
                                ref={inputName}
                                placeholder="Nome do Usuário"
                            ></Input>
                        </DivInput>

                        <DivInput>
                            <InputLabel>
                                Idade <Span>*</Span>
                            </InputLabel>
                            <Input
                                type="number"
                                min="0"
                                max="200"
                                ref={inputAge}
                                placeholder="Idade do Usuário"
                            ></Input>
                        </DivInput>
                    </TopInputsDiv>

                    <BottomInputsDiv>
                        <DivInput>
                            <InputLabel>
                                Email <Span>*</Span>
                            </InputLabel>
                            <Input
                                type="email"
                                ref={inputEmail}
                                placeholder="E-mail do Usuário"
                            ></Input>
                        </DivInput>
                    </BottomInputsDiv>
                </InputsDiv>
                {/* Poderia colocar um PropType nos Components, mas não é necessário no momento... */}
                <Button type="submit">Cadastrar Usuário</Button>
            </Form>
            <Button
                onClick={() => navigate("/lista-de-usuarios")}
                theme="secondary"
            >
                Ver Usuários
            </Button>
        </Container>
    );
};

export default App;
