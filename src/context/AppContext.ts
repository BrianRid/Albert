import { User } from "@prisma/client";
import { SetStateAction, createContext } from "react";

interface AppContextInterface {
  user: User | undefined | null;
}

const AppContext = createContext<AppContextInterface>({
  user: undefined,
});

export default AppContext;
