import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ProductCartProps } from "../components/Header";
import {
  ImageContainer,
  ImagesContainer,
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

        <h1>Compra efetuada!</h1>

        <Link href="/" onClick={() => localStorage.removeItem('persist:@mks-store:cart-items')}>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}