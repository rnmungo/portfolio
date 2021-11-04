import PropTypes from 'prop-types';

const AboutDescription = ({ children }) => (
  <p className="about__description">
    {children}
  </p>
);

AboutDescription.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AboutDescription;
