import { useParams } from "react-router-dom";
import "./../../styles/readView.css"
import AdActions from "./../../reflux/actions/AdActions";
import Ad from "./Ad";

function AdList({ adList }) {

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
      {renderAds(adList)}
    </div>
  );
}

export default AdList;