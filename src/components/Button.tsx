import { ButtonContainer, ButtonVariant } from './Button.styles';

interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
}

export function Button({ variant = 'primary', onClick }: ButtonProps){
  return(
    <ButtonContainer variant={variant} onClick={onClick}>Enviar</ButtonContainer>
  )
}