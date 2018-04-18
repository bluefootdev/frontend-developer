import ProductThumb from "./product-thumb";
import ProductInfos from "./product-info";


const Product = (props) => (
  <div>
    <ProductThumb {...props} />
    <ProductInfos {...props} />
  </div>
);

export default Product;
