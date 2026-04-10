import styles from './header.module.css';

import Logo from '../Logo';
import NavLinks from '../NavLinks';

const Header = () => {
  return (
    <nav className={styles.header}>
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default Header;
