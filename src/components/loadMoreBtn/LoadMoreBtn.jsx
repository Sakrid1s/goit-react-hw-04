import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.loadMoreBtnContainer}>
      <button type="click" onClick={onClick} className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
