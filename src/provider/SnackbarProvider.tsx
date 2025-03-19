import { Box, Slide, Snackbar } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

type Severity = "success" | "error" | "warning" | "info";

type SnackbarContextType = {
  openSnackbar: (message: string, type: Severity) => void;
};

type SnackbarContextProps = {
  openSnackbar: (message: string, type: Severity) => void;
};

const SnackbarContext = createContext<SnackbarContextType>({
  openSnackbar: () => {},
});

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("success");

  const openSnackbar = (message: string, type: Severity) => {
    setMessage(message);
    setSeverity(type);
    setIsOpen(true);
  };

  const closeSnackbar = () => {
    setIsOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={3000}
        TransitionComponent={Slide}
        open={isOpen}
        onClose={closeSnackbar}
      />

      <Box sx={{ color: "white" }}>{message}</Box>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextProps =>
  useContext(SnackbarContext);
