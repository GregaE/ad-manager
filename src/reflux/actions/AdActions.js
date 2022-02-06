import Reflux from "reflux";

const AdActions = Reflux.createActions(
  [
    "createAd",
    "updateAd",
    "deleteAd",
    "toggleDeleteModal",
    "setSelectedAd"
  ]
);

export default AdActions;
