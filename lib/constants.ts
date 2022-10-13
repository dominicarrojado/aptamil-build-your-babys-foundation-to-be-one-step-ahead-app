import { getAssetUrl } from './assets';
import { Route } from './types';

export const SITE_NAME = 'Dominic Arrojado';
export const PROJECT_TITLE =
  "Aptamil Build Your Baby's Foundation To Be One Step Ahead";
export const MAIN_AUTHOR = 'Dominic Arrojado';
export const MAIN_TITLE = `${PROJECT_TITLE} | ${SITE_NAME}`;
export const MAIN_DESC =
  'Unlock the nutrients needed for Brain Development and Natural Defences! Attractive Prizes up for grabs! A trip to New Zealand worth $5000 & 9 months of Aptamil products worth $2900. Join Now!';
export const MAIN_ORIGIN = 'https://dominicarrojado.com';
export const MAIN_PATH =
  '/aptamil-build-your-babys-foundation-to-be-one-step-ahead-app/';
export const MAIN_URL = `${MAIN_ORIGIN}${MAIN_PATH}`;
export const META_IMAGE = `${MAIN_URL}images/screenshot.png`;
export const META_IMAGE_WIDTH = 1197;
export const META_IMAGE_HEIGHT = 627;
export const META_IMAGE_ALT =
  'Unlock the nutrients needed for Brain Development and Natural Defences! Attractive Prizes up for grabs! A trip to New Zealand worth $5000 & 9 months of Aptamil products worth $2900. Join Now!';
export const META_IMAGE_TYPE = 'image/png';

export const FONTS = [
  'Mairy-Black',
  'Mairy-Bold',
  'Mairy-ExtraBold',
  'Mairy-Light',
  'Mairy-Regular',
  'KG-Happy-Bold',
  'KG-Happy-Regular',
];

export const MENU_ITEMS = [
  {
    path: Route.HOME,
    title: 'Home',
  },
  {
    path: Route.NATURAL_DEFENCES,
    title: 'Natural Defences',
  },
  {
    path: Route.BRAIN_DEVELOPMENT,
    title: 'Brain Development',
  },
  {
    path: Route.HOW_TO_WIN,
    title: 'How to Win',
  },
  {
    path: Route.TEST_YOUR_KNOWLEDGE,
    title: 'Test your Knowledge',
  },
];

export const BACKGROUND_IMAGES = [
  {
    path: Route.HOME,
    src: getAssetUrl('images/bg-space-1.png'),
  },
  {
    path: Route.NATURAL_DEFENCES,
    src: getAssetUrl('images/bg-space-2.png'),
  },
  {
    path: Route.BRAIN_DEVELOPMENT,
    src: getAssetUrl('images/bg-space-3.png'),
  },
  {
    path: Route.HOW_TO_WIN,
    src: getAssetUrl('images/bg-space-4.png'),
  },
  {
    path: Route.TEST_YOUR_KNOWLEDGE,
    src: getAssetUrl('images/bg-space-5.png'),
  },
  {
    path: Route.WIN,
    src: getAssetUrl('images/bg-space-6.png'),
  },
  {
    path: Route.UPLOAD,
    src: getAssetUrl('images/bg-space-7.png'),
  },
];
