import React from "react";
import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import { Header } from "../../../widgets/header/header";
import { Footer } from "../../../widgets/footer/footer";

export const PageLayout = () => {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Header />
      <Box width={"100%"} padding={20}>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};
