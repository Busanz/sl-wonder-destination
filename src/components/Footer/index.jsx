import Logo from '../Logo';
import NavLinks from '../NavLinks';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo isOnFooter={true} />
      <div className={styles.footer_text}>
        <h1 className={styles.footer_slogen}>
          Explore Sri Lanka, one destination at a time
        </h1>
        <p className={styles.footer_description}>
          Explore the beauty, culture, and hidden gems of Sri Lanka, one
          unforgettable destination at a time, creating countless memories along
          the way.
        </p>
      </div>
      <NavLinks isOnFooter={true} />
      <h6 className={styles.footer_copyright}>
        © 2026 Wonder Destination. All rights reserved.
      </h6>
    </div>
  );
};

export default Footer;
