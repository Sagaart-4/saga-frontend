import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText';
import styles from './RegistrationForm.module.scss';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import * as yup from 'yup';
import {
  CUSTOMER_ROLE,
  DEFAULT_ROUTE,
  PASSWORD_REGEX,
  SELLER_ROLE,
} from 'src/utils/constants';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { register } from 'src/api/api';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  fetchCurrentUser,
  setIsLoggedIn,
} from 'src/service/slices/currentUserSlice';
import {
  getTargetUrl,
  setIsAuthModalOpen,
} from 'src/service/slices/modalsSlice';
import { useNavigate } from 'react-router-dom';
import { fetchFavoriteProducts } from 'src/service/slices/productsSlice';
import { fetchFavoriteArtists } from 'src/service/slices/artistsSlice';

const registrationSchema = yup.object({
  email: yup
    .string()
    .required('Введите email')
    .email('Введен некорректный email адрес'),
  password: yup
    .string()
    .required('Введите пароль')
    .matches(PASSWORD_REGEX, 'Пароль содержать только латниские буквы и цыфры')
    .min(8, 'Пароль должен содержать минимум 8 символов'),
  passwordConfirmation: yup
    .string()
    .required('Введите пароль повторно')
    .test('password-should-match', 'Пароли не совпадают', function (value) {
      return this.parent.password === value;
    }),
  isSeller: yup.boolean().required(),
});

type RegistrationInputs = {
  email: string;
  password: string;
  passwordConfirmation: string;
  isSeller: boolean;
};

const RegistrationForm = () => {
  const navigate = useNavigate();
  const targetUrl = useAppSelector(getTargetUrl);
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationInputs>({
    mode: 'all',
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      isSeller: false,
    },
  });
  const requestError = '';

  const onSubmit: SubmitHandler<RegistrationInputs> = (data) => {
    register()
      .then(() => {
        localStorage.setItem(
          'jwt',
          data.isSeller ? SELLER_ROLE : CUSTOMER_ROLE
        );
        dispatch(fetchCurrentUser(data.isSeller));
        dispatch(fetchFavoriteProducts());
        dispatch(fetchFavoriteArtists());
      })
      .then(() => {
        dispatch(setIsLoggedIn(true));
        dispatch(setIsAuthModalOpen(false));
        setTimeout(() => {
          navigate(data.isSeller ? DEFAULT_ROUTE : targetUrl);
        });
      });
  };

  return (
    <form
      className={styles.registrationForm}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      spellCheck={false}
    >
      <fieldset className={styles.inputs}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputTypeText
              label="Email"
              type="text"
              error={errors.email?.message}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputTypeText
              label="Пароль"
              type="password"
              error={errors.password?.message}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="password"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputTypeText
              label="Повторите пароль"
              type="password"
              error={errors.passwordConfirmation?.message}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="passwordConfirmation"
        />
        <div className={styles.checkbox}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <input
                type="checkbox"
                className={styles.checkboxInput}
                id="seller"
                onBlur={onBlur}
                onChange={onChange}
                checked={value}
              />
            )}
            name="isSeller"
          />
          <label htmlFor="seller" className={styles.checkboxLabel}>
            Зарегистрироваться как продавец
          </label>
        </div>
      </fieldset>
      <p className={styles.requestError}>{requestError}</p>
      <SolidButton type="submit" disabled={!isValid}>
        Зарегистрироваться
      </SolidButton>
      <p className={styles.agreement}>
        Нажимая на эту кнопку, я даю своё согласие ООО «Сагаарт» на обработку
        моих персональных данных согласно 152-ФЗ от 27.07.06
      </p>
    </form>
  );
};

export default RegistrationForm;
