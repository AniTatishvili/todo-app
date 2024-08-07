import React from "react";
import {
  Flex,
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
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const HeaderMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n } = useTranslation();

  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      p={10}
      bg={colorMode === "light" ? "#d0cfcf" : "#6e6767"}
    >
      <NavLink to={"/"}>Logo</NavLink>
      <Flex gap={10}>
        <List display={"flex"} alignItems={"center"} gap={3}>
          <ListItem>
            <NavLink
              to={"/"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#285e61" : "",
                };
              }}
            >
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to={"/edit"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#285e61" : "",
                };
              }}
            >
              Edit
            </NavLink>
          </ListItem>
        </List>
        <Flex alignItems={"center"} gap={10}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <BsSunFill /> : <BsMoonFill />}
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
};
