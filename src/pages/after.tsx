import { Box, Button } from "@mui/material";
import { DataConfigContent } from "../components/DataConfigModal";
import { useSnackbar } from "../provider/SnackbarProvider";
import { useModal } from "../provider/ModalProvider";
import { useLoading } from "../provider/LoadingProvider";

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

export const After = () => {
  const { openSnackbar } = useSnackbar();
  const { openModal } = useModal();
  const { openLoading, closeLoading } = useLoading();

  const onClickGetDataButton = async () => {
    try {
      openLoading();
      await getData();

      openSnackbar("取得に成功しました", "success");
    } catch (error) {
      openSnackbar("取得に失敗しました", "success");
    } finally {
      closeLoading();
    }
  };

  const onClickUpdateDataButton = async () => {
    try {
      openLoading();
      await updateData();

      openSnackbar("更新に成功しました", "success");
    } catch (error) {
      openSnackbar("更新に失敗しました", "success");
    } finally {
      closeLoading();
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
          openModal(<DataConfigContent updateData={onClickUpdateDataButton} />);
        }}
      >
        Open Modal
      </Button>
    </Box>
  );
};
