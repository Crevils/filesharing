import Head from "next/head";
import TitleCard from "components/TitleCard/titleCard.js";
import Layout from "components/layout.js";
import LinkCard from "components/LinkCard/linkCard.js";
import { Hero } from "components/Hero/hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>FILESHARE</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>


      <Hero />

        <main>
          <TitleCard
          title="Share files faster"/>
          <div className="flex center col-mobile pad-bottom">
            <LinkCard
              faStyles="fas fa-file-upload text-yellow-600"
              title="Share Files"
              // body="Upload one or more files and receive a shareable link or code"
              body=""
              btn="primary"
              link="/share"
              linkText="Share Files"
              />
            <LinkCard
              faStyles="fas fa-file-download text-yellow-600"
              title="Download Files"
              // body="Have a link or code? Retrieve the files that have been shared with you."
              btn="secondary"
              body=""
              link="/download"
              linkText="Retrieve Files"
            />
          </div>
        </main>

    </Layout>
  );
}
