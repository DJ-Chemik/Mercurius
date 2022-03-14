import React from "react";
import { useState } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const HelpAreaInput = () => {
  const [charInput, setCharInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const MAX_CHARS = 20
  const MAX_VALUE = "1000"
  const chars_left = MAX_CHARS - charInput.length;
  
  const checkIfNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(event.key)) {
      return event.preventDefault();
    }
  }

  const checkIfValid = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= Number(MAX_VALUE)) {
      return setNumberInput(e.target.value);
    }
  }
  
  return (
    <div>
      <h1>Custom Input</h1>
      <form>
        <label>Podaj wartość z zakresu [1,1000]:</label>
          <Input
            type="number"
            min="1"
            max={MAX_VALUE}
            value = {numberInput}
            onChange = {(e) => checkIfValid(e)}
            onKeyPress={() => checkIfNumber}
          />
        <label>Dane tekstowe:</label>
          <Input
            type="text"
            defaultValue = {charInput} 
            maxLength={20}
            onChange={(e) => setCharInput(e.target.value)} 
          />
        <p>Pozostało { chars_left } znaków</p>
      </form>
      <Button title = "Wyślij" />
    </div>
  );
}

export default HelpAreaInput;