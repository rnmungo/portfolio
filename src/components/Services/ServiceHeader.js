import PropTypes from 'prop-types';

const ServiceHeader = ({ icon, title }) => (
  <div>
    {icon}
    <h3 className="services__title">{title.primary} <br /> {title.secondary}</h3>
  </div>
);

ServiceHeader.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
  }).isRequired,
};

export default ServiceHeader;
