import { Link } from "@chakra-ui/react";

const MenuItem = ({ url, icon, label }) => {
  return (
    <Link
      href={url}
      fontSize="sm"
      letterSpacing="uppercase"
      mr="5"
      display="flex"
      alignItems="center"
      color="whiteAlpha.600"
      _hover={{ textDecor: "none", color: "white" }}
    >
      {icon}
      {label}
    </Link>
  );
};

export default MenuItem;
