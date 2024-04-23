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
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ModalAlert } from "./ModalAlert";
import { TransitionProps } from "@mui/material/transitions";

type ModalProps = {
  open: boolean;
  onCancel: () => void;
  content: React.JSX.Element;
  stepper: React.JSX.Element;
  actions: React.JSX.Element;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal: React.FC<ModalProps> = ({
  open,
  content,
  onCancel,
  stepper,
  actions,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [maxWidth] = React.useState<DialogProps["maxWidth"]>("md");

  return (
    <Dialog
      open={open}
      fullScreen={fullScreen}
      maxWidth={maxWidth}
      fullWidth
      TransitionComponent={Transition}
      keepMounted
    >
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
        <Box mt={3}>{stepper}</Box>
        <Box my={2}>
          <Typography variant="h2">
            Preencha os itens a seguir para configurar o PsicoBank
          </Typography>
        </Box>
        <Box>{content}</Box>
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};
