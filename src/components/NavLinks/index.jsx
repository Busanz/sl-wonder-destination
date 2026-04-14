import { NavLink } from 'react-router-dom';

import { pagesNavLinks } from '../../data/data';
import { convertFirtLetterCapital } from '../../utils/functions';

import styles from './navlinks.module.css';

const NavLinks = ({ isOnFooter = false, isMobileNavlinks, setClose }) => {
  const handleClick = () => {
    const isClickCloseButton = !isMobileNavlinks;
    setClose(isClickCloseButton);
  };
  return (
    <div
      className={`${isOnFooter ? styles.navlinks_footer : styles.navlinks} ${isMobileNavlinks ? styles.mobile_active : ''}`}
    >
      {isMobileNavlinks && (
        <div onClick={handleClick} className={styles.navlinks_btnClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
      )}
      {pagesNavLinks.map((navlink, index) => (
        <NavLink
          key={index}
          to={`/${navlink === 'home' ? '' : navlink}`}
          className={({ isActive }) =>
            `${styles.navlink} ${isActive ? styles.active_navlink : ''}`
          }
          onClick={handleClick}
        >
          {convertFirtLetterCapital(navlink)}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
