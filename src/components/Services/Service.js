import PropTypes from 'prop-types';

const Service = ({ children }) => (
  <div className="services__content">
    {children}
  </div>
);

Service.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Service;
