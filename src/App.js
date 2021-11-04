import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
} from '@iconscout/react-unicons';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
import HomeSection from './components/Home';
import AboutSection from './components/About';
import SkillsSection from './components/Skills';
import QualificationsSection from './components/Qualifications';
import ServicesSection from './components/Services';
import PortfolioSection from './components/Portfolio';
import ProjectSection from './components/Project';
import ContactSection from './components/Contact';
import FrankyBot from './components/FrankyBot';

const App = () => (
  <>
    <Nav userName="Rodrigo">
      <NavItem
        link="home"
        label="Home"
        icon={<UilEstate className="nav__icon" />}
      />
      <NavItem
        link="about"
        label="Sobre mi"
        icon={<UilUser className="nav__icon" />}
      />
      <NavItem
        link="skills"
        label="Habilidades"
        icon={<UilFileAlt className="nav__icon" />}
      />
      <NavItem
        link="services"
        label="Servicios"
        icon={<UilBriefcaseAlt className="nav__icon" />}
      />
      <NavItem
        link="portfolio"
        label="Portafolio"
        icon={<UilScenery className="nav__icon" />}
      />
      <NavItem
        link="contact"
        label="Contactame"
        icon={<UilMessage className="nav__icon" />}
      />
    </Nav>
    <Main>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <QualificationsSection />
      <ServicesSection />
      <PortfolioSection />
      <ProjectSection />
      <ContactSection />
    </Main>
    <Footer />
    <ScrollUp />
    <FrankyBot />
  </>
);

export default App;
