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
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
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
    <SimpleGrid py={12} columns={{ base: 1, md: 2 }} spacing={10}>
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
        <Heading>A digital Product design agency</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore
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
            icon={
              <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
            }
            iconBg={useColorModeValue("yellow.100", "yellow.900")}
            text={"Business Planning"}
          />
          <Feature
            icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
            iconBg={useColorModeValue("green.100", "green.900")}
            text={"Financial Planning"}
          />
          <Feature
            icon={<Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />}
            iconBg={useColorModeValue("purple.100", "purple.900")}
            text={"Market Analysis"}
          />
        </Stack>
      </Stack>

      <Flex>
        <Image
          className="header_image"
          rounded={"md"}
          alt={"feature image"}
          src={"/Family3.png"}
          objectFit={"fill"}
        />
      </Flex>
    </SimpleGrid>
  );
}
