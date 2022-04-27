import axios from 'axios';
import { ButtonStyled, FormStyled, LabelStyled, InputStyled, SelectStyled } from './AuctionInput.styled';
import { isEmpty } from '../../App/SalesArea/SalesArea';
import { useState } from 'react';

const AddAuction = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    productId: true
  });
  
  const addAuctionHandler = (event:any) => {
    event.preventDefault();

    let enteredName = event.target.elements.name.value
    let enteredPublished = event.target.elements.published.value
    let enteredProductId = event.target.elements.productId.value

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredProductIdIsValid = !isEmpty(enteredProductId);

    setFormInputsValidity({
      name: enteredNameIsValid,
      productId: enteredProductIdIsValid
    });

    if(enteredPublished==="true"){
      enteredPublished=true
    } else {
      enteredPublished=false
    }

    if (enteredNameIsValid && enteredProductIdIsValid) {
      enteredProductId = parseInt(enteredProductId)
      axios.post('http://localhost:4000/auctionsites', {
      name: enteredName,
      published: enteredPublished,
      products: {
        connect: [
          {
          id: enteredProductId
          }
        ]
      }
    })
    }
};

  return (
    <div>
    <FormStyled onSubmit={addAuctionHandler}>
      <div>
        <LabelStyled htmlFor='name'>Auction Site Name</LabelStyled>
        <InputStyled type='text' name='name'/>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        <LabelStyled htmlFor='name'>Published</LabelStyled>
        <SelectStyled name='published'>
          <option value="true">True</option>
          <option value="false">False</option>
        </SelectStyled>
        <LabelStyled htmlFor='name'>Product's Id to assign</LabelStyled>
        <InputStyled type='text' name='productId'/>
        {!formInputsValidity.productId && <p>Please enter a valid id!</p>}
      </div>
      <div>
        <ButtonStyled>Confirm</ButtonStyled>
      </div>
    </FormStyled>
  </div>
  );
};


export default AddAuction;