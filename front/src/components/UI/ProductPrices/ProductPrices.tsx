import { FieldsetStyledWrapper } from "./ProductPrices.styled"
import ProductPricesFirstCol from "../../UI/ProductPricesFirstCol/ProductPricesFirstCol";
import ProductPricesSecondCol from "../../UI/ProductPricesSecondCol/ProductPricesSecondCol";

const ProductPrices = (props: { amount: number; price: number; }) => {
  return (
    <FieldsetStyledWrapper>
      <ProductPricesFirstCol amount={props.amount}/>
      <ProductPricesSecondCol price={props.price}/>
    </FieldsetStyledWrapper>
  )
}

export default ProductPrices