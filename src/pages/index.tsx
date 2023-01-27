import { GetStaticProps } from "next";
import { Card } from "../components/Card";
import axios from "axios";
import { HomeContainer } from "../styles/pages/home";
import { IProduct } from "../types/product";

interface HomeProps {
  products: IProduct[]
};

export default function Home({products}: HomeProps) {

  return (
    <HomeContainer>
      {products.map(product => (
        <Card key={`${product.id}-${product.description}`} product={product} />
      ))}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 
      },
    }
  );

  const products = await response.data.products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      photo: product.photo,
      price: Number(product.price),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2hours
  };
};
