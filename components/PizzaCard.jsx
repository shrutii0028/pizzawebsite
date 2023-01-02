import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Image src={pizza.img} alt="" width="200" height="200" />
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard