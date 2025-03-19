import { Routes, Route } from "react-router-dom";
import { Before } from "./pages/before";
import { After } from "./pages/after";
import { SnackbarProvider } from "./provider/SnackbarProvider";
import { ModalProvider } from "./provider/ModalProvider";
import { LoadingProvider } from "./provider/LoadingProvider";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/before" element={<Before />} />
      <Route
        path="/after"
        element={
          <SnackbarProvider>
            <ModalProvider>
              <LoadingProvider>
                <After />
              </LoadingProvider>
            </ModalProvider>
          </SnackbarProvider>
        }
      />
    </Routes>
  );
};
