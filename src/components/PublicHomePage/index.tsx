import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Testimonials from "./Testimonials";

const PublicHomePage = () => {
  return (
    <Box w="full">
      <Header />
      <Testimonials />
    </Box>
  );
};

export default PublicHomePage;
