import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
  TextFieldProps,
} from "@mui/material";
import { useFormContext, FieldValues, FieldError } from "react-hook-form";

interface InputTextProps {
  name: string;
  label: string;
  isRequired: boolean;
  errorMessage?: string;
}

export const InputText: React.FC<InputTextProps & TextFieldProps> = ({
  name,
  label,
  isRequired,
  errorMessage,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const error: FieldError | undefined = errors[name] as FieldError;

  return (
    <FormControl
      size="small"
      fullWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
      error={!!error}
    >
      <Box
        id={`${name}-label`}
        component={"label"}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <Typography variant="body1">{label}</Typography>
        {isRequired && <Stack color="red">*</Stack>}
      </Box>
      <TextField
        {...rest}
        {...register(name)}
        id={name}
        error={!!error}
        variant="outlined"
        size="small"
        fullWidth
        sx={{
          "& input:disabled": {
            backgroundColor: "#CCD1D3",
          },
        }}
      />
    </FormControl>
  );
};
