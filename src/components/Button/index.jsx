import { ButtonStylePrimary, ButtonStyleSecondary, ButtonStyleBack } from './styles';

// Spread Operator: Pega o Resto que está no array e armazena em uma variável
const DefaultButton = ({ children, theme, ...props }) => {

    if (theme == "secondary") {  
        return(
            <ButtonStyleSecondary {...props}>{children}</ButtonStyleSecondary>
        );
    } else if (theme == "back") {
        return(
            <ButtonStyleBack {...props}>{children}</ButtonStyleBack>
        );
    } else {
        return(
            <ButtonStylePrimary {...props}>{children}</ButtonStylePrimary>
        );
    }

};

export default DefaultButton;