import React, { ReactNode } from "react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "~/styles/globals.css";
import { Box, ChakraProvider, Spinner } from "@chakra-ui/react";
import AppContext from "~/context/AppContext";

import { api } from "~/utils/api";
import PrivateLayout from "~/layouts/PrivateLayout";
import PublicLayout from "~/layouts/PublicLayout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { data: user, isLoading } = api.user.me.useQuery();

  const contextValue = {
    user: user,
  };

  const getLayout = (children: ReactNode) => {
    if (user && !isLoading) {
      return <PrivateLayout>{children}</PrivateLayout>;
    } else {
      return <PublicLayout>{children}</PublicLayout>;
    }
  };

  if (isLoading)
    return (
      <Box
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner />
      </Box>
    );

  return (
    <AppContext.Provider value={contextValue}>
      <ChakraProvider>
        <SessionProvider session={session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </ChakraProvider>
    </AppContext.Provider>
  );
};

export default api.withTRPC(MyApp);
