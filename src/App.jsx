import { useEffect, useState } from 'react';
import './App.css';
import { getUnsplashImages } from './api/unsplash-api';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setImage([]);
        setLoading(true);
        const data = await getUnsplashImages(search, page);
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
  }, [search, page]);
  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;
