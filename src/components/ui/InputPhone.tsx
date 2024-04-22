import React from "react";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import ReactInputMask from "react-input-mask";

export const InputPhone = () => {
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
        <ReactInputMask
          mask="(99) 9 9999-9999"
          value={value}
          onChange={onChange}
        >
          {(inputProps) => (
            <TextField
              error={!!errors?.phone?.message}
              label="Phone"
              variant="outlined"
              type="text"
              fullWidth
              required
              {...inputProps}
            />
          )}
        </ReactInputMask>
      )}
    />
  );
};
