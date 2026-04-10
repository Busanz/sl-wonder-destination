import { NavLink } from 'react-router-dom';

import { pagesNavLinks } from '../../data/data';
import { convertFirtLetterCapital } from '../../utils/functions';

import styles from './navlinks.module.css';

const NavLinks = ({ isOnFooter = false }) => {
  return (
    <div className={isOnFooter ? styles.navlinks_footer : styles.navlinks}>
      {pagesNavLinks.map((navlink, index) => (
        <NavLink
          key={index}
          to={`/${navlink === 'home' ? '' : navlink}`}
          className={styles.navlink}
        >
          {convertFirtLetterCapital(navlink)}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
