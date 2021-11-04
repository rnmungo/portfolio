import PropTypes from 'prop-types';
import { UilArrowRight } from '@iconscout/react-unicons'

const ServiceExplainButton = ({ onClick }) => (
  <span
    className="button button--flex button--small button--link services__button"
    onClick={onClick}
  >
    Ver m&aacute;s
    <UilArrowRight className="button__icon" />
  </span>
);

ServiceExplainButton.propTypes = {
  onClick: PropTypes.func,
};

ServiceExplainButton.defaultProps = {
  onClick: () => {}
};

export default ServiceExplainButton;
