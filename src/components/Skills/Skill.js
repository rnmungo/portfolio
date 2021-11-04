import PropTypes from 'prop-types';

const Skill = ({ name, level }) => (
  <div className="skills__data">
    <div className="skills__titles">
      <h3 className="skills__name">{name}</h3>
      <span className="skills__number">{`${level} %`}</span>
    </div>
    <div className="skills__bar">
      <span className="skills__percentage" style={{ width: `${level}%` }}></span>
    </div>
  </div>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number,
};

Skill.defaultProps = {
  level: 0,
};

export default Skill;
