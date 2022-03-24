import { ProductFilterStyle } from "./ProductView.styled";

interface ProductsFilterProps {
  onChangeFilter: (arg0: string) => void;
  value: string;
}

interface HandlerProps {
  target: { value: string };
}

const ProductFilter = (props: ProductsFilterProps) => {
  const dropdownChangeHandler = (event: HandlerProps) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <ProductFilterStyle value={props.value} onChange={dropdownChangeHandler}>
      <option value="Products">Products</option>
      <option value="Auctions">Auctions</option>
      <option value="Both">Both</option>
    </ProductFilterStyle>
  );
};

export default ProductFilter;
