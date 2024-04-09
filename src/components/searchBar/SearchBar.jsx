import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ handleSearch }) => {
  const notify = () => toast.error('Please, fill in the field');
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
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.formInput}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.formBtn}>
          Search
        </button>
        <Toaster position="top-right" />
      </form>
    </header>
  );
};

export default SearchBar;
