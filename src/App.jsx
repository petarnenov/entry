import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

import HelloWorld from "./HelloWorld";
import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundaryFallback from "./ErrorBoundaryFallback";
import TopNavigation from "./components/TopNavigation";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <QueryClientProvider client={queryClient}>
        <TopNavigation />
        <HelloWorld />
        <Outlet />
      </QueryClientProvider>
    </ErrorBoundary>
  )
};

export default App;
