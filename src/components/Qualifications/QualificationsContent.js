import PropTypes from 'prop-types';
import classNames from "classnames";

const QualificationsContent = ({ children, active }) => (
  <div
    className={classNames('qualification__content', { 'qualification__active': active })}
    data-content
  >
    {children}
  </div>
);

QualificationsContent.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

QualificationsContent.defaultProps = {
  active: false,
};

export default QualificationsContent;
