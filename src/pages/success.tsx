import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  SuccessContainer,
} from "../styles/pages/success";

export default function Success() {

  return (
    <>
      <Head>
        <title>Compra efetuada | MKS Sistemas</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>

        <Image src="https://github.com/rafaalmeida1.png" width={150} height={150} alt="Developer Photo" />

        <strong>Espero que estejam satisfeitos com o resultado do teste!</strong>
        <span>Com muito carinho - <Link href="ttps://github.com/rafaalmeida1">Rafael Almeida</Link></span>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}