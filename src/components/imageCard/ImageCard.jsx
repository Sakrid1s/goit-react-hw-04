const ImageCard = ({ imageArray }) => {
  const { urls, description } = imageArray;
  const { small } = urls;
  return (
    <div>
      <img src={small} alt={description} />
    </div>
  );
};

export default ImageCard;
