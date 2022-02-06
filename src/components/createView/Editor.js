import Ad from "../readView/Ad";
import "./../../styles/createView.css";
import { useState } from "react";

function Editor() {

  const [header, setHeader] = useState(false);
  const [description, setDescription] = useState(false);
  const [image, setImage] = useState(false);

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
      <div className="pictures-container">
        <div>
          <progress value={progress} max="100" />
        </div>
        <div id="fb-picture">
          <input
            type="file"
            name="picture"
            onChange={(e) => dispatch(setImage(e))}
          />
        </div>
        <div>
          <img
            className="pet-picture"
            src={url || "https://www.turnkeytec.com/wp-content/uploads/2020/07/placeholder-image-400x300.jpg"}
            alt="firebase-pic"
          />
        </div>
        <button className="pictures-button" onClick={(e) => handleUpload(e)}>
          Upload Picture
        </button>
      </div>
        <input onChange={(e) => setHeader(e.target.value)}></input>
        <input onChange={(e) => setHeader(e.target.value)}></input>
      </form>
    </div>
  );
}

export default Editor;