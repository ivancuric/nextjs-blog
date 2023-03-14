import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as BlinkIDUI from "@microblink/blinkid-in-browser-sdk/ui/loader";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    BlinkIDUI.defineCustomElements();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <blinkid-in-browser
          license-key="sRwAAAYJbG9jYWxob3N0r/lOPk4/w35CpJnWKsMeye2YAIg1gyOb07+BaXopFnvPdaOjHJuGHWixKTd1WLxcGCxWYhcz8iE03+Y9f8d1sOm7RY15Gr6nIP1WzOYg1tJDQOXQQ8+yDDVTHElcBvhRJ7L7LKxWzEPoDyZquymv5hCDwBtBXL2ofhj1koAI8OBeAIDgDm9O0jx1lY0p/cLkO/rS3ZGDXlYGt8ENSRl4RbCwgcUoefEAICjVQiRfAGpUinZgahgTjvWwepXDTVzVHNjJDlAM/X7+3zSrxa95yAodMX38V7kKIfoXPT5pjuUvnqqC490O7SBVKT3EghAP4ppehqw+RUCpFf0="
          recognizers="BlinkIdMultiSideRecognizer"
        ></blinkid-in-browser>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
