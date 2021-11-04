import PropTypes from 'prop-types';
import { UilFacebookF } from '@iconscout/react-unicons';

const FooterFacebookLink = ({ userName }) => (
  <a
    href={`https://www.facebook.com/${userName}`}
    target="_blank"
    rel="noopener noreferrer"
    className="footer__social"
  >
    <UilFacebookF />
  </a>
);

FooterFacebookLink.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default FooterFacebookLink;
