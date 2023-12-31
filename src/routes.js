import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/login";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);

export default appRouter;
