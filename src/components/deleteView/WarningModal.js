import './../../styles/deleteView.css';
import AdActions from '../../reflux/actions/AdActions';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

function WarningModal({ selectedAd }) {

  const navigate = useNavigate();

  return (
    <motion.div
      className="deleteView"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <div
        className="warning-modal"
      >
          <div className="icon-box">
            <i className="material-icons">&#xE5CD;</i>
          </div>
          <h2>Are you sure?</h2>
          <p>Do you really want to delete this ad?<br></br>This process cannot be undone.</p>
        <div className="btn-container">
          <button
            type="button"
            onClick={() => AdActions.toggleDeleteModal()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn-danger"
            onClick={ function() {
              AdActions.deleteAd(selectedAd);
              navigate("/",{ state: "Item deleted" })
              AdActions.toggleDeleteModal()
            }
          }
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default WarningModal;