import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { signIn, signOut, useSession } from "next-auth/react";

interface Props {
  children: React.ReactNode;
  href: string;
  key: string;
}

interface NavProps {
  links: Array<{ href: string; label: string }>;
}

const NavLink = (props: Props) => {
  const { children, href } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.100", "gray.700"),
      }}
      href={href}
    >
      {children}
    </Box>
  );
};

export default function Navbar(props: NavProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { links } = props;

  const { data: session } = useSession();
  const user = session && session.user;

  return (
    <Box bg={useColorModeValue("gray.100", "gray.100")} px={4}>
      <Flex
        minH="fit-content"
        h={16}
        py={{ base: 2, md: 10 }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton
          size={["xs", "md"]}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Image
              src="/Albert.png"
              width={50}
              height={50}
              alt="Albert"
              rounded={"3xl"}
            />
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              {user && (
                <Avatar
                  size={"sm"}
                  src={
                    user.image ??
                    "https://res.cloudinary.com/dpec7wjtk/image/upload/v1633977366/next-chakra-boilerplate/placeholder.png"
                  }
                />
              )}
            </MenuButton>
            <MenuList>
              <MenuItem>Mon compte</MenuItem>
              <MenuItem onClick={() => signOut()}>Déconnexion</MenuItem>
            </MenuList>
          </Menu>
          {!user && <Button onClick={() => signIn("google")}>Connexion</Button>}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map((link) => (
              <NavLink href={link.href} key={link.href}>
                {link.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
