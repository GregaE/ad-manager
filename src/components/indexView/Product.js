import { Link } from "react-router-dom";

function Product({ productId, name, image, description, price }) {
  return (
    <div className="Product">
      <Link to={{
        state: { debug: 'debug'},
        pathname: `/adList/${productId}`
        }}>
        <div
          className="item-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div>
          <div>{name}</div>
          <div>{description}</div>
          <div>{price}</div>
        </div>
      </Link>
    </div>
  );
}

export default Product;