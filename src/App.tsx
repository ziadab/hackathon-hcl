import { Outlet } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <div className="grid h-screen font-bold place-items-center">
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </div>
  );
}
