import { useContext } from 'react';
import PropTypes from 'prop-types';
import NavigationContext from '../context/navigation';

const NavItem = ({ link, label, icon }) => {
  const { setShow } = useContext(NavigationContext);

  return (
    <li className="nav__item">
      <a
        href={`#${link}`}
        className="nav__link"
        onClick={() => setShow(false)}
      >
        {icon} {label}
      </a>
    </li>
  );
};

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default NavItem;
