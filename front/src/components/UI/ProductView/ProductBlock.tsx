import { ProductViewStyle } from "./ProductView.styled";
import { ProductViewText } from "./ProductView.styled";

export interface ProductProps {
  key: string;
  title: string;
  img_src: string;
}

const ProductBlock = (props: ProductProps) => {
  return (
    <ProductViewStyle>
      <img src={props.img_src} alt="logo" width="240" height="120" />
      <ProductViewText>{props.title}</ProductViewText>
    </ProductViewStyle>
  );
};

export default ProductBlock;
