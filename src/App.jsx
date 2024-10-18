import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HelloWorld from "./HelloWorld";
import {Outlet} from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelloWorld />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
