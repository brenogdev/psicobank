import React from "react";
import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import error from "next/error";

type InputMaskProps = {
  mask: string;
  name: string;
  label: string;
  isRequired: boolean;
  errorMessage?: string;
};

export const InputMask: React.FC<InputMaskProps> = ({
  mask,
  name,
  label,
  isRequired,
  errorMessage,
  ...rest
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="phone"
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <ReactInputMask mask={mask} value={value} onChange={onChange}>
          {(inputProps) => (
            // <TextField
            //   error={!!errors?.phone?.message}
            //   label="Phone"
            //   variant="outlined"
            //   type="text"
            //   fullWidth
            //   required
            //   {...inputProps}
            // />
            <FormControl
              size="small"
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
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
              <TextField
                id={name}
                label=""
                error={!!error}
                helperText={error ? errorMessage || error.message : ""}
                {...rest}
                variant="outlined"
                size="small"
              />
            </FormControl>
          )}
        </ReactInputMask>
      )}
    />
  );
};
