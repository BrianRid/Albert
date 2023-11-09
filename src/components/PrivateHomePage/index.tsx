import { Box, Flex, Spinner } from "@chakra-ui/react";
import { User } from "@prisma/client";
import { api } from "~/utils/api";
import FlatList from "./FlatList";

const PrivateHomePage = (user: User) => {
  const { data: flats } = api.flat.getList.useQuery({ id: user.id });

  if (!flats) {
    return (
      <Flex w="full" justifyContent={"center"} alignItems={"center"}>
        <Spinner size="large" color="#0000ff" />
      </Flex>
    );
  }

  return (
    <Box w="full">
      <FlatList flats={flats.data} />
    </Box>
  );
};

export default PrivateHomePage;
