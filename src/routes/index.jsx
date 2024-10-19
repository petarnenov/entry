import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Users from "../components/users/Users";
import UserDetails from "../components/users/UserDetails";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

export default router;
