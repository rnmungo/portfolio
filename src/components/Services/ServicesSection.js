import { UilWebGrid, UilArrow, UilRepeat } from '@iconscout/react-unicons';
import Section from "../Section";
import SectionContent from "../SectionContent";
import SectionSubtitle from "../SectionSubtitle";
import SectionTitle from "../SectionTitle";
import Service from './Service';
import ServiceHeader from './ServiceHeader';
import ServiceModal from './ServiceModal';

const ServicesSection = () => {
  return (
    <Section className="services" id="services">
      <SectionTitle>Servicios</SectionTitle>
      <SectionSubtitle>Les ofrezco</SectionSubtitle>
      <SectionContent className="services__container container grid">
        <Service>
          <ServiceHeader
            icon={(
              <UilWebGrid className="services__icon" />
            )}
            title={{ primary: 'Desarrollo', secondary: 'Web' }}
          />
          <ServiceModal
            title="Desarrollo Web"
            items={[
              "Desarrollo de interfaz de usuario.",
              "Desarrollo de páginas web.",
              "Posiciono la marca de tu empresa."
            ]}
          />
        </Service>
        <Service>
          <ServiceHeader
            icon={(
              <UilArrow className="services__icon" />
            )}
            title={{ primary: 'Servicios', secondary: 'Backend' }}
          />
          <ServiceModal
            title="Servicios Backend"
            items={[
              "Diseño el core de tu negocio analizando los casos de uso.",
              "Desarrollo el core de tu página web.",
            ]}
          />
        </Service>
        <Service>
          <ServiceHeader
            icon={(
              <UilRepeat className="services__icon" />
            )}
            title={{ primary: 'Desarrollo', secondary: 'Ágil e Iterativo' }}
          />
          <ServiceModal
            title="Desarrollo Ágil e Iterativo"
            items={[
              "Trabajo con metodología Scrumban.",
              "Estimo tareas y costos.",
            ]}
          />
        </Service>
      </SectionContent>
    </Section>
  );
};

export default ServicesSection;
