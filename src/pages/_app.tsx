import React from "react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "~/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppContext from "~/context/AppContext";

import { api } from "~/utils/api";
import { User } from "@prisma/client";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [user, setUser] = React.useState<User>();

  const contextValue = {
    user: user,
    setUser,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <ChakraProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ChakraProvider>
    </AppContext.Provider>
  );
};

export default api.withTRPC(MyApp);
