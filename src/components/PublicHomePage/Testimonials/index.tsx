import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Testimonial from "./Testimonial";
import TestimonialContent from "./TestimonialContent";
import TestimonialHeading from "./TestimonialHeading";
import TestimonialText from "./TestimonialText";
import TestimonialAvatar from "./TestimonialAvatar";

const Testimonials = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Témoignages Clients</Heading>
          <Text>Découvrez ce que nos clients pensent de notre service.</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Simple, clair et lisible</TestimonialHeading>
              <TestimonialText>
                Depuis que j&apos;utilise Albert, non seulement je gagne un
                temps précieux, mais je me sens aussi rassuré. Tout est
                organisé, clair et à portée de main.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://media.licdn.com/dms/image/D4E35AQEUjWaCIqpnAg/profile-framedphoto-shrink_800_800/0/1698770734760?e=1699380000&v=beta&t=cSNCABTQIImf7vUv0EDb3-WFu7ai93aNj1l64IiifA4"
              }
              name={"Martin Catrysse"}
              title={"CEO chez Facebook"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Gestion facilitée</TestimonialHeading>
              <TestimonialText>
                Avec Albert, la gestion de mes appartements est devenue un jeu
                d&apos;enfant ! Je recommande vivement !
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://media.licdn.com/dms/image/C5603AQGZ1TpLdpLyWg/profile-displayphoto-shrink_200_200/0/1553006965567?e=1704326400&v=beta&t=0noCSndiReKcHsFRieC2phgfIDPFFW-4QKBfWmFTvJo"
              }
              name={"Lucas Rodriguez"}
              title={"CEO chez Google"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Un service complet</TestimonialHeading>
              <TestimonialText>
                J&apos;apprécie particulièrement les analyses détaillées qui
                m&apos;aident à prendre les bonnes décisions pour mes
                investissements.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://media.licdn.com/dms/image/C4D03AQEUUcdZKEZ0Gw/profile-displayphoto-shrink_200_200/0/1580855357314?e=1704326400&v=beta&t=EfP-c56AGtxkDDKSeLY9yqGIkIywK_UWQgENSuzH1bc"
              }
              name={"Pierre-Louis Artus"}
              title={"CEO chez Apple"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
