import { FieldsetStyledWrapper } from "./ProductPrices.styled"
import ProductPricesFirstCol from "../../UI/ProductPricesFirstCol/ProductPricesFirstCol";
import ProductPricesSecondCol from "../../UI/ProductPricesSecondCol/ProductPricesSecondCol";

const ProductPrices = () => {
  return (
    <FieldsetStyledWrapper>
      <ProductPricesFirstCol />
      <ProductPricesSecondCol />
    </FieldsetStyledWrapper>
  )
}

export default ProductPrices