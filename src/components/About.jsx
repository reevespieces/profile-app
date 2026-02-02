import styles from "../styles/about.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h1 className={styles.title}>Profile App</h1>
      <p className={styles.text}>
        This is the about section.
      </p>
    </section>
  );
};

export default About;