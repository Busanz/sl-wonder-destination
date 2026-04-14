import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Logo from '../Logo';
import NavLinks from '../NavLinks';

const Header = () => {
  const [isMobileHeader, setIsMobileHeader] = useState(false);

  const handleClick = () => {
    setIsMobileHeader(!isMobileHeader);
  };

  useEffect(() => {
    const bodyEle = document.querySelector('body');

    isMobileHeader
      ? (bodyEle.style.overflow = 'hidden')
      : (bodyEle.style.overflow = 'auto');
  }, [isMobileHeader]);

  return (
    <nav className={styles.header}>
      <Logo />
      <NavLinks
        isMobileNavlinks={isMobileHeader}
        setClose={() => setIsMobileHeader(false)}
      />
      <div className={styles.mobile_nav_icon} onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#726bff"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu-icon lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </div>
    </nav>
  );
};

export default Header;
