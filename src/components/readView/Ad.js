import AdActions from "./../../reflux/actions/AdActions";
import { useNavigate } from "react-router-dom";

function Ad({ id, header, image, description, productId }) {
  const navigate = useNavigate();

  return (
    <div className="Ad">
      <header>
        <div>
          <div>
            <img
              src="https://admockups.com/images/facebook.png"
              alt="fb-logo"
            />
          </div>
          <div className="text-top">
            <p>SportingGoods.com</p>
            <p>Sponsored</p>
          </div>
        </div>
        <div className="text-bottom">{header}</div>
      </header>
      <div className="ad-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="fb-cta">
        <div className="headline">
          <div>SportingGoods.com</div>
          <div>{header}</div>
          <div>{description}</div>
        </div>
        <div>
          <button>BUY NOW</button>
        </div>
      </div>
      <div className="fb-actions">
        <button className="like">Like</button>
        <button className="comment">Comment</button>
        <button className="share">Share</button>
      </div>
      <div className="btn-container">
        <button
          onClick={function () {
            AdActions.setSelectedAd(id);
            navigate(`/ad/edit/${productId}`);
          }}
        >
          Update
        </button>
        <button
          className="btn-danger"
          onClick={function () {
            AdActions.setSelectedAd(id);
            AdActions.toggleDeleteModal();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Ad;
