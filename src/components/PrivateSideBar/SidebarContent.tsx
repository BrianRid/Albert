import {
  Box,
  type BoxProps,
  CloseButton,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { FiFile, FiHome, FiUser } from "react-icons/fi";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const LinkItems = [
    { name: "Accueil", icon: FiHome, href: "/" },
    { name: "Mes biens", icon: FiHome, href: "/properties" },
    { name: "Mes locataires", icon: FiUser, href: "/tenants" },
    { name: "Mes documents", icon: FiFile, href: "/files" },
  ];

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white.100", "white.100")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.100", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent={["space-between", "center"]}
      >
        <Image
          src="/Albert.png"
          width={50}
          height={50}
          rounded={"3xl"}
          alt="Albert"
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
