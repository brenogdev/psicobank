import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectProps,
  Stack,
  Typography,
} from "@mui/material";
import { useFormContext, FieldValues, FieldError } from "react-hook-form";

interface Option {
  value: string | number;
  label: string;
}

interface InputSelectProps {
  name: string;
  label: string;
  options: Option[];
  isRequired: boolean;
  errorMessage?: string;
}

export const InputSelect: React.FC<InputSelectProps & SelectProps> = ({
  name,
  label,
  options,
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
        <Typography variant="body1">{label}:</Typography>
        {isRequired && <Stack color="red">*</Stack>}
      </Box>
      <Select
        labelId={`${name}-label`}
        {...register(name)}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{errorMessage || error.message}</FormHelperText>}
    </FormControl>
  );
};
