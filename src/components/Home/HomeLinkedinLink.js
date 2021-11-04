import PropTypes from 'prop-types';
import { UilLinkedinAlt } from '@iconscout/react-unicons';

const HomeLinkedinLink = ({ userName }) => (
  <a
    href={`https://www.linkedin.com/in/${userName}/`}
    target="_blank"
    rel="noopener noreferrer"
    className="home__social-icon"
  >
    <UilLinkedinAlt />
  </a>
);

HomeLinkedinLink.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default HomeLinkedinLink;
