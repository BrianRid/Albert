import React from "react";
import PrivateHomePage from "~/components/PrivateHomePage";
import PublicHomepage from "~/components/PublicHomePage";
import { api } from "~/utils/api";

export default function Home() {
  const { data: user } = api.user.me.useQuery();
  if (user) {
    return <PrivateHomePage {...user} />;
  } else {
    return <PublicHomepage />;
  }
}
