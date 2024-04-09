import { useEffect, useState } from 'react';
import './App.css';
import { getUnsplashImages } from './api/unsplash-api';
import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import Loader from './components/loader/Loader';

function App() {
  const [image, setImage] = useState([]);
  const [page] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setImage([]);
        setLoading(true);
        const data = await getUnsplashImages(searchValue, page);
        const res = data.results;
        console.log(res);
        setImage(res);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [searchValue, page]);

  const handleSearch = async inputValue => {
    setSearchValue(inputValue);
  };
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <ImageGallery imageArray={image} />
      {loading && <Loader />}
    </>
  );
}

export default App;
