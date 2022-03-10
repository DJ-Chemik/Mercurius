import { ButtonWrapper } from "./Button.styled"

interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonWrapper onClick={props.onClick} >
      {props.title}
    </ButtonWrapper>
  )
}

export default Button
