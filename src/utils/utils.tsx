import { TSubscribtionPeriodType } from './types';

/**
 * Splits a single product array into several product arrays for each column
 * @param products initial products array, array elements must be ReactNode
 * @param columnsNumber number of columns
 * @returns an array containing arrays of products(ReactNodes) for each column
 */
export const distributeProductsToColumns = (
  products: React.ReactNode[],
  columnsNumber: number
) => {
  const distrubutedProducts: React.ReactNode[][] = [];
  for (let i = 0; i < columnsNumber; i++) {
    distrubutedProducts.push([]);
  }

  products.forEach((product, index) => {
    for (let i = 0; i < columnsNumber; i++) {
      if (!((index + columnsNumber - i) % columnsNumber)) {
        distrubutedProducts[i].push(product);
      }
    }
  });
  return distrubutedProducts;
};

export const getPeriodWord = (value: TSubscribtionPeriodType = 1) => {
  switch (value) {
    case 12:
      return '1 год';
    case 6:
      return '6 месяцев';
    case 1:
    default:
      return '1 месяц';
  }
};
