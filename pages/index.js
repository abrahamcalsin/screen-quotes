import * as React from "react";
import Head from "next/head";
import { GithubForkBanner } from "react-github-fork-banner";

import RandomQuote from "../src/components/random-quote";
import Header from "../src/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Screen Quotes</title>
      </Head>

      <Header />
      <GithubForkBanner
        direction="right"
        size={98}
        animation="tail"
        customHref="https://github.com/abrahamcalsin/screen-quotes"
        bannerColor="#312E81"
        octoColor="rgb(224, 231, 255)"
      />
      <RandomQuote />
    </>
  );
}
