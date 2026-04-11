import { categoriesHeader } from '../../data/data';
import image from '../../assets/images/about-us.jpg';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      {categoriesHeader
        .filter((item) => item.id === 'about')
        .map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      <div>
        <img
          src={image}
          alt={'Ella train journey'}
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default About;
