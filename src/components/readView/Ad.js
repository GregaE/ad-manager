function Ad( { id, header, image, description, productId } ) {
  return (
    <div className="Ad">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div>
        <div>{header}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default Ad;