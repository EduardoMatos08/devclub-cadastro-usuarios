import InputStyle from './styles';

// Spread Operator: Pega o Resto que está no array e armazena em uma variável
const Input = ({ children, ...props }) => {

    return(
        <InputStyle {...props}>{children}</InputStyle>
    );

};

export default Input;