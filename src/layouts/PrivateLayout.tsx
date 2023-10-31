import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "~/components/Footer/Footer";
import PrivateSideBarLayout from "~/components/PrivateSideBar/PrivateSideBar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box minH={"100vh"}>
      <PrivateSideBarLayout>{children}</PrivateSideBarLayout>
      <Footer />
    </Box>
  );
}
