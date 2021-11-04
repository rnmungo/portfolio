import PropTypes from 'prop-types';

const HomeTitle = ({ children }) => (
  <h1 className="home__title">{children}</h1>
);

HomeTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default HomeTitle;
