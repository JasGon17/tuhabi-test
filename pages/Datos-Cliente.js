import Head from "next/head"
import React from "react"
import InputText from "../src/components/Controls/InputText/InputText"
import Layout from "../src/components/Layout/Layout"

export default function Paso1() {
    return (
      <>
        <Head>
          <title>HABI-Datos-Cliente</title>
        </Head>
        <Layout paso={1}>
          <InputText nextPage="/E-Mail-Cliente"/>
        </Layout>
      </>
      
    )
  }