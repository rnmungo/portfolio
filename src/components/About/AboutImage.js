import PropTypes from 'prop-types';

const AboutImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="about__img" />
);

AboutImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

AboutImage.defaultProps = {
  alt: '',
};

export default AboutImage;
