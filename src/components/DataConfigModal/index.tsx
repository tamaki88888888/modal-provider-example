import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  updateData: () => Promise<void>;
}

export const DataConfigModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  updateData,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <DataConfigContent updateData={updateData} />
    </Modal>
  );
};

type ContentProps = Pick<ModalProps, "updateData">;

export const DataConfigContent: React.FC<ContentProps> = ({ updateData }) => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        border: "1px solid gray",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography sx={{ color: "white" }}>タイトル</Typography>
      <Button onClick={updateData}>更新する</Button>
    </Box>
  );
};
