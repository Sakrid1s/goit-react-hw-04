import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const notify = () => toast.error('Bad request.');
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
