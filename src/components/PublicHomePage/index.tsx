import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";

const PublicHomePage = () => {
  return (
    <Box w="full">
      <Header />
      <Testimonials />
      <Pricing />
    </Box>
  );
};

export default PublicHomePage;
