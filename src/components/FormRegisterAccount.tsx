import React from "react";
import { Grid } from "@mui/material";
import { InputSelect } from "./ui/InputSelect";
import { InputText } from "./ui/InputText";
import { InputMask } from "./ui/InputMask";
import { ACCOUNT_TYPE, BANK, TYPE_OF_PERSON } from "@/constants/formValues";
import { ModalAlert } from "./ui/ModalAlert";

export const FormRegisterAccount = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid item sm={12} xs={12} md={12}>
        <ModalAlert type="warning" />
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <InputText
          name="professional"
          label="Profissional:"
          isRequired
          disabled
          defaultValue={"João Silva"}
        />
      </Grid>
      <Grid item sm={12} xs={12} md={6}>
        <InputSelect isRequired label="Banco:" name="bank" options={BANK} error />
      </Grid>
      <Grid item sm={12} xs={12} md={6}>
        <InputSelect
          isRequired
          label="Tipo de conta:"
          name="accountType"
          options={ACCOUNT_TYPE}
        />
      </Grid>
      <Grid item sm={12} xs={12} md={6}>
        <InputText name="agency" label="Agência:" isRequired />
      </Grid>
      <Grid item sm={12} xs={12} md={6}>
        <InputText
          name="accountWithDigit"
          label="Conta com dígito:"
          isRequired
        />
      </Grid>
      <Grid item sm={12} xs={12} md={4}>
        <InputSelect
          isRequired
          label="Tipo de pessoa:"
          name="typeOfPerson"
          options={TYPE_OF_PERSON}
        />
      </Grid>
      <Grid item sm={12} xs={12} md={4}>
        <InputMask mask="999.999.999-99" label="CPF:" name="cpf" isRequired />
      </Grid>
      <Grid item sm={12} xs={12} md={4}>
        <InputMask
          mask="(99) 9999-9999"
          label="Telefone:"
          name="phone"
          isRequired
        />
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <InputText name="fullName" label="Nome Completo:" isRequired />
      </Grid>
      <Grid item sm={12} xs={12} md={4}>
        <InputMask mask="99.999-999" label="CEP:" name="zipCode" isRequired />
      </Grid>
      <Grid item sm={12} xs={12} md={4}>
        <InputSelect
          isRequired
          label="Estado"
          name="state"
          options={[
            {
              label: "João Silva",
              value: "1",
            },
          ]}
        />
      </Grid>
      <Grid item sm={12} xs={12} md={4}>
        <InputText name="city" label="Cidade:" isRequired />
      </Grid>
      <Grid item sm={12} xs={12} md={8}>
        <InputText name="address" label="Endereço:" isRequired />
      </Grid>
      <Grid item sm={12} xs={12} md={4}>
        <InputText name="number" label="Número:" isRequired />
      </Grid>
    </Grid>
  );
};
