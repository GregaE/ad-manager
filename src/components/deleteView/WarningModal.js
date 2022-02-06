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
        <div>
          <div className="icon-box">
            <i className="material-icons">&#xE5CD;</i>
          </div>
          <h4 className="modal-title">Are you sure?</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true"
            onClick={() => AdActions.toggleDeleteModal()}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>Do you really want to delete your the ad? This process cannot be undone.</p>
        </div>
        <div className="btn-container">
          <button
            type="button"
            onClick={() => AdActions.toggleDeleteModal()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="danger"
            onClick={ function() {
              AdActions.deleteAd();
              navigate("/",{ state: "Item deleted" })
              AdActions.toggleDeleteModal(selectedAd)
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