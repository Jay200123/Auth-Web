import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ProtectedRoutes } from "./components/index.js";
import { MainLayout } from "./layouts/index.js";
import { Home, Login, PageOne } from "./pages/index.js";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Insert your routes here  */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="protected"
            element={
              <ProtectedRoutes>
                <PageOne />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
