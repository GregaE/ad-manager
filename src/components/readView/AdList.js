import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./../../styles/readView.css";
import { AnimatePresence, motion } from "framer-motion";
import Ad from "./Ad";
import SuccessModal from "../elements/SuccessModal";


function AdList({ adList }) {

  const navigate = useNavigate();
  const { productId } = useParams();
  const location = useLocation();
  const [successModal, toggleSuccess] = useState(false);
  const [successMessage, setMessage] = useState("");

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

  useEffect(() => {
    if (location.state === "Item updated") {
      setMessage("updated")
      toggleSuccess(true);
      setTimeout(() => {
        toggleSuccess(false);
      }, 2500);
    }
    else if (location.state === "Item created") {
      setMessage("created")
      toggleSuccess(true);
      setTimeout(() => {
        toggleSuccess(false);
      }, 2500);
    }
  }, [toggleSuccess, location.state, setMessage]);

  return (
    <motion.div
      className="primary-view read-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <AnimatePresence>
        {successModal && (
          <SuccessModal content={`The ad has been ${successMessage} successfully`} />
        )}
      </AnimatePresence>
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
