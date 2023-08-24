import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiShoppingBag, HiUser } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import SingleMenuItem from "./SingleMenuItem";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="gray.800"
      w="100%"
      pos="fixed"
      zIndex="9999"
      top="0"
      left="0"
    >
      {/* Logo */}
      <Link as={RouterLink} to="/">
        <Heading
          as="h1"
          color="whiteAlpha.800"
          fontWeight="bold"
          size="md"
          letterSpacing="wide"
        >
          Myntra
        </Heading>
      </Link>

      {/* Mobile Menu Icon */}
      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="white" w="5" h="5" />
      </Box>

      {/* Menu */}
      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: "4", md: "0" }}
      >
        <SingleMenuItem
          url="/cart"
          label="Cart"
          icon={<Icon as={HiShoppingBag} mr="1" w="4" h="4" />}
        />

        {userInfo ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDown />}
              _hover={{ textDecor: "none", opacity: "0.7" }}
            >
              {userInfo.name}
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <SingleMenuItem
            url="/login"
            label="Login"
            icon={<Icon as={HiUser} mr="1" w="4" h="4" />}
          />
        )}
      </Box>
    </Flex>
  );
};

export default Header;
