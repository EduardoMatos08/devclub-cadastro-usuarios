import {DivImageStyle, ImageStyle} from './styles';
import UsersImage from "../../assets/users.png";

// Spread Operator: Pega o Resto que está no array e armazena em uma variável
const DivImage = ({ children, ...props }) => {

    return(
        <DivImageStyle>
                <ImageStyle {...props} src={UsersImage}>{children}</ImageStyle>
        </DivImageStyle>
    );

};

export default DivImage;