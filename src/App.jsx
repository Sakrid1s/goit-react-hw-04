import { useEffect, useState } from 'react';
import './App.css';
import { getUnsplashImages } from './api/unsplash-api';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setImage([]);
        setLoading(true);
        const data = await getUnsplashImages(searchValue, page);
        const [results] = data;
        if (results.length === 1) {
          setIsError(true); // поставить помилку через бібліотеку
        }
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
  };
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
    </>
  );
}

export default App;
