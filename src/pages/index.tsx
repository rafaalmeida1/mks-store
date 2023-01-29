import { GetStaticProps } from "next";
import { Card } from "../components/Card";
import { HomeContainer } from "../styles/pages/home";
import { IProduct } from "../types/product";
import { api } from "../lib/axios";
import { useEffect, useState } from "react";
import { ProductSkeleton } from "../components/ProductSkeleton";
import { useRouter } from "next/router";

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <HomeContainer>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        products.map((product) => (
          <Card
            key={`${product.id}-${product.description}`}
            product={product}
          />
        ))
      )}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(
    "products?page=1&rows=8&sortBy=id&orderBy=ASC",
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
