import { User } from "@prisma/client";
import { SetStateAction, createContext } from "react";

interface AppContextInterface {
  user: User | undefined;
  setUser: React.Dispatch<SetStateAction<User | undefined>>;
}

const AppContext = createContext<AppContextInterface>({
  user: undefined,
  setUser: () => {
    throw new Error("setUser function must be overridden");
  },
});

export default AppContext;
