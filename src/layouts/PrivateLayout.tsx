import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "~/components/Navbar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links: Array<{ href: string; label: string }> = [
    {
      href: "/",
      label: "Accueil",
    },
    {
      href: "/flats",
      label: "Mes biens",
    },
  ];

  return (
    <Box minH={"100vh"}>
      <Navbar links={links} />
      <Container>{children}</Container>
    </Box>
  );
}
