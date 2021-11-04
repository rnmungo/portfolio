import FooterContent from "./FooterContent";
import FooterSocial from './FooterSocial';
import FooterLinks from './FooterLinks';
import FooterTitle from './FooterTitle';
import FooterSubtitle from './FooterSubtitle';
import Copyright from "./Copyright";

const Footer = () => (
  <footer className="footer">
    <div className="footer__bg">
      <FooterContent>
        <div>
          <FooterTitle label="Rodrigo" />
          <FooterSubtitle label="Desarrollador FullStack" />
        </div>
        <FooterLinks />
        <FooterSocial />
      </FooterContent>
      <Copyright enterprice="Shovel Soft" />
    </div>
  </footer>
);

export default Footer;
