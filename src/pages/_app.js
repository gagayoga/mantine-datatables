import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";

const QueryClients = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      cacheTime: 60 * 1000, // 60seconds
      staleTime: 0 * 10 * 1000, // 0seconds
    },
  },
});

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>TOT UGM</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          loader: "bars",
        }}
      >
        <Notifications />
        <QueryClientProvider client={QueryClients}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
}
