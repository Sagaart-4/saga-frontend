import prozepina from 'src/assets/mock/products/prozerpina.jpg';
import monaliza from 'src/assets/mock/products/monaliza.png';
import starnight from 'src/assets/mock/products/starnight.jpg';
import { IProductType } from '../types';
import { artistMockData } from './artistsMockData';

export const productsMockData: IProductType[] = [
  {
    productId: 1,
    titleArt: 'Портрет госпожи Лизы дель Джокондо ',
    orientalProduct: 'вертикальная',
    artist: artistMockData[0],
    estimatedPrice: 300000,
    forecastPrice: 330000,
    photoProduct: [monaliza],
    widthCm: 90,
    heightCm: 120,
    yearOfCreation: 1503,
    artMaterial: 'Масляные краски',
  },
  {
    productId: 2,
    titleArt: 'Прозерпина',
    orientalProduct: 'квадратная',
    artist: artistMockData[1],
    estimatedPrice: 120000,
    forecastPrice: 100000,
    photoProduct: [prozepina],
    widthCm: 80,
    heightCm: 120,
    yearOfCreation: 1533,
    artMaterial: 'Акрил, масло',
  },
  {
    productId: 3,
    titleArt: 'Портрет госпожи Лизы дель Джокондо',
    orientalProduct: 'вертикальная',
    artist: artistMockData[2],
    estimatedPrice: 300000,
    forecastPrice: 330000,
    photoProduct: [monaliza],
    widthCm: 90,
    heightCm: 120,
    yearOfCreation: 1503,
    artMaterial: 'Масляные краски',
  },
  {
    productId: 4,
    titleArt: 'Звёздная ночь',
    orientalProduct: 'горизонтальная',
    artist: artistMockData[3],
    estimatedPrice: 200000,
    forecastPrice: 220000,
    photoProduct: [starnight],
    widthCm: 120,
    heightCm: 80,
    yearOfCreation: 1403,
    artMaterial: 'Масляные краски',
  },
  {
    productId: 5,
    titleArt: 'Звёздная ночь',
    orientalProduct: 'горизонтальная',
    artist: artistMockData[4],
    estimatedPrice: 200000,
    forecastPrice: 220000,
    photoProduct: [starnight],
    widthCm: 120,
    heightCm: 80,
    yearOfCreation: 1403,
    artMaterial: 'Масляные краски',
  },
  {
    productId: 6,
    titleArt: 'Портрет госпожи Лизы дель Джокондо',
    orientalProduct: 'вертикальная',
    artist: artistMockData[2],
    estimatedPrice: 300000,
    forecastPrice: 330000,
    photoProduct: [monaliza],
    widthCm: 90,
    heightCm: 120,
    yearOfCreation: 1503,
    artMaterial: 'Масляные краски',
  },
  {
    productId: 7,
    titleArt: 'Прозерпина',
    orientalProduct: 'квадратная',
    artist: artistMockData[3],
    estimatedPrice: 120000,
    forecastPrice: 100000,
    photoProduct: [prozepina],
    widthCm: 80,
    heightCm: 120,
    yearOfCreation: 1533,
    artMaterial: 'Акрил, масло',
  },
  {
    productId: 8,
    titleArt: 'Портрет госпожи Лизы дель Джокондо',
    orientalProduct: 'вертикальная',
    artist: artistMockData[4],
    estimatedPrice: 300000,
    forecastPrice: 330000,
    photoProduct: [monaliza],
    widthCm: 90,
    heightCm: 120,
    yearOfCreation: 1503,
    artMaterial: 'Масляные краски',
  },
];
