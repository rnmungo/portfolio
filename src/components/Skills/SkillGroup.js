import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SkillHeader from './SkillHeader';

const SkillGroup = ({ title, subtitle, children, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);

  const visibilityClass = open ? 'skills__open' : 'skills__close';
  return (
    <div
      className={classNames('skills__content', visibilityClass)}
    >
      <SkillHeader
        title={title}
        subtitle={subtitle}
        onClick={() => setOpen((prevState) => !prevState)}
      />
      <div className="skills__list grid">
        {children}
      </div>
    </div>
  );
};

SkillGroup.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  defaultOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SkillGroup.defaultProps = {
  defaultOpen: false,
};

export default SkillGroup;
