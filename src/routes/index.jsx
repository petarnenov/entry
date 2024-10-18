import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Users from "../components/users/Users";
import UserDetails from "../components/users/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App />,
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
