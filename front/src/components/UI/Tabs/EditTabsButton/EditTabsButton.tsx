import { EditButtonStyled } from './EditTabsButton.styled';
import './EditTabsButton.styled.ts';

const EditTabsButton = (props: { label: string}) => {
  return(
    <EditButtonStyled> {props.label} </EditButtonStyled>
  );
};

export default EditTabsButton;