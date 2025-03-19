import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  Modal as MuiModal,
  Fade,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";

type LoadingContextType = {
  isLoading: boolean;
  openLoading: () => void;
  closeLoading: () => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const openLoading = () => setIsLoading(true);
  const closeLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, openLoading, closeLoading }}>
      {children}
      <LoadingComponent isOpen={isLoading} />
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

const LoadingComponent: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <MuiModal open={isOpen}>
      <Fade in={isOpen}>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            gap: 2,
            alignItems: "flex-end",
            justifyContent: "right",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "50px",
              width: "200px",
            }}
          >
            <CircularProgress sx={{ color: "white" }} size={20} />
            <Typography sx={{ color: "white" }}>Now loading...</Typography>
          </Box>
        </Box>
      </Fade>
    </MuiModal>
  );
};
