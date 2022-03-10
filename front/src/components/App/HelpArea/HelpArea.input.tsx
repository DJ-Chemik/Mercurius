import React from "react";
import { useState } from "react";
import Button from "../../UI/Button/Button";
import CustomInput from "../../UI/Input/Input";

const HelpAreaInput = () => {
  const [title, setTitle] = useState('');
  const [title1, setTitle1] = useState('');
  const chars = 20 - title.length;
  
  

  return (
    <div className="Question">
      <h1>Custom Input</h1>
      <form>
        <label>Podaj wartość z zakresu [1,1000]:</label>
        <CustomInput
          type="number"
          maxLength={20}
          min="1"
          max="1000"
          onChange={(e) => setTitle1(e.target.value)} 
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        
        <label>Dane tekstowe:</label>
        <CustomInput
          type="text"
          defaultValue = {title} 
          maxLength={20}
          onChange={(e) => setTitle(e.target.value)} 
        />
        <p>Pozostało { chars } znaków</p>
      </form>
      <Button title = "Wyślij" />
    </div>
  );
}

export default HelpAreaInput;