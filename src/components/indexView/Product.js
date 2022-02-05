function Product({ name, image, description, price }) {
  return (
    <div className="Product">

      <div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
      </div>
    </div>
  );
}

export default Product;