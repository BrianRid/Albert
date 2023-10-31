import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { PriceList } from "./interface";
import PriceWrapper from "./PriceWrapper";

const Pricing = () => {
  const pricingList: PriceList[] = [
    {
      title: "Découverte",
      price: "0",
      features: [
        "10 users included",
        "2 GB of storage",
        "Email support",
        "Help center access",
      ],
      buttonVariant: "outline",
    },
    {
      title: "Investisseurs",
      subheader: "Most popular",
      price: "15",
      features: [
        "20 users included",
        "10 GB of storage",
        "Priority email support",
        "Help center access",
      ],
      buttonVariant: "solid",
    },
    {
      title: "Agences",
      price: "30",
      features: [
        "50 users included",
        "30 GB of storage",
        "Phone and email support",
        "Help center access",
      ],
      buttonVariant: "outline",
    },
  ];

  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Un abonnement pour tous les besoins
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Découvrez nos plans adaptés à chaque besoin, que vous soyez un
          propriétaire individuel ou une grande agence immobilière.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {pricingList.map((priceItem: PriceList, index: number) => {
          return <PriceWrapper key={index} priceItem={priceItem} />;
        })}
      </Stack>
    </Box>
  );
};

export default Pricing;
