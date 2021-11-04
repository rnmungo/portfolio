import Section from '../Section';
import SectionTitle from '../SectionTitle';
import SectionSubtitle from '../SectionSubtitle';
import SectionContent from '../SectionContent';
import SkillGroup from './SkillGroup';
import Skill from './Skill';

const SkillsSection = () => {
  return (
    <Section className="skills" id="skills">
      <SectionTitle>Habilidades</SectionTitle>
      <SectionSubtitle>Mi nivel t&eacute;cnico</SectionSubtitle>
      <SectionContent className="skills__container container grid">
        <div>
          <SkillGroup title="Desarrollo Frontend" subtitle="Más de 2 años" defaultOpen>
            <Skill name="HTML" level={90} />
            <Skill name="CSS - Bootstrap - SASS" level={70} />
            <Skill name="JavaScript" level={80} />
            <Skill name="ReactJS" level={95} />
          </SkillGroup>
          <SkillGroup title="Desarrollo Backend" subtitle="Más de 4 años" defaultOpen={false}>
            <Skill name="C# - .NET - .NET Core" level={90} />
            <Skill name="NodeJS" level={65} />
            <Skill name="Python - FastAPI" level={70} />
            <Skill name="Golang" level={85} />
            <Skill name="PHP - Laravel" level={80} />
            <Skill name="MySQL - SQLServer" level={75} />
          </SkillGroup>
        </div>
        <div>
          <SkillGroup title="Diseñador" subtitle="Más de 1 año" defaultOpen={false}>
            <Skill name="Figma" level={70} />
          </SkillGroup>
        </div>
      </SectionContent>
    </Section>
  );
};

export default SkillsSection;
