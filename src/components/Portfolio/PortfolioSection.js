import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { UilAngleRightB, UilAngleLeftB } from '@iconscout/react-unicons'
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import SectionSubtitle from '../SectionSubtitle';
import SectionContent from '../SectionContent';
import PortfolioItem from './PortfolioItem';
import image1 from '../../assets/img/portfolio1.jpg';
import image2 from '../../assets/img/portfolio2.jpg';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

const PortfolioSection = () => {

  return (
    <Section className="portfolio" id="portfolio">
      <SectionTitle>Portafolio</SectionTitle>
      <SectionSubtitle>Trabajos m&aacute;s recientes</SectionSubtitle>
      <SectionContent className="portfolio__container container">
        <Swiper
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <PortfolioItem
              title="MercadoLibre en tus Apps"
              image={{
                src: image1,
                alt: 'MercadoLibre en tus Apps'
              }}
              button={{
                link: 'https://www.youtube.com/watch?v=8LfCEOzqhxc',
                label: 'Presentación'
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioItem
              title="Entrená con BeBlackfit"
              image={{ src: image2, alt: 'BeBlackfit' }}
            />
          </SwiperSlide>
          <div className="swiper-button-next">
            <UilAngleRightB className="swiper-portfolio-icon" />
          </div>
          <div className="swiper-button-prev">
            <UilAngleLeftB className="swiper-portfolio-icon" />
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </SectionContent>
    </Section>
  );
};

export default PortfolioSection;
