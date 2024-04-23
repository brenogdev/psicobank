import React from "react";
import { Stepper, Step, StepLabel, useTheme, Typography } from "@mui/material";

interface StepperProps {
  activeStep: number;
}

export const StepperComponent: React.FC<StepperProps> = ({ activeStep }) => {
  const theme = useTheme();

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      <Step>
        <StepLabel>
          <Typography
            variant="caption"
            color={activeStep > 0 ? theme.palette.primary.main : "#3D3D3D"}
          >
            Cadastrar uma conta
          </Typography>
        </StepLabel>
      </Step>
      <Step>
        <StepLabel>
          <Typography
            variant="caption"
            color={
              activeStep > 1
                ? theme.palette.primary.main
                : activeStep === 1
                ? "#3D3D3D"
                : "#AEB9BF"
            }
          >
            Canais de envio e Mensagem de cobrança
          </Typography>
        </StepLabel>
      </Step>
      <Step>
        <StepLabel>
          <Typography
            variant="caption"
            color={
              activeStep > 2
                ? theme.palette.primary.main
                : activeStep === 2
                ? "#3D3D3D"
                : "#AEB9BF"
            }
          >
            Forma de pagamento da cobrança
          </Typography>
        </StepLabel>
      </Step>
    </Stepper>
  );
};
