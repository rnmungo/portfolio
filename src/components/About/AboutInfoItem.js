import PropTypes from 'prop-types';

const AboutInfoItem = ({ title, content }) => (
  <div>
    <span className="about__info-title">{title}</span>
    <span className="about__info-name">
      {content.primary} <br /> {content.secondary}
    </span>
  </div>
);

AboutInfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
  }).isRequired,
};

export default AboutInfoItem;
