"use client";

import React from "react";
import { FormRegisterAccount } from "@/components/FormRegisterAccount";
import { ModalRegister } from "@/components/ModalRegister";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

export default function Root() {
  const methods = useForm();

  const handleNextSubmitForm = (data: any) => {
    console.log(data);
  };

  return (
    <Box>
      <FormProvider {...methods}>
        <ModalRegister
          content={<FormRegisterAccount />}
          actions={
            <>
              <Button
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
        ></ModalRegister>
      </FormProvider>
    </Box>
  );
}
