import { TbError404 } from 'react-icons/tb';
import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.errorDiv}>
      <TbError404 className={css.errorImg} />
      <p className={css.errorMsg}>Oooop, something went wrong!</p>
    </div>
  );
};

export default ErrorMessage;
