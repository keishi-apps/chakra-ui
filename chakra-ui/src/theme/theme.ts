import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styled: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800",
      },
    },
  },
});
export default theme;
