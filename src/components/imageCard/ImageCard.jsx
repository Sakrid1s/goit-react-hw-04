const ImageCard = ({ imageArray, onImgClick }) => {
  const { urls, description } = imageArray;
  const { small, regular } = urls;
  const handleClick = () => {
    onImgClick(regular);
  };
  return (
    <div>
      <img src={small} alt={description} onClick={handleClick} />
    </div>
  );
};

export default ImageCard;
