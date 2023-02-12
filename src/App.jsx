import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./routes/sign-in";
import { userApi } from "./services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Welcome</h1>,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    async action({ request }) {
      const fd = await request.formData();
      await userApi.signIn(Object.fromEntries(fd));

      // * Redirect to home page
      return redirect("/");
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
