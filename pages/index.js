import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Carousal from '../components/Carousal'
import Products from '../components/Products'

const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Ecobazzar</title>
      </Head>
      <main className=' max-w-screen-2xl'>
        <Header/>
        <Carousal/>
        <Products products={products}/>
      </main>
    </>
  )
}

export const getServerSideProps = async(context) => {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  return {
    props:{
      products:products
    }
  }
}