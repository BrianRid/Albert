import { Box, Container } from "@chakra-ui/react";
import Footer from "~/components/Footer/Footer";
import Navbar from "~/components/Navbar";

export default function PublicLayout({
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
      href: "/about",
      label: "A propos",
    },
  ];

  return (
    <Box minH={"100vh"}>
      <Navbar links={links} />
      {children}
      <Footer />
    </Box>
  );
}
