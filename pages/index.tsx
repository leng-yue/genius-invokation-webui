import GameContainer from "../components/GameContainer";
import Head from "next/head";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Genius Invokation Simulator WebUI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GameContainer />
    </div>
  );
}
