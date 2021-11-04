import PropTypes from 'prop-types';

const QualificationsTab = ({ name, icon, target, onClick }) => (
  <div
    className="qualification__button button--flex qualification__active"
    data-target={`#${target}`}
    onClick={() => onClick(target)}
  >
    {icon}
    {name}
  </div>
);

QualificationsTab.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  target: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

QualificationsTab.defaultProps = {
  onClick: () => {}
};

export default QualificationsTab;
