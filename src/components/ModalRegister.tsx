import React from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ModalAlert } from "./ModalAlert";

type ModalRegisterProps = {
  open: boolean;
  onCancel: () => void;
  content: React.JSX.Element;
  stepper: React.JSX.Element;
  actions: React.JSX.Element;
};

export const ModalRegister: React.FC<ModalRegisterProps> = ({
  open,
  content,
  onCancel,
  stepper,
  actions
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [maxWidth] = React.useState<DialogProps["maxWidth"]>("md");

  return (
    <Dialog open={open} fullScreen={fullScreen} maxWidth={maxWidth} fullWidth>
      <DialogTitle
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color="#3D3D3D"
      >
        <Typography variant="h1">Ativar o PsicoBank</Typography>
        <IconButton onClick={onCancel}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box>{stepper}</Box>
        <Box my={2}>
          <Typography variant="h2">
            Preencha os itens a seguir para configurar o PsicoBank
          </Typography>
        </Box>
        <Box mb={2}>
          <ModalAlert />
        </Box>
        {content}
      </DialogContent>
      <DialogActions>
       {actions}
      </DialogActions>
    </Dialog>
  );
};
