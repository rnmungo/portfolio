import PropTypes from 'prop-types';

const SectionContent = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

SectionContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SectionContent.defaultProps = {
  className: '',
};

export default SectionContent;
