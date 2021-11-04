import PropTypes from 'prop-types';

const FooterLink = ({ href, label }) => (
  <li>
    <a href={`#${href}`} className="footer__link">{label}</a>
  </li>
);

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FooterLink;
