"use client";

import React from "react";
import { FormRegisterAccount } from "@/components/FormRegisterAccount";
import { ModalRegister } from "@/components/ModalRegister";
import { Box, Button, } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

export default function Root() {
  const [openModal, setOpemModal] = React.useState<boolean>(false);

  const methods = useForm();

  const handleNextSubmitForm = (data: any) => {
    console.log(data);
  };

  return (
      <FormProvider {...methods}>
        <ModalRegister
          open={openModal}
          onCancel={() => setOpemModal(false)}
          stepper={<h1>stepper aqui</h1>}
          content={<FormRegisterAccount />}
          actions={
            <>
              <Button
                onClick={() => setOpemModal(false)}
                variant="outlined"
                sx={{ textTransform: "capitalize", width: 124 }}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                sx={{ textTransform: "capitalize", width: 124 }}
                type="submit"
                onClick={methods.handleSubmit(handleNextSubmitForm)}
              >
                Próximo
              </Button>
            </>
          }
        />
      </FormProvider>
  );
}
