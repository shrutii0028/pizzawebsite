import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza restaurant</title>
        <meta name="description" content="Best Pizza ever" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/> 
  </div>
  )
}
