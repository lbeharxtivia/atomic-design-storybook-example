import { PrintTailwindConfig } from '@components/internal/PrintTailwindConfig'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen py-2 prose bg-beige`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Storybook Library</h1>
      <p>Run <em>yarn storybook</em> to see components</p>
      <PrintTailwindConfig />
    </div>
  )
}

export default Home
