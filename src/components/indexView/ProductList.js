import Product from "./Product";
import ShopData from "../../db-mock/shop_data";
import './../../styles/indexView.css'

function ProductList() {

  function renderProducts(arr) {
    return arr.map(product =>
      <Product
        key={product.id}
        productId={product.id}
        name={product.productName}
        image={product.productImage}
        description={product.productDescription}
        price={product.price}
      />)
  }

  return (
    <div className="ProductList">
      {renderProducts(ShopData.products)}
    </div>
  );
}

export default ProductList;