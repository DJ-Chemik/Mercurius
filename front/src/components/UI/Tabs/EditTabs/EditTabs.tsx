import { useState } from 'react';
import { PackageData } from '../../../App/Help/Help';
import { EditPageStyled, EditTabsButtonStyled, EditTabsInputStyled, EditTabsInputWideStyled } from './EditTabs.styled';

const EditTabs = (props: any) => {
  console.log(props);
  const [state, setState] = useState<PackageData>(props.location.state.element);
  console.log(state);
  const handleChangeContent = (e : any) => {
    setState({ id: state.id, name: e.target.value, content: state.content });
  }

  const handleChangeName = (e : any) => {
    setState({ id: state.id, name: state.name, content: e.target.value });
  }

  const updateElement = (e: React.FormEvent) => {
    e.preventDefault();

    if (state.name === "" || state.content === "") {
      alert("Wypelnij wszystkie pola!");
      return;
    }

    props.updateElementHandler(state);
    props.history.push("/help");

  };
  return (
    <EditPageStyled>
      <form onSubmit={updateElement}>
        Name:
        <EditTabsInputStyled 
          type="text"
          name="name"
          placeholder='Name'
          value={state.name}
          onChange={(e) => handleChangeContent(e)} 
          />

        Content:
        <EditTabsInputWideStyled
          name="content"
          placeholder='Content'
          value={state.content}
          contentEditable='true'
          onChange={(e) => handleChangeName(e)} 
          />

        <EditTabsButtonStyled>Edit</EditTabsButtonStyled>

      </form>
    </EditPageStyled>
  )
}

export default EditTabs;