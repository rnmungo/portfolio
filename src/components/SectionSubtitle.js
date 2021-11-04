import PropTypes from 'prop-types';

const SectionSubtitle = ({ children }) => (
  <h2 className="section__subtitle">{children}</h2>
);

SectionSubtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

SectionSubtitle.defaultProps = {
  children: '',
};

export default SectionSubtitle;