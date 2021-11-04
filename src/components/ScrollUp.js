import { useState, useEffect } from 'react';
import classNames from 'classnames';
import UilArrowUp from '@iconscout/react-unicons/icons/uil-arrow-up';

const ScrollUp = () => {
  const [show, setShow] = useState(false);

  const scrollUp = () => {
    if (window.scrollY >= 560) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollUp);
    return () => {
      window.removeEventListener('scroll', scrollUp);
    };
  }, []);

  return (
    <a
      href="#"
      className={classNames('button--fab scrollup', { 'scrollup-active': show })}
      id="scroll-up"
    >
      <UilArrowUp className="button--fab__icon" />
    </a>
  );
};

export default ScrollUp;
