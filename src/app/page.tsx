// This is the home page
import "../styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import Header from "@/templates/Header/Header";
import Hero from '@/components/hero'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Home Page</title>
        <meta name="description" content="My home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <main className="main">
          <Hero />
      </main>
    </div>
  );
}
