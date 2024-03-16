import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import { useMemo } from 'react';
console.log(useMemo);

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
