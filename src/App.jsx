import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./routes/sign-in";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
