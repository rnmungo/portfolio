import PropTypes from 'prop-types';
import { UilStar } from '@iconscout/react-unicons';

const Testimonial = ({ name, role, description, image }) => (
  <div className="testimonial__content">
    <div className="testimonial__data">
      <div className="testimonial__header">
        <img src={image} alt={`Testimonial - ${name}`} className="testimonial__img" />
        <div>
          <h3 className="testimonial__name">{name}</h3>
          <span className="testimonial__client">{role}</span>
        </div>
      </div>
      <div>
        <UilStar className="testimonial__icon-star" />
        <UilStar className="testimonial__icon-star" />
        <UilStar className="testimonial__icon-star" />
        <UilStar className="testimonial__icon-star" />
        <UilStar className="testimonial__icon-star" />
      </div>
    </div>
    <p className="testimonial__description">
      {description}
    </p>
  </div>
);

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default Testimonial;
