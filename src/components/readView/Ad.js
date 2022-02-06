function Ad( { id, header, image, description, productId } ) {
  return (
    <div className="Ad">
      <header>
        <div>
          <div>
            <img src="https://admockups.com/images/facebook.png" alt='fb-logo'/>
          </div>
          <div className="text-top">
            <p>SportingGoods.com</p>
            <p>Sponsored</p>
          </div>
        </div>
        <div className="text-bottom">
          {header}
        </div>
      </header>
      <div
        className="ad-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="fb-cta">
        <div className="headline">
          <div>SportingGoods.com</div>
          <div>{header}</div>
          <div>{description}</div>
        </div>
        <div>
          <button>BUY NOW</button>
        </div>
      </div>
      <div className="fb-actions">
        <button class='like'>Like</button>
        <button class='comment'>Comment</button>
        <button class='share'>Share</button>
      </div>
    </div>
  );
}

export default Ad;