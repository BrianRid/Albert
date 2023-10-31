import { Heading } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

export default TestimonialHeading;
