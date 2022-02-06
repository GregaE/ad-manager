import './../../styles/deleteView.css';
import AdActions from '../../reflux/actions/AdActions';
import { motion } from "framer-motion"

function WarningModal() {
  return (
    <motion.div
      className="deleteView"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween" }}
    >
      <div class="warning-modal">
        <div>
          <div class="icon-box">
            <i class="material-icons">&#xE5CD;</i>
          </div>
          <h4 class="modal-title">Are you sure?</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <p>Do you really want to delete your the ad? This process cannot be undone.</p>
        </div>
        <div class="btn-container">
          <button
            type="button"
            onClick={() => AdActions.toggleDeleteModal()}
          >
            Cancel
          </button>
          <button
            type="button"
            class="danger"
            onClick={() => AdActions.deleteAd()}
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default WarningModal;