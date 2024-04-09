import { useEffect, useState } from 'react';
import './App.css';
import { getUnsplashImages } from './api/unsplash-api';
import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import LoadMoreBtn from './components/loadMoreBtn/LoadMoreBtn';
import ImageModal from './components/imageModal/ImageModal';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const data = await getUnsplashImages(searchValue, page);
        const res = data.results;
        console.log(res);
        setImages(prevImages => [...prevImages, ...res]);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [searchValue, page]);

  const handleSearch = async inputValue => {
    setSearchValue(inputValue);
    setPage(1);
    setImages([]);
  };

  const onLoadMoreBtnClick = async () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {isError ? <ErrorMessage /> : <ImageGallery imageArray={images} />}
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={onLoadMoreBtnClick} />}
      <ImageModal imageArray={images} isOpen={isOpen} />
    </>
  );
}

export default App;
