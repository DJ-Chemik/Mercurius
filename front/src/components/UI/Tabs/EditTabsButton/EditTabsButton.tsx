import { EditButtonStyled } from './EditTabsButton.styled';
import './EditTabsButton.styled.ts';

interface propsData{
  label: string;
  onClick?: () => void;
}

const EditTabsButton = (props: propsData) => {
  return(
    <EditButtonStyled onClick={props.onClick}> {props.label} </EditButtonStyled>
  );
};

export default EditTabsButton;