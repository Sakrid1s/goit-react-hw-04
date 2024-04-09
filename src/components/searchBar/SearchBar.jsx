import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ handleSearch }) => {
  const notify = () => toast.error('Bad request.');
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.input.value;
    if (inputValue.trim() === '') {
      notify();
      form.reset();
      return;
    }
    handleSearch(inputValue);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="top-right" />
      </form>
    </header>
  );
};

export default SearchBar;
