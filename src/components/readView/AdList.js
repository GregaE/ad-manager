import { useParams, useNavigate } from "react-router-dom";
import "./../../styles/readView.css";
import { motion } from "framer-motion";
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
    <motion.div
      className="primary-view read-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="primary-actions read-actions">
        <h1>Select an ad to update or create a new one</h1>
        <div>
          <button onClick={() => navigate(`/ad/create/${productId}`)}>
            Create new
          </button>
          <button onClick={() => navigate("/")}>return home</button>
        </div>
      </div>
      <div className="primary-content AdList">{renderAds(adList)}</div>
    </motion.div>
  );
}

export default AdList;
