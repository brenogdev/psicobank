import React from "react";
import { Box, Button } from "@mui/material";

type ModalActionsProps = {
  onCancel: () => void;
  onNext: () => void;
  onFinish: () => void;
  activeStep: number;
};

export const ModalActions: React.FC<ModalActionsProps> = ({
  onCancel,
  onNext,
  onFinish,
  activeStep,
}) => {
  return (
    <Box display="flex" gap={2.5} alignItems="center" mr={2} mb={2}>
      <Button
        onClick={onCancel}
        variant="outlined"
        sx={{ textTransform: "capitalize", width: 124 }}
        color="secondary"
      >
        Cancelar
      </Button>
      {activeStep > 1 ? (
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", width: 124 }}
          type="submit"
          onClick={onFinish}
        >
          Concluir
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", width: 124 }}
          type="button"
          onClick={onNext}
        >
          Próximo
        </Button>
      )}
    </Box>
  );
};
