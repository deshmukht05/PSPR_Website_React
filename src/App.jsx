import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Service";
import { Projects } from "./pages/Projects";
import { OurTeam } from "./pages/Team";
import AppLayout from "./Layout/AppLayout";
import { ErrorPage } from "./pages/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/service",
          element: <Services />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/team",
          element: <OurTeam />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />
};

export default App;
