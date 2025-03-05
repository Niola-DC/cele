import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage";
import RootLayout from "./components/templates/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
