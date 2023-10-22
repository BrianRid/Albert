import { Text } from "@chakra-ui/react";
import React from "react";
import PublicHomepage from "~/components/PublicHomePage";
import AppContext from "~/context/AppContext";
import { api } from "~/utils/api";

export default function Home() {
  const { data: user } = api.user.me.useQuery();
  if (user) {
    return (
      <>
        <Text>Je suis privé</Text>
        <Text>{user.name}</Text>
      </>
    );
  } else {
    return <PublicHomepage />;
  }
}
