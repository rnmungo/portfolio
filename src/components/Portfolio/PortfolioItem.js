import PropTypes from 'prop-types';
import { UilArrowRight } from '@iconscout/react-unicons';

const PortfolioItem = ({ title, image, button }) => (
  <div className="portfolio__content grid">
    <img src={image.src} alt={image.alt} className="portfolio__img" />
    <div className="portfolio__data">
      <h3 className="portfolio__title">{title}</h3>
      <p className="portfolio__description"></p>
      {button && (
        <a
          href={button.link}
          target="_blank"
          rel="noopener noreferrer"
          className="button button--flex button--small portfolio__button"
        >
          {button.label}
          <UilArrowRight className="button__icon" />
        </a>
      )}
    </div>
  </div>
);

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.node,
  }).isRequired,
  button: PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  }),
};

PortfolioItem.defaultProps = {
  button: null,
};

export default PortfolioItem;
