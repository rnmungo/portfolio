import PropTypes from 'prop-types';
import { UilAngleDown, UilBracketsCurly } from '@iconscout/react-unicons';

const SkillHeader = ({ title, subtitle, onClick }) => {
  return (
    <div className="skills__header" onClick={onClick}>
      <UilBracketsCurly className="skills__icon" />
      <div>
        <h1 className="skills__title">{title}</h1>
        <span className="skills__subtitle">{subtitle}</span>
      </div>
      <UilAngleDown className="skills__arrow" />
    </div>
  );
};

SkillHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SkillHeader.defaultProps = {
  onClick: () => {},
};

export default SkillHeader;
