import Head from "next/head"
import React from "react"
import InputMail from "../src/components/Controls/InputMail/InputMail"
import Layout from "../src/components/Layout/Layout"
import PageHome from "../src/components/PageHome/PageHome"

export default function Paso2() {
    return (
      <>
        <Head>
          <title>HABI-E-Mail-Cliente</title>
        </Head>
        <Layout paso={2}>
          <InputMail nextPage="/Direccion-Apartamento"/>
        </Layout>
      </>
      
    )
  }