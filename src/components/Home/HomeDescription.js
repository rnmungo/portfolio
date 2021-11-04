import PropTypes from 'prop-types';

const HomeDescription = ({ children }) => (
  <p className="home__description">{children}</p>
);

HomeDescription.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HomeDescription;
