import ContainerStyle from './styles';

// Spread Operator: Pega o Resto que está no array e armazena em uma variável
const Container = ({ children, ...props }) => {

    return(
        <ContainerStyle {...props}>{children}</ContainerStyle>
    );

};

export default Container;