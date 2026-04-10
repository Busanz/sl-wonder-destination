import { NavLink } from 'react-router-dom';

import styles from './logo.module.css';

const Logo = ({ isOnFooter = false }) => {
  return (
    <>
      <NavLink
        to={'/'}
        className={`${styles.logo} ${isOnFooter ? styles.logo_footer : ''}`}
      >
        wonder<span>Destination</span>
      </NavLink>
    </>
  );
};

export default Logo;
