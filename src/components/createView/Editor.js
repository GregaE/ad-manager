import Ad from "../readView/Ad";
import "./../../styles/createView.css";
import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { storage } from "../utils/firebaseConfig";
import AdActions from "../../reflux/actions/AdActions";

function Editor() {

  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams();

  const [header, setHeader] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!header) {
      alert("Please choose a headline for your add")
    }
    else if (!description) {
      alert("Please choose a description for your add")
    }
    else if (!image) {
      alert("Please choose a description for your add")
    }
    else if (location.pathname.includes('edit')) {
      console.log('edit')
      AdActions.createAd(header, description, image, productId)
    }
    else if (location.pathname.includes('create')) {
      console.log('create')
      AdActions.createAd(header, description, image, productId)
    }

    navigate(`/adList/${productId}`)
  }

  const handleImageUpload = (e) => {
    const target = e.target;
    const chosenImage = target.files[0];

    if (chosenImage) {
      const uploadTask = storage.ref(`images/${chosenImage.name}`).put(chosenImage);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(chosenImage.name)
            .getDownloadURL()
            .then((url) => {
              setImage(url);
            });
        }
      );
    }
  }

  return (
    <div className="Editor">
      <div className="ad-preview">
        <h1>Preview</h1>
        <Ad
          header={header}
          description={description}
          image={image}
        />
      </div>
      <form id="adForm" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/gif, image/png, image/jpeg, image/jpg"
          name="ad-image"
          onChange={(e) => handleImageUpload(e)}
        />
        <input name="ad-header" onChange={(e) => setHeader(e.target.value)}/>
        <textarea name="ad-description" onChange={(e) => setDescription(e.target.value)}/>
        <button type="submit" form="adForm">Submit</button>
      </form>
    </div>
  );
}

export default Editor;