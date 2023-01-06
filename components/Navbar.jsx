import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";


export const Navbar = () => {
  return (
    <Box
      bg={"#E9E9E9"}
      color={"#000000"}
      height={"143px"}
      display={"flex"}
      alignItems={"center"}
      pl={"8.99%"}
    >
      <Link href="/">
        <Text
          width={"263px"}
          height={"58px"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"800"}
          fontSize={"48px"}
          lineHeight={"58px"}
          color={"#000000"}
        >
          Eqaim Blog
        </Text>
      </Link>
    </Box>
  );
};
