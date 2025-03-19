import React from "react";
import {
  Modal as MuiModal,
  Fade,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";

export interface Props {
  isOpen: boolean;
}

export const Loading: React.FC<Props> = ({ isOpen }) => {
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
