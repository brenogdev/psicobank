import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { InputText } from "./ui/InputText";
import { ModalAlert } from "./ui/ModalAlert";
import { InputCheckboxGroup } from "./ui/InputCheckboxGroup";
import { InputCheckbox } from "./ui/InputCheckbox";
import { InputMask } from "./ui/InputMask";

export const FormOfPaymentOfTheCharge = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} xs={12} md={12}>
        <InputText
          name="professional"
          label="Profissional:"
          isRequired
          disabled
          defaultValue={"João Silva"}
        />
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <Typography variant="h2">Enviar cobrança por e-mail:</Typography>
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <ModalAlert type="default" />
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <InputCheckboxGroup
          label="Disponibilizar meios de pagamento:"
          name="providePaymentMethods"
          isRequired
        />
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <Divider />
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <Typography variant="body1" color="#4C5153" fontWeight={700}>
          Definir multas e juros para todos os boletos após o vencimento
        </Typography>
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <InputCheckbox label="Cobrar multa" name="chargeAFine" />
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <InputMask
          isRequired={false}
          mask="9,9"
          label="Valor da multa em %:"
          name="fineValueIn"
          isSmall
        />
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <InputCheckbox
          label="Cobrar juros por dia de atraso (valor 1% ao mês)"
          name="chargeInterestPerAayOfDelay"
        />
      </Grid>
    </Grid>
  );
};
