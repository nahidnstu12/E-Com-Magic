import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../product.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        products.map(product => (
          <div key={product.slug}>
            {product.name} - {product.price}
          </div>
        ))
      }
     
      <footer className={styles.footer}>
        This is practising course
      </footer>
    </div>
  )
}
