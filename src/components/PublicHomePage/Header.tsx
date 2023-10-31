import {
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  GridItem,
  Box,
  Container,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoDocument,
  IoHome,
  IoLogoBitcoin,
  IoPeople,
  IoSearchSharp,
} from "react-icons/io5";
import React, { ReactElement } from "react";
import { gsap } from "gsap";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Header() {
  React.useEffect(() => {
    gsap.fromTo(
      ".header_image",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.75,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <Box>
      <Container maxW={"6xl"} py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <Stack spacing={4}>
              <Text
                textTransform={"uppercase"}
                color={"blue.400"}
                fontWeight={600}
                fontSize={"sm"}
                bg={useColorModeValue("blue.50", "blue.900")}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                Qui sommes nous ?
              </Text>
              <Heading>Optimisez votre Gestion Immobilière avec Albert</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                La plateforme tout-en-un pour gérer, suivre et maximiser la
                rentabilité de vos biens immobiliers.
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                <Feature
                  icon={<Icon as={IoHome} color={"purple.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={
                    "Gérez toutes vos propriétés à partir d'un tableau de bord intuitif"
                  }
                />
                <Feature
                  icon={<Icon as={IoPeople} color={"yellow.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={
                    "Assurez une relation saine et transparente avec vos locataires."
                  }
                />
                <Feature
                  icon={
                    <Icon as={IoDocument} color={"green.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={
                    "Générez automatiquement des quittances de loyer, des rappels et bien plus"
                  }
                />
              </Stack>
            </Stack>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 1 }}
            alignSelf={"flex-end"}
            alignItems={"center"}
          >
            <Image
              className="header_image"
              rounded={"md"}
              alt={"feature image"}
              src={"/Family3.png"}
              objectFit={"fill"}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
