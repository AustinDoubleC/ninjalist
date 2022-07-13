import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur turpis sit amet porttitor aliquet. Proin sodales ornare placerat. Duis posuere est eu dignissim fermentum. Aliquam augue elit, lacinia id.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur turpis sit amet porttitor aliquet. Proin sodales ornare placerat. Duis posuere est eu dignissim fermentum. Aliquam augue elit, lacinia id.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
