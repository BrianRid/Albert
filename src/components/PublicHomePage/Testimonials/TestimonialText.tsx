import { Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

export default TestimonialText;
