import { Box } from "@chakra-ui/react";
import { Flat } from "@prisma/client";

const FlatList = ({ flats }: { flats: Flat[] }) => {
  console.log(flats);
  return <Box></Box>;
};

export default FlatList;
