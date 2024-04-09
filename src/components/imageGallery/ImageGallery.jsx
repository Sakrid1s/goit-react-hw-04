import ImageCard from '../imageCard/ImageCard';

const ImageGallery = ({ imageArray }) => {
  return (
    <div>
      <ul>
        {
          imageArray.map(img => (
            <li key={img.id}>
              <ImageCard imageArray={img} />
            </li>
          )) /* Набір елементів списку із зображеннями */
        }
      </ul>
    </div>
  );
};

export default ImageGallery;
