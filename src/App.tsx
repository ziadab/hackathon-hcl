import Login from "./pages/Login";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}
