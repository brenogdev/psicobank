import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

type InputCheckboxProps = {
  name: string;
  label: string;
};

export const InputCheckbox: React.FC<InputCheckboxProps> = ({
  name,
  label,
}) => {
  const { register } = useFormContext();

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox {...register(`${name}`)} />}
        label={label}
      />
    </FormGroup>
  );
};
