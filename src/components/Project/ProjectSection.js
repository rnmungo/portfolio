import { UilMessage } from '@iconscout/react-unicons';
import Section from '../Section';
import SectionContent from '../SectionContent';
import image from '../../assets/img/project.png';

const ProjectSection = () => (
  <Section className="project">
    <div className="project__bg">
      <SectionContent className="project__container container grid">
        <div className="project__data">
          <h2 className="project__title">¿Ten&eacute;s un nuevo proyecto en mente?</h2>
          <p className="project__description">No esperes m&aacute;s para poner en pr&aacute;ctica tus ideas</p>
          <a href="#contact" className="button button--flex button--white">
            Contactame
            <UilMessage className="project__icon button__icon" />
          </a>
        </div>
        <img src={image} alt="¿Tenés un nuevo proyecto en mente?" className="project__img" />
      </SectionContent>
    </div>
  </Section>
);

export default ProjectSection;
