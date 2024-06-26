import { TMinMaxFilterOption } from './types';

export const MAIN_SECTION_NEWS_NUMBER = 4;
export const PASSWORD_REGEX = /^[A-Za-z0-9]+$/;
export const PHONE_NUMBER_REGEX =
  /(\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
export const MAIN_SECTION_PRODUCTS_NUMBER = 8;
export const MAIN_SECTION_ARTISTS_NUMBER = 10;

export const CUSTOMER_ROLE = 'customer';
export const SELLER_ROLE = 'seller';

export const DEFAULT_ROUTE = '/';
export const NOT_FOUND_ROUTE = '/*';

// customer routes
export const CATALOG_ROUTE = '/catalog';
export const ARTISTS_ROUTE = '/artists';
export const NEWS_ROUTE = '/news';
export const CONSULTATION_ROUTE = '/consultation';
export const PRICE_ANALYTICS_ROUTE = '/priceanalytics';
export const CUSTOMER_PROFILE_ROUTE = '/profile';
export const CART_ROUTE = '/cart';
export const PLACE_ORDER_ROUTE = '/placeorder';
export const CUSTOMER_FAVORITE_PRODUCTS_ROUTE = '/favoriteproducts';
export const CUSTOMER_FAVORITE_ARTISTS_ROUTE = '/favoriteartists';
export const CUSTOMER_ORDERS_ROUTE = '/orders';
export const CUSTOMER_SUBSCRIPTION_ROUTE = '/subscription';

// seller routes
export const SELLER_GOODS_ROUTE = '/goods';
export const SELLER_ORDERS_ROUTE = '/orders';

// [title, value]
export const CATEGORY_FILTER_OPTIONS: Map<string, string> = new Map([
  ['Живопись', 'Живопись'],
  ['Графика', 'Графика'],
  ['Фотография', 'Фотография'],
  ['Digital', 'Digital'],
]);

// [title, value]
export const STYLE_FILTER_OPTIONS: Map<string, string> = new Map([
  ['Абстракция', 'Абстракция'],
  ['Интерьерное искусство', 'Интерьерное искусство'],
  ['Концептуальное искусство', 'Концептуальное искусство'],
  ['Минимализм', 'Минимализм'],
  ['Фигуративное искусство', 'Фигуративное искусство'],
  ['Экспрессионизм', 'Экспрессионизм'],
  ['Pop Art', 'Pop Art'],
  ['Street Art', 'Street Art'],
]);

// [title, value]
export const SIZE_FILTER_OPTIONS: Map<string, TMinMaxFilterOption> = new Map([
  ['Small (до 40 см)', { min: 0, max: 40 }],
  ['Medium (40 - 100 см)', { min: 40, max: 100 }],
  ['Large (100 - 160 см)', { min: 100, max: 160 }],
  ['Oversize (более 160 см)', { min: 160, max: 10000 }],
]);

// [title, value]
export const ORIENTATION_FILTER_OPTIONS: Map<string, string> = new Map([
  ['Вертикальная', 'вертикальная'],
  ['Горизонтальная', 'горизонтальная'],
  ['Квадратная', 'квадратная'],
]);

export const CHEAP_COST_KEY = 'до 20 000 ₽';
export const EXPENSIVE_COST_KEY = 'от 500 000 ₽';
// [title, value]
export const PRICE_FILTER_OPTIONS: Map<string, TMinMaxFilterOption> = new Map([
  [CHEAP_COST_KEY, { min: 0, max: 20000 }],
  ['20 000 - 50 000 ₽', { min: 20000, max: 50000 }],
  ['50 000 - 100 000 ₽', { min: 50000, max: 100000 }],
  ['100 000 - 200 000 ₽', { min: 100000, max: 200000 }],
  ['200 000 - 500 000 ₽', { min: 200000, max: 500000 }],
  [EXPENSIVE_COST_KEY, { min: 500000, max: 500000000000 }],
]);

export const PAINTING_CATEGORY_NAME = 'Живопись';
export const GRAPHIC_CATEGORY_NAME = 'Графика';
export const PHOTOGRAPHY_CATEGORY_NAME = 'Фотография';
export const DIGITAL_CATEGORY_NAME = 'Digital';

export const SAGA_ALL_RUSSIAN_PHONE = '+78001205250';
export const SAGA_MOSCOW_PHONE = '+74954562421';
export const SAGA_HELP_MAIL = 'help@sagaart.ru';

export const DEFAULT_VISIBLE_PRODUCTS = 12;
export const VISIBLE_PRODUCTS_INCREMENT = 6;
