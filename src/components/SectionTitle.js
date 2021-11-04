import PropTypes from 'prop-types';

const SectionTitle = ({ children }) => (
  <h2 className="section__title">{children}</h2>
);

SectionTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default SectionTitle;