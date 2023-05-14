import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import StringInput from '@/components/StringInput/StringInput'
import ResultViewer from '@/components/ResultViewer/ResultViewer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>String Case Converter</title>
        <meta name="description" content="Powered by Mochi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.tool}>
          <StringInput></StringInput>
          <ResultViewer></ResultViewer>
        </div>
      </main>
    </>
  )
}
