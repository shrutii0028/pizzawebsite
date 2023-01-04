import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import axios from 'axios'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza restaurant</title>
        <meta name="description" content="Best Pizza ever" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/> 
      <PizzaList/>
  </div>
  )
}

// export const getServerSideProps = async () =>{
//   const payload = {
//     "title": "pizza4",
//     "img": "/images/pizza.png",
//     "desc": "desc4",
//     "prices": [
//         12,
//         13,
//         14
//     ],
// "extraOption":[{
//     "text":"Spicy sauce",
//     "price": 3
// }
// ]

// }
//   const res = await axios.post("http://localhost:4000/api/products", payload);
//   console.log ("response " + res.data)
//   return{
//     props:{
//       pizzaList: res.data,
//     },

//   }

// }
