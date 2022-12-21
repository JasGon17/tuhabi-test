import Head from "next/head"
import React from "react"
import Layout from "../src/components/Layout/Layout"
import PageHome from "../src/components/PageHome/PageHome"

export default function Home() {
    return (
      <>
        <Head>
          <title>HABI-test</title>
        </Head>
        <Layout >
          <PageHome link='/Datos-Cliente'/>
        </Layout>
      </>
      
    )
  }