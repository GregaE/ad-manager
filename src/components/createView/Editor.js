import Ad from "../readView/Ad";
import "./../../styles/createView.css";
import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { storage } from "../utils/firebaseConfig";

function Editor() {

  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams();

  const [header, setHeader] = useState(false);
  const [description, setDescription] = useState(false);
  const [image, setImage] = useState(false);

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

  function handleSubmit(e) {
    e.preventDefault();

    if (location.pathname.includes('edit')) {
      console.log('edit')

    }
    else if (location.pathname.includes('create')) {
      console.log('create')
    }

    // navigate back to adlist
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