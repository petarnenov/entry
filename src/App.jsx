import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HelloWorld from "./HelloWorld";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundaryFallback from "./ErrorBoundaryFallback";
import TopNavigation from "./components/TopNavigation";

const queryClient = new QueryClient();

function App() {

  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <QueryClientProvider client={queryClient}>
        <TopNavigation />
        <HelloWorld />
        <Outlet />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
