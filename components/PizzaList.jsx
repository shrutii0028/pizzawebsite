import React from 'react'
import PizzaCard from './PizzaCard'
import styles from "../styles/PizzaList.module.css";

const PizzaList = ({pizzaList}) => {
  console.log('pizzalist: ' + pizzaList)
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
    <br></br>
    <br></br>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <br></br>
      <br></br>
    <div className={styles.wrapper}>
    {pizzaList.map((pizza) =>(
        <PizzaCard key={pizza._id} pizza = {pizza} />
    ))}
    </div>
    </div>
  )
}

export default PizzaList;