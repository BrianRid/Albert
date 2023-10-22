import { Text } from "@chakra-ui/react";
import React from "react";
import AppContext from "~/context/AppContext";
import PrivateLayout from "~/layouts/PrivateLayout";
import PublicLayout from "~/layouts/PublicLayout";
import { api } from "~/utils/api";

export default function Home() {
  const { user, setUser } = React.useContext(AppContext);

  const { data: tmpUser } = api.user.me.useQuery();

  React.useEffect(() => {
    if (tmpUser) {
      setUser(tmpUser);
    }
  }, [tmpUser]);

  if (user) {
    return (
      <PrivateLayout>
        <Text>Je suis privé</Text>
        <Text>{user.name}</Text>
      </PrivateLayout>
    );
  } else {
    return (
      <PublicLayout>
        <Text>Pas connecté man</Text>
      </PublicLayout>
    );
  }
}
