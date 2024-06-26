import styles from './NotFoundPage.module.scss';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import { DEFAULT_ROUTE } from 'src/utils/constants';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.notFoundPage}>
      <div className={styles.notFoundPage__content}>
        <h1 className={styles.notFoundPage__title}>
          К сожалению, такой страницы не найдено.
        </h1>
        <div className={styles.notFoundPage__button}>
          <SolidButton onClick={() => navigate(DEFAULT_ROUTE)}>
            Вернуться на главную
          </SolidButton>
        </div>
      </div>
      <div className={styles.notFoundPage__img}></div>
    </main>
  );
};

export default NotFoundPage;
