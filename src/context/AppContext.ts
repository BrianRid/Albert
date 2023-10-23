/* eslint-disable @typescript-eslint/consistent-type-imports */
import { User } from "@prisma/client";
import { createContext } from "react";

interface AppContextInterface {
  user: User | undefined | null;
}

const AppContext = createContext<AppContextInterface>({
  user: undefined,
});

export default AppContext;
