import { EditButtonStyled } from './EditTabsButton.styled';
import './EditTabsButton.styled.ts';

interface propsData{
  label: string;
}

const EditTabsButton = (props: propsData) => {
  return(
    <EditButtonStyled> {props.label} </EditButtonStyled>
  );
};

export default EditTabsButton;