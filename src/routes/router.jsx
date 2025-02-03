import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Contact from "../components/Contact/Contact";
import FetchHero from "../components/FetchHero/FetchHero";
import { AuthProvider } from "../auth/AuthProvider";
import PrivateRoute from "../auth/PrivateRoute";
import Error404 from "../components/Error404/Error404";

export default function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/Encyclopedia"
          element={
            <PrivateRoute>
              <FetchHero />
            </PrivateRoute>
          }
        />
        <Route
          path="/Contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }/>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </AuthProvider>
  );
}
