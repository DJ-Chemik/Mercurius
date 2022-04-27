import axios from "axios";
import {
  ButtonStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
} from "./AuctionInput.styled";
import { isEmpty } from "../../App/SalesArea/SalesArea";
import { useState } from "react";

const DeleteProduct = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    id: true,
  });

  const deleteProductHandler = (event: any) => {
    event.preventDefault();

    const enteredId = event.target.elements.id.value;

    const enteredIdIsValid = !isEmpty(enteredId);

    setFormInputsValidity({
      id: enteredIdIsValid,
    });

    if (enteredIdIsValid) {
      axios.delete("http://localhost:4000/products/" + enteredId, {});
    }
  };

  return (
    <div>
      <FormStyled onSubmit={deleteProductHandler}>
        <div>
          <LabelStyled htmlFor="name">Product Id</LabelStyled>
          <InputStyled type="text" name="id" />
          {!formInputsValidity.id && <p>Please enter a valid id!</p>}
        </div>
        <div>
          <ButtonStyled>Confirm</ButtonStyled>
        </div>
      </FormStyled>
    </div>
  );
};

export default DeleteProduct;
