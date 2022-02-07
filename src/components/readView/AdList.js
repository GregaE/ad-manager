import { useParams, useNavigate } from "react-router-dom";
import "./../../styles/readView.css";
import AdActions from "./../../reflux/actions/AdActions";
import Ad from "./Ad";

function AdList({ adList }) {
  const navigate = useNavigate();

  const { productId } = useParams();

  function renderAds(arr) {
    return arr
      .filter((ad) => ad.productId === productId)
      .map((ad) => (
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
