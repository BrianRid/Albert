import {
  Box,
  Button,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceList } from "./interface";
import { IoCheckmarkCircle } from "react-icons/io5";

interface PriceWrapperProps {
  priceItem: PriceList;
}

const PriceWrapper = (props: PriceWrapperProps) => {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "center" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
      maxW={["sm", "sm"]}
      minW={["sm", "sm"]}
    >
      <Box position={props.priceItem.subheader ? "relative" : undefined}>
        {props.priceItem.subheader && (
          <Box
            position="absolute"
            top={0}
            left={0}
            px={3}
            py={1}
            style={{
              transform: "translate(70%, -50%)",
            }}
            bg="red.400"
            color="white"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="700"
            letterSpacing={1.1}
          >
            {props.priceItem.subheader}
          </Box>
        )}
      </Box>
      <Box py={4} px={12}>
        <Text fontWeight="500" fontSize="2xl">
          {props.priceItem.title}
        </Text>
        <HStack justifyContent="center">
          {props.priceItem.price === "0" ? (
            <Text fontSize="3xl" fontWeight="900">
              Gratuit
            </Text>
          ) : (
            <>
              <Text fontSize="5xl" fontWeight="900">
                {props.priceItem.price}
              </Text>
              <Text fontSize="3xl" fontWeight="600">
                €
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /mois
              </Text>
            </>
          )}
        </HStack>
      </Box>
      <VStack
        bg={useColorModeValue("gray.50", "gray.700")}
        py={4}
        borderBottomRadius={"xl"}
      >
        <List spacing={3} textAlign="start" px={12}>
          {
            // eslint-disable-next-line react/no-array-index-key
            props.priceItem.features.map((feature, index) => (
              <ListItem key={index}>
                <ListIcon
                  as={IoCheckmarkCircle}
                  color="green.500"
                  fontSize="xl"
                />
                {feature}
              </ListItem>
            ))
          }
        </List>
        <Box w="80%" pt={7}>
          <Button
            w="full"
            colorScheme="red"
            variant={props.priceItem.buttonVariant}
          >
            Choisir ce plan
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default PriceWrapper;
