import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
]);

export default router;
