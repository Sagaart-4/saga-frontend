import styles from './ArtistsPage.module.scss';
import { artistMockData } from 'src/utils/mock/artistsMockData';
import Section from 'src/components/Section/Section';
import Carousel from 'src/components/Carousel/Carousel';
import ArtistCard from 'src/components/ArtistCard/ArtistCard';
import { MAIN_SECTION_ARTISTS_NUMBER } from 'src/utils/constants';
import { ReactNode } from 'react';
import { TArtStyleType } from 'src/utils/types';

const ArtistsPage = () => {
  const artistTitleByStyle: Map<TArtStyleType, string> = new Map([
    ['Абстракция', 'Абстракционисты'],
    ['Интерьерное искусство', 'Интерьерное искусство'],
    ['Концептуальное искусство', 'Концептуалисты'],
    ['Минимализм', 'Минималисты'],
    ['Фигуративное искусство', 'Фигуративисты'],
    ['Экспрессионизм', 'Экспрессионисты'],
    ['Pop Art', 'Pop Art'],
    ['Street Art', 'Street Art'],
  ]);

  const getArtistsSectionsLayout = (map: Map<TArtStyleType, string>) => {
    const sectionsArray: ReactNode[] = [];
    map.forEach((title, style) => {
      const currentStyleArtist = artistMockData.filter(
        (item) => item.personalStyle === style
      );
      sectionsArray.push(
        <Section title={title} headerH3 smallGap key={style}>
          <Carousel slidesToShow={4}>
            {currentStyleArtist
              .slice(0, MAIN_SECTION_ARTISTS_NUMBER)
              .map((item) => (
                <ArtistCard item={item} key={item.artistId} />
              ))}
          </Carousel>
        </Section>
      );
    });

    return sectionsArray;
  };

  return (
    <main className={styles.artistsPage}>
      <h2 className={styles.title}>Художники</h2>
      {getArtistsSectionsLayout(artistTitleByStyle)}
    </main>
  );
};

export default ArtistsPage;
