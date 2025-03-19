import { useState } from "react";
import { Box, Button, Snackbar } from "@mui/material";
import { Loading } from "../components/Loading";
import { DataConfigModal } from "../components/DataConfigModal";

const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "user name" });
    }, 4000);
  });
};

const updateData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "user name" });
    }, 4000);
  });
};

export const Before = () => {
  const [isOpenLoading, setIsOpenLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");

  const onClickGetDataButton = async () => {
    try {
      setIsOpenLoading(true);
      await getData();
      setMessage("取得に成功しました");
      setIsOpenSnackbar(true);
    } catch (error) {
      setMessage("取得に失敗しました");
      setIsOpenSnackbar(true);
    } finally {
      setIsOpenLoading(false);
    }
  };

  const onClickUpdateDataButton = async () => {
    try {
      setIsOpenLoading(true);
      await updateData();
      setMessage("更新に成功しました");
      setIsOpenSnackbar(true);
    } catch (error) {
      setMessage("更新に失敗しました");
      setIsOpenSnackbar(true);
    } finally {
      setIsOpenLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Button onClick={onClickGetDataButton}>Get Data</Button>

      <Button
        onClick={() => {
          setIsOpenModal(true);
        }}
      >
        Open Modal
      </Button>

      <DataConfigModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        updateData={onClickUpdateDataButton}
      />

      <Loading isOpen={isOpenLoading} />

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={3000}
        open={isOpenSnackbar}
        onClose={() => setIsOpenSnackbar(false)}
      >
        <Box sx={{ color: "white" }}>{message}</Box>
      </Snackbar>
    </Box>
  );
};
