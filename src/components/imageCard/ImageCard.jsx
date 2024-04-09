const ImageCard = ({ arrayImage }) => {
  const { urls, description } = arrayImage;
  const { full, small, regular } = urls;
  return (
    <div>
      <img src={small} alt={description} />
    </div>
  );
};

export default ImageCard;
