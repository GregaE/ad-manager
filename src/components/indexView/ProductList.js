import "./../../styles/indexView.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import ShopData from "../../db-mock/shop_data";
import Product from "./Product";
import SuccessModal from "../elements/SuccessModal";

function ProductList() {
  const location = useLocation();
  const [successModal, toggleSuccess] = useState(false);

  function renderProducts(arr) {
    return arr.map((product) => (
      <Product
        key={product.id}
        productId={product.id}
        name={product.productName}
        image={product.productImage}
        description={product.productDescription}
        price={product.price}
      />
    ));
  }

  useEffect(() => {
    if (location.state === "Item deleted") {
      toggleSuccess(true);
      setTimeout(() => {
        toggleSuccess(false);
      }, 2500);
    }
  }, [toggleSuccess, location.state]);

  return (
    <div className="indexView">
      <AnimatePresence>
        {successModal && (
          <SuccessModal content={"The ad has been deleted successfully"} />
        )}
      </AnimatePresence>
      <div className="indexActions">
        <h1>Select a product to continue</h1>
      </div>
      <div className="ProductList">
        {renderProducts(ShopData.products)}
      </div>
    </div>
  );
}

export default ProductList;
