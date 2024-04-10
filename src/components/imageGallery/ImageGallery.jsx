import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ imageArray, onImgClick }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {imageArray.map(img => (
          <li key={img.id} className={css.galleryImg}>
            <ImageCard imageArray={img} onImgClick={onImgClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
