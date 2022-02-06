import Ad from "../readView/Ad";
import "./../../styles/createView.css";
import { useState } from "react";
import { storage } from "../utils/firebaseConfig";

function Editor() {

  const [header, setHeader] = useState(false);
  const [description, setDescription] = useState(false);
  const [image, setImage] = useState(false);

  const handleImage = (e) => {
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
      <form>
        <input
          type="file"
          accept="image/gif, image/png, image/jpeg, image/jpg"
          id="profileImgUpload"
          className="h-full w-full rounded-full opacity-0 cursor-pointer"
          name="image"
          onChange={(e) => handleImage(e)}
        />
        <input onChange={(e) => setHeader(e.target.value)}></input>
        <input onChange={(e) => setDescription(e.target.value)}></input>
      </form>
    </div>
  );
}

export default Editor;