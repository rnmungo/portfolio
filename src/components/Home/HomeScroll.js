import PropTypes from 'prop-types';
import { UilMouseAlt, UilArrowDown } from '@iconscout/react-unicons';

const HomeScroll = ({ label }) => (
  <div className="home__scroll">
    <a href="#about" className="home__scroll-button button--flex">
      <UilMouseAlt className="home__scroll-mouse" />
      <span className="home__scroll-name">{label}</span>
      <UilArrowDown className="home__scroll-arrow" />
    </a>
  </div>
);

HomeScroll.propTypes = {
  label: PropTypes.string.isRequired,
};

export default HomeScroll;
