import PropTypes from 'prop-types';
import { UilInstagram } from '@iconscout/react-unicons';

const FooterInstagramLink = ({ userName }) => (
  <a
    href={`https://www.instagram.com/${userName}`}
    target="_blank"
    rel="noopener noreferrer"
    className="footer__social"
  >
    <UilInstagram />
  </a>
);

FooterInstagramLink.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default FooterInstagramLink;
  