import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./layouts/index.js";
import { Home, Login } from "./pages/index.js";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Insert your routes here  */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>}/>
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
