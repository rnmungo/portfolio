import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { UilMoon, UilSun, UilApps, UilTimes } from '@iconscout/react-unicons';
import NavigationContext from '../context/navigation';
import useDarkMode from '../hooks/useDarkMode';

const Nav = ({ children, userName }) => {
  const [show, setShow] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [dark, toggleMode] = useDarkMode();

  const scrollHeader = () => {
    if (window.scrollY >= 80) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ setShow }}>
      <header className={classNames('header', { 'scroll-header': shadow })} id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">{userName}</a>
          <div className={classNames('nav__menu', { 'show-menu': show })} id="nav-menu">
            <ul className="nav__list grid">
              {children}
            </ul>
            <UilTimes className="nav__close" id="nav-close" onClick={() => setShow(false)} />
          </div>
          <div className="nav__btns">
            {dark 
              ? <UilSun className="change-theme" onClick={() => toggleMode()} />
              : <UilMoon className="change-theme" onClick={() => toggleMode()} />
            }
            <div className="nav__toggle" id="nav-toggle" onClick={() => setShow(true)}>
              <UilApps />
            </div>
          </div>
        </nav>
      </header>
    </NavigationContext.Provider>
  );
};

Nav.propTypes = {
  userName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Nav;
