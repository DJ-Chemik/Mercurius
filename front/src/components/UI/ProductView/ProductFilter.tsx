import React from "react";
import { ProductFilterStyle } from "./ProductView.styled";

interface ProductsFilterProps {
  onChangeFilter: (value: string) => void;
  newValue: string;
}

const ProductFilter = (props: ProductsFilterProps) => {
  const dropdownChangeHandler = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <ProductFilterStyle value={props.newValue} onChange={dropdownChangeHandler}>
      <option value="Products">Products</option>
      <option value="Auctions">Auctions</option>
      <option value="Both">Both</option>
    </ProductFilterStyle>
  );
};

export default ProductFilter;
