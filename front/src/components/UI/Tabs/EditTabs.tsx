import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PackageData } from '../../App/Help/Help';
import './Tabs.styled.ts';

const EditTabs = (props: any) => {
  console.log(props.location.state.element);

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

    //TO BE IMPLEMENTED

  };
  return (
    <div>
      <h2>Edit Element</h2>

      <form onSubmit={updateElement}>
        <input type="text" 
        name="name" 
        placeholder='Name' 
        value={state.name} 
        onChange={(e) => setState({ id: state.id, name: e.target.value, content: state.content })} />

        <input type="text" 
        name="name" 
        placeholder='Name' 
        value={state.content} 
        onChange={(e) => setState({ id: state.id, name: state.name, content: e.target.value })} />

        <button>Edit</button>
      </form>
    </div>
  )
}

export default EditTabs;