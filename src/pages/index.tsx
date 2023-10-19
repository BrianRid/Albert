import { Button, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import PrivateLayout from "~/layouts/PrivateLayout";
import PublicLayout from "~/layouts/PublicLayout";

import { api } from "~/utils/api";

export default function Home() {
  const { data: session } = useSession();

  const user = session && session.user;

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
