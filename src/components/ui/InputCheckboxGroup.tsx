import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type InputCheckboxGroupProps = {
  name: string;
  label: string;
  isRequired: boolean;
};

export const InputCheckboxGroup: React.FC<InputCheckboxGroupProps> = ({
  name,
  label,
  isRequired,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl
          {...field}
          required
          component="fieldset"
          variant="standard"
        >

            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Typography variant="body1" fontWeight={700} color="#4C5153">
                {label}
              </Typography>
              {isRequired && <Stack color="red">*</Stack>}
            </Box>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="pix" />}
              label="Pix"
            />
            <FormControlLabel
              control={<Checkbox name="creditCard" />}
              label="Cartão de crédito"
            />
            <FormControlLabel
              control={<Checkbox name="bankSlip" />}
              label="Boleto Bancário"
            />
          </FormGroup>
        </FormControl>
      )}
    />
  );
};
