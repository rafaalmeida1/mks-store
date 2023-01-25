import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalstyles";
import { defaultTheme } from "../styles/themes/default";
import { Container, ContentContainer } from "../styles/_app";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </>
  );
}
