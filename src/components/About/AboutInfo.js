import PropTypes from 'prop-types';

const AboutInfo = ({ children }) => (
  <div className="about__info">
    {children}
  </div>
);

AboutInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutInfo;
