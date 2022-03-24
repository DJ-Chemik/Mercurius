import ProductBlock from "./ProductBlock";
import { ProductProps } from "./ProductBlock";
import { ProductViewList } from "./ProductView.styled";

interface ProductSectorProps {
  items: Array<ProductProps>;
}

const Products = (props: ProductSectorProps) => {
  return (
    <div>
      <p>Produkty</p>
      <ProductViewList>
        {props.items.map((company: ProductProps) => (
          <ProductBlock
            key={company.key}
            title={company.title}
            img_src={company.img_src}
          />
        ))}
      </ProductViewList>
    </div>
  );
};

export default Products;
