import axios from "axios";
import {
  ButtonStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
} from "./AuctionInput.styled";
import { isEmpty } from "../../App/SalesArea/SalesArea";
import { useState } from "react";

const AddProduct = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    description: true,
    category: true,
    amount: true,
    price: true,
  });

  const addProductHandler = (event: any) => {
    event.preventDefault();

    const enteredName = event.target.elements.name.value;
    const enteredDescription = event.target.elements.description.value;
    const enteredCategory = event.target.elements.category.value;
    const enteredAmount = event.target.elements.amount.value;
    const enteredPrice = event.target.elements.price.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredDescriptionIsValid = !isEmpty(enteredDescription);
    const enteredCategoryIsValid = !isEmpty(enteredCategory);
    const enteredAmountIsValid = !isEmpty(enteredAmount);
    const enteredPriceIsValid = !isEmpty(enteredPrice);

    setFormInputsValidity({
      name: enteredNameIsValid,
      description: enteredDescriptionIsValid,
      category: enteredCategoryIsValid,
      amount: enteredAmountIsValid,
      price: enteredPriceIsValid,
    });

    if (enteredNameIsValid) {
      axios.post("http://localhost:4000/products", {
        name: enteredName,
        description: enteredDescription,
        category: enteredCategory,
        amount: parseInt(enteredAmount),
        price: parseFloat(enteredPrice),
      });
    }
  };

  return (
    <div>
      <FormStyled onSubmit={addProductHandler}>
        <div>
          <LabelStyled htmlFor="name">Product Name</LabelStyled>
          <InputStyled type="text" name="name" />
          {!formInputsValidity.name && <p>Please enter a valid name!</p>}
          <LabelStyled htmlFor="name">Description</LabelStyled>
          <InputStyled type="text" name="description" />
          {!formInputsValidity.description && (
            <p>Please enter a valid description!</p>
          )}
          <LabelStyled htmlFor="name">Category</LabelStyled>
          <InputStyled type="text" name="category" />
          {!formInputsValidity.category && (
            <p>Please enter a valid category!</p>
          )}
          <LabelStyled htmlFor="name">Amount</LabelStyled>
          <InputStyled type="text" name="amount" />
          {!formInputsValidity.amount && <p>Please enter a valid amount!</p>}
          <LabelStyled htmlFor="name">Price</LabelStyled>
          <InputStyled type="text" name="price" />
          {!formInputsValidity.price && <p>Please enter a valid price!</p>}
        </div>
        <div>
          <ButtonStyled>Confirm</ButtonStyled>
        </div>
      </FormStyled>
    </div>
  );
};

export default AddProduct;
