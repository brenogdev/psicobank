import React from "react";
import { Grid } from "@mui/material";
import { InputSelect } from "./ui/InputSelect";
import { InputText } from "./ui/InputText";
import { InputMask } from "./ui/InputMask";

export const FormRegisterAccount = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={12}>
        <InputSelect
          isRequired
          label="esss"
          name="teste"
          options={[
            {
              label: "João Silva",
              value: "1",
            },
          ]}
          disabled
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <InputSelect
          isRequired
          label="esss"
          name="teste"
          options={[
            {
              label: "João Silva",
              value: "1",
            },
          ]}
          disabled
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <InputSelect
          isRequired
          label="esss"
          name="teste"
          options={[
            {
              label: "João Silva",
              value: "1",
            },
          ]}
          disabled
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <InputText name="example" label="Example" isRequired={true} />
      </Grid>
      <Grid item sm={12} md={6}>
        <InputText name="example" label="Example" isRequired={true} />
      </Grid>
      <Grid item sm={12} md={4}>
        <InputSelect
          isRequired
          label="esss"
          name="teste"
          options={[
            {
              label: "João Silva",
              value: "1",
            },
          ]}
          disabled
        />
      </Grid>
      <Grid item sm={12} md={4}>
        <InputMask
          mask="999.999.999-99"
          label="CPF"
          name="cpf"
          isRequired
          errorMessage="sasas"
        />
      </Grid>
      <Grid item sm={12} md={4}>
        <InputMask
          mask="(99) 9999-9999"
          label="Telefone"
          name="telefone"
          isRequired
          errorMessage="testet"
        />
      </Grid>
      <Grid item sm={12} md={12}>
        <InputText name="fullName" label="Nome Completo" isRequired={true} />
      </Grid>
      <Grid item sm={12} md={4}>
        <InputMask
          mask="99.999-999"
          label="CEP"
          name="cep"
          isRequired
          errorMessage="testet"
        />
      </Grid>
      <Grid item sm={12} md={4}>
        <InputSelect
          isRequired
          label="Estado"
          name="teste"
          options={[
            {
              label: "João Silva",
              value: "1",
            },
          ]}
          disabled
        />
      </Grid>
      <Grid item sm={12} md={4}>
        <InputText name="fullName" label="Cidade" isRequired={true} />
      </Grid>
      <Grid item sm={12} md={8}>
        <InputText name="fullName" label="Endereço" isRequired={true} />
      </Grid>
      <Grid item sm={12} md={4}>
        <InputText name="fullName" label="Número" isRequired={true} />
      </Grid>
    </Grid>
  );
};
