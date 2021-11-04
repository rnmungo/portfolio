import PropTypes from 'prop-types';

const QualificationsTabs = ({ children }) => (
  <div className="qualification__tabs">
    {children}
  </div>
);

QualificationsTabs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QualificationsTabs;
