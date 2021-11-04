import Section from '../Section';
import SectionTitle from '../SectionTitle';
import SectionSubtitle from '../SectionSubtitle';
import SectionContent from '../SectionContent';
import AboutData from './AboutData';
import AboutImage from './AboutImage';
import AboutDescription from './AboutDescription';
import AboutInfo from './AboutInfo';
import AboutInfoItem from './AboutInfoItem';
import AboutButtons from './AboutButtons';
import ButtonCV from './ButtonCV';
import image from '../../assets/img/about.jpg';

const AboutSection = () => (
  <Section className="about" id="about">
    <SectionTitle>Sobre mi</SectionTitle>
    <SectionSubtitle>Introducci&oacute;n</SectionSubtitle>
    <SectionContent className="about__container container grid">
      <AboutImage src={image} alt="Rodrigo Mungo - Sobre mi" />
      <AboutData>
        <AboutDescription>
          Desarrollador Full Stack autodidacta, proactivo y entusiasta, con amplios conocimientos y años de experiencia, trabajando en tecnologías web, entregando trabajos de calidad.
        </AboutDescription>
        <AboutInfo>
          <AboutInfoItem
            title="05+"
            content={{ primary: 'Años', secondary: 'de experiencia' }}
          />
          <AboutInfoItem
            title="04+"
            content={{ primary: 'Proyectos', secondary: 'completados' }}
          />
          <AboutInfoItem
            title="02+"
            content={{ primary: 'Empresas', secondary: 'trabajaron' }}
          />
        </AboutInfo>
        <AboutButtons>
          <ButtonCV>Descargar CV</ButtonCV>
        </AboutButtons>
      </AboutData>
    </SectionContent>
  </Section>
);

export default AboutSection;
