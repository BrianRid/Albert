import React from "react";
import { Box, Flex, Icon, type FlexProps } from "@chakra-ui/react";
import { type IconType } from "react-icons";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  href: string;
}

const NavItem = ({ href, icon, children, ...rest }: NavItemProps) => {
  const router = useRouter();
  const isActive = href === router.pathname;

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        bg={isActive ? "blue.50" : "transparent"}
        cursor="pointer"
        _hover={{
          bg: "blue.50",
          color: "blue.900",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            color={isActive ? "blue.900" : "blue.900"}
            _groupHover={{
              color: "blue.900",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
