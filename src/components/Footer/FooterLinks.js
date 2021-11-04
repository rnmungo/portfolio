import FooterLink from "./FooterLink";

const FooterLinks = () => (
  <ul className="footer__links">
    <FooterLink href="services" label="Servicios" />
    <FooterLink href="portfolio" label="Portafolio" />
    <FooterLink href="contact" label="Contactame" />
  </ul>
);

export default FooterLinks;
