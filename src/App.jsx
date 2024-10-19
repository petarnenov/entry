import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

import HelloWorld from "./HelloWorld";
import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundaryFallback from "./ErrorBoundaryFallback";
import TopNavigation from "./components/TopNavigation";
import SidebarNavigation from "./components/SidebarNavigation";
import MainWrapper from "./components/MainWrapper";
import BottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

import "./styles/global.scss";
import MainContent from "./components/MainContent";

const App = () => {

  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <QueryClientProvider client={queryClient}>
        <TopNavigation />
        <MainWrapper>
          <SidebarNavigation />
          <MainContent>
            <Outlet />
          </MainContent>
        </MainWrapper>
        <BottomNavigation />
      </QueryClientProvider>
    </ErrorBoundary>
  )
};

export default App;
