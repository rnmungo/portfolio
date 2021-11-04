import PropTypes from 'prop-types';

const QualificationsSections = ({ children }) => (
  <div className="qualification__sections">
    {children}
  </div>
);

QualificationsSections.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QualificationsSections;
