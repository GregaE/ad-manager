import { useParams, useNavigate } from "react-router-dom";
import "./../../styles/readView.css";
import AdActions from "./../../reflux/actions/AdActions";
import Ad from "./Ad";

function AdList({ adList }) {
  const navigate = useNavigate();

  const { productId } = useParams();

  function renderAds(arr) {
    const filteredArr = arr.filter((ad) => ad.productId === productId)
    if (filteredArr.length <= 0)  {
      return <div class='no-ad-info'>No ads have yet been created for this product, click on 'Create new' to create an ad</div>
    }
    else {
      return filteredArr.map((ad) => (
        <Ad
          key={ad.id}
          id={ad.id}
          header={ad.header}
          image={ad.image}
          description={ad.description}
          productId={productId}
        />
      ));
    }
  }

  return (
    <div className="readView">
      <div className="readActions">
        <h1>Select an ad to update or create a new one</h1>
        <div>
          <button onClick={() => navigate(`/ad/create/${productId}`)}>
            Create new
          </button>
          <button onClick={() => navigate("/")}>return home</button>
        </div>
      </div>
      <div className="AdList">{renderAds(adList)}</div>
    </div>
  );
}

export default AdList;
