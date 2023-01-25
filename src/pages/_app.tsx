import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CartContextProvider } from "../context/CartContext";
import { GlobalStyle } from "../styles/globalstyles";
import { defaultTheme } from "../styles/themes/default";
import { Container, ContentContainer } from "../styles/_app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Container>
            <Header />

            <ContentContainer>
              <Component {...pageProps} />
            </ContentContainer>
            <Footer />
          </Container>
        </ThemeProvider>
      </CartContextProvider>
    </>
  );
}
