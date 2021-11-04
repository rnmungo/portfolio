import PropTypes from 'prop-types';

const AboutButtons = ({ children }) => (
  <div className="about__buttons">
    {children}
  </div>
);

AboutButtons.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutButtons;
