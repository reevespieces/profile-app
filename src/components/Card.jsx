import styles from "../styles/cards.module.css";

const Card = ({ name, title, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.bottom}>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
