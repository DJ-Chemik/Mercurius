import axios from 'axios';
import { ButtonStyled, FormStyled, LabelStyled, InputStyled } from './AuctionInput.styled';
import { isEmpty } from '../../App/SalesArea/SalesArea';
import { useState } from 'react';


const UpdateAuction = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    id: true,
    name: true,
    productId: true
  });
  
  const updateAuctionHandler = (event:any) => {
    event.preventDefault();
  
    let enteredId = event.target.elements.id.value
    let enteredName = event.target.elements.name.value
    let enteredProductId = event.target.elements.productId.value
  
    const enteredIdIsValid = !isEmpty(enteredId);
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredProductIdIsValid = !isEmpty(enteredProductId);

    setFormInputsValidity({
      id: enteredIdIsValid,
      name: enteredNameIsValid,
      productId: enteredProductIdIsValid
    });
  
    if (enteredIdIsValid && enteredNameIsValid) {
      axios.put('http://localhost:4000/auctionsites/' + enteredId, {
        name: enteredName
    })
    }

    if (enteredIdIsValid && enteredProductIdIsValid) {
      enteredProductId = parseInt(enteredProductId)
      axios.put('http://localhost:4000/auctionsites/' + enteredId, {
        products: {
          connect: [
            {
            id: enteredProductId
            }
          ]
        }})
    }

  };

  return (
    <div>
    <FormStyled onSubmit={updateAuctionHandler}>
      <div>
        <LabelStyled htmlFor='name'>Auction Site Id</LabelStyled>
        <InputStyled type='text' name='id'/>
        {!formInputsValidity.name && <p>Please enter a valid id!</p>}
        <LabelStyled htmlFor='name'>New Auction Site Name</LabelStyled>
        <InputStyled type='text' name='name'/>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        <LabelStyled htmlFor='name'>New Product Id To Assign</LabelStyled>
        <InputStyled type='text' name='productId'/>
        {!formInputsValidity.name && <p>Please enter a valid product Id!</p>}
      </div>
      <div>
        <ButtonStyled>Confirm</ButtonStyled>
      </div>
    </FormStyled>
  </div>
  );
};


export default UpdateAuction;