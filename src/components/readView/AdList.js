import { useParams, useNavigate } from "react-router-dom";
import "./../../styles/readView.css"
import AdActions from "./../../reflux/actions/AdActions";
import Ad from "./Ad";


function AdList({ adList }) {

  const navigate = useNavigate();

  const { productId } = useParams();

  function renderAds(arr) {
    return arr.filter(ad => ad.productId === productId).map(ad =>
      <Ad
        key={ad.id}
        id={ad.id}
        header={ad.header}
        image={ad.image}
        description={ad.description}
        productId={productId}
      />)
  }

  return (
    <div className="AdList">
      <button onClick={() => navigate("/")}>Home</button>
      {renderAds(adList)}
    </div>
  );
}

export default AdList;