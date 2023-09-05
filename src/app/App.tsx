import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";
import { HiOutlineTranslate } from "react-icons/hi";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import "./App.css";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n } = useTranslation();

  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      p={10}
      bg={colorMode === "light" ? "#d0cfcf" : "#6e6767"}
    >
      <Link>Logo</Link>
      <Flex gap={10}>
        <List display={"flex"} alignItems={"center"} gap={3}>
          <ListItem>Home</ListItem>
          <ListItem>Edit</ListItem>
        </List>
        <Flex alignItems={"center"} gap={10}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <BsFillSunriseFill />
            ) : (
              <BsFillSunsetFill />
            )}
          </Button>
          <Menu>
            <MenuButton as={Button}>
              <HiOutlineTranslate />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => i18n.changeLanguage()}>en</MenuItem>
              <MenuItem>Geo</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
