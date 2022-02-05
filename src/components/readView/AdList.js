import { useParams } from "react-router-dom";
import AdActions from "./../../reflux/actions/AdActions";
import Ad from "./Ad";

function AdList({ adList }) {

  const { productId } = useParams();

  function renderAds(arr) {
    return arr.map(ad =>
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
      <button onClick={() => AdActions.createAd("new", "my header", "description", "https://bestofreactjs.com/repo/reflux-refluxjs-react-code-design")}>hello</button>
    </div>
  );
}

export default AdList;