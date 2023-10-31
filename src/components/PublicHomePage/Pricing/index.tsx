import { Box, Heading, ScaleFade, Stack, Text, VStack } from "@chakra-ui/react";
import { PriceList } from "./interface";
import PriceWrapper from "./PriceWrapper";
import React from "react";
import { useInViewport } from "react-in-viewport";

const Pricing = () => {
  const ref = React.useRef(null);
  const { inViewport } = useInViewport(ref);

  const pricingList: PriceList[] = [
    {
      title: "Découverte",
      price: "0",
      features: [
        "Gestion de 1 propriété",
        "Tableau de bord simple",
        "Génération automatique de quittance",
      ],
      buttonVariant: "outline",
    },
    {
      title: "Investisseurs",
      subheader: "Most popular",
      price: "20",
      features: [
        "Gestion jusqu'à 10 propriétés",
        "Tableau de bord avancé",
        "Génération automatique de quittances",
        "Rapports financiers détaillés avec suivi de la rentabilité",
      ],
      buttonVariant: "solid",
    },
    {
      title: "Agences",
      price: "100",
      features: [
        "Gestion de 50 propriétés",
        "Tableau de bord professionnel avec visualisation complète de toutes les propriétés",
        "Génération automatique de quittances et autres documents légaux",
        "Rapports financiers personnalisables pour chaque client",
      ],
      buttonVariant: "outline",
    },
  ];

  return (
    <ScaleFade
      initialScale={0.5}
      in={inViewport}
      transition={{
        enter: {
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut",
        },
      }}
    >
      <Box py={12} ref={ref}>
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
          align={{ base: "center", md: "stretch" }}
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          {pricingList.map((priceItem: PriceList, index: number) => {
            return <PriceWrapper key={index} priceItem={priceItem} />;
          })}
        </Stack>
      </Box>
    </ScaleFade>
  );
};

export default Pricing;
