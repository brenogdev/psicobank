import React from "react";
import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import ReactInputMask from "react-input-mask";

type InputMaskProps = {
  mask: string;
  name: string;
  label: string;
  isRequired: boolean;
  isSmall?: boolean;
};

export const InputMask: React.FC<InputMaskProps> = ({
  mask,
  name,
  label,
  isRequired,
  isSmall,
  ...rest
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error: FieldError | undefined = errors[name] as FieldError;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <ReactInputMask mask={mask} value={value} onChange={onChange}>
          {(inputProps) => (
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
                id={name}
                label=""
                error={!!error}
                {...rest}
                variant="outlined"
                size="small"
                sx={isSmall ? { width: 155 } : { width: "100%" }}
              />
            </FormControl>
          )}
        </ReactInputMask>
      )}
    />
  );
};
