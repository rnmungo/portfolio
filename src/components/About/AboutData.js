import PropTypes from 'prop-types';

const AboutData = ({ children }) => (
  <div className="about__data">
    {children}
  </div>
);

AboutData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default AboutData;
