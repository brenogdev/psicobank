import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { InputText } from "./ui/InputText";
import { ModalAlert } from "./ui/ModalAlert";
import { InputSelect } from "./ui/InputSelect";
import { Add } from "@mui/icons-material";
import { RichTextEditor } from "./ui/RichTextEditor";

export const FormShippingChannelsBillingMessage = () => {
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
        <ModalAlert type="info" />
      </Grid>
      <Grid item sm={12} xs={12} md={10}>
        <InputSelect
          hasInfo
          isRequired={false}
          label="Marcação dinâmica:"
          name="dynamicTagging"
          options={[
            {
              label: "Teste",
              value: "teste 1",
            },
          ]}
        />
      </Grid>
      <Grid
        item
        sm={12}
        xs={12}
        md={2}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button startIcon={<Add />} variant="outlined" sx={{ width: 124 }}>
          Inserir
        </Button>
      </Grid>
      <Grid item sm={12} xs={12} md={12}>
        <RichTextEditor
          isRequired={false}
          label="Conteúdo da mensagem:"
          name="messageEmail"
        />
      </Grid>
    </Grid>
  );
};
