import { UilMessage } from '@iconscout/react-unicons';
import Section from '../Section';
import SectionContent from '../SectionContent';
import HomeLinkedinLink from './HomeLinkedinLink';
import HomeGithubLink from './HomeGithubLink';
import HomeBlobImage from './HomeBlobImage';
import HomeScroll from './HomeScroll';
import HomeTitle from './HomeTitle';
import HomeSubtitle from './HomeSubtitle';
import HomeDescription from './HomeDescription';

import image from '../../assets/img/profile.png';

const HomeSection = () => (
  <Section className="home" id="home">
    <SectionContent className="home__container container grid">
      <div className="home__content grid">
        <div className="home__social">
          <HomeLinkedinLink userName="rodrigo-nicolás-mungo-86290591" />
          <HomeGithubLink userName="rnmungo" />
        </div>
        <HomeBlobImage image={image} />
        <div className="home__data">
          <HomeTitle>Hola, soy Rodrigo</HomeTitle>
          <HomeSubtitle>Desarrollador Fullstack</HomeSubtitle>
          <HomeDescription>
            Experiencia en diseño web y conocimiento en desarrollo backend, produciendo trabajos de calidad.
          </HomeDescription>
          <a href="#contact" className="button button--flex">
            Contactame <UilMessage className="button__icon" />
          </a>
        </div>
      </div>
      <HomeScroll label="Desplazarse hacia abajo" />
    </SectionContent>
  </Section>
);

export default HomeSection;
