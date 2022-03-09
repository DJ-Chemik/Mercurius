import { useState } from 'react';
import { PackageData } from '../../../App/Help/Help';
import { EditTabsButtonStyled, EditTabsInputStyled, EditTabsInputWideStyled} from './EditTabs.styled';

const EditTabs = (props: any) => {
  //destructure the element
  const [state, setState] = useState<PackageData>(props.location.state.element);

  const updateElement = (e: any) => {
    e.preventDefault();

    if (state.name === "" || state.content === "") {
      alert("Wypelnij wszystkie pola!");
      return;
    }

    props.updateElementHandler(state);
    props.history.push("/help");

  };
  return (
    <div>
      <form onSubmit={updateElement}>
        Name:
        <EditTabsInputStyled type="text" 
        name="name" 
        placeholder='Name' 
        value={state.name} 
        onChange={(e) => setState({ id: state.id, name: e.target.value, content: state.content })} />

        Content:
        <EditTabsInputWideStyled 
        name="content" 
        placeholder='Content' 
        value={state.content}
        contentEditable='true'
        onChange={(e) => setState({ id: state.id, name: state.name, content: e.target.value })} />

        <EditTabsButtonStyled>Edit</EditTabsButtonStyled>

      </form>
    </div>
  )
}

export default EditTabs;