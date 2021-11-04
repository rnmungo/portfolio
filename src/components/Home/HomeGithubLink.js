import PropTypes from 'prop-types';
import { UilGithubAlt } from '@iconscout/react-unicons';

const HomeGithubLink = ({ userName }) => (
  <a
    href={`https://github.com/${userName}`}
    target="_blank"
    rel="noopener noreferrer"
    className="home__social-icon"
  >
    <UilGithubAlt />
  </a>
);

HomeGithubLink.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default HomeGithubLink;
