import PropTypes from 'prop-types';
import classNames from 'classnames';

const Section = ({ children, className, ...extraProps }) => (
  <section className={classNames(className, 'section')} { ...extraProps }>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: '',
};

export default Section;
