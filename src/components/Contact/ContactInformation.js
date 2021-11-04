import PropTypes from 'prop-types';

const ContactInformation = ({ title, subtitle, icon }) => (
  <div className="contact__information">
    {icon}
    <div>
      <h3 className="contact__title">{title}</h3>
      <span className="contact__subtitle">{subtitle}</span>
    </div>
  </div>
);

ContactInformation.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ContactInformation;
