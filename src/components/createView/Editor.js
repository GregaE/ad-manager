import Ad from "../readView/Ad";
import "./../../styles/createView.css";
import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { storage } from "../utils/firebaseConfig";
import AdActions from "../../reflux/actions/AdActions";

function Editor( { adList, selectedAd } ) {

  console.log(selectedAd)

  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams();

  const [header, setHeader] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (location.pathname.includes('create')) {
      if (!header) {
        alert("Please choose a headline for your add")
      }
      else if (!description) {
        alert("Please choose a description for your add")
      }
      else if (!image) {
        alert("Please choose a description for your add")
      }
      else {
        AdActions.createAd(header, description, image, productId)
      }
    }
    else if (location.pathname.includes('edit')) {
      console.log('edit')
      AdActions.updateAd(selectedAd, header, description, image, productId)
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

  useEffect(() => {
    if ((location.pathname.includes('edit'))) {
      const currentAd = adList.find(ad => ad.id === selectedAd);
      console.log(currentAd)
      setHeader(currentAd.header);
      setDescription(currentAd.description);
      setImage(currentAd.image)
    }
  },[location.pathname, adList, selectedAd, setHeader, setDescription, setImage ])

  return (
    <div className="Editor">
      <form id="adForm" onSubmit={handleSubmit}>
        <h1>Update Ad</h1>
        <div>
          <label for="ad-image">Image</label>
          <input
            type="file"
            accept="image/gif, image/png, image/jpeg, image/jpg"
            name="ad-image"
            onChange={(e) => handleImageUpload(e)}
          />
        </div>
        <div>
          <label for="ad-header">Heading</label>
          <input name="ad-header" onChange={(e) => setHeader(e.target.value)}/>
        </div>
        <div>
        <label for="ad-description">Description</label>
          <textarea name="ad-description" onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div class="submit-btn">
          <button type="submit" form="adForm">Submit</button>
        </div>
      </form>
      <div className="ad-preview">
        <h1>Ad Preview</h1>
        <Ad
          header={header}
          description={description}
          image={image}
        />
      </div>
    </div>
  );
}

export default Editor;