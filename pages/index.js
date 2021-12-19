import * as React from "react"
import Head from "next/head"

import RandomQuote from "../src/components/random-quote"
import Header from "../src/components/header"
import GithubCorner from "../src/components/github-corner"

export default function Home() {
  return (
    <>
      <Head>
        <title>Screen Quotes</title>
      </Head>

      <Header />
      <GithubCorner
        direction="right-0"
        fillColor="text-indigo-100"
        customHref="https://github.com/"
        bannerColor="text-indigo-900"
      />
      <RandomQuote />
    </>
  )
}
