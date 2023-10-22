import { User } from "@prisma/client";
import { SetStateAction, createContext } from "react";

interface AppContextInterface {
  user: User | undefined;
}

const AppContext = createContext<AppContextInterface>({
  user: undefined,
});

export default AppContext;
