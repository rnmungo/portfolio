import PropTypes from 'prop-types';

const HomeSubtitle = ({ children }) => (
  <h3 className="home__subtitle">{children}</h3>
);

HomeSubtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default HomeSubtitle;
