import { styled } from "styled-components";
import { backgroundColor, borderBottom, variant } from "styled-system";

type ButtonProps = {
    variant?: string
}

export const Button = styled.button<ButtonProps>`
    padding: 10px 20px;
    cursor: pointer;

    ${variant({
        variants: {
            default: {
                backgroundColor: 'transparent',
                color: '#fff',
                borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
            },
            primary: {
                padding: '10px 70 px',
                borderRadius: '4px',    
                backgroundColor: '#fff',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
            },
        }
    })}
`;

Button.defaultProps = {
    variant: 'default'
}