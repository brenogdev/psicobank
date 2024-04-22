import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export const ModalAlert = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.warning.light}
      width="100%"
      height="auto"
      p={2}
      display="flex"
      flexDirection="column"
      gap={1}
    >
      <Typography color={theme.palette.warning.dark} fontWeight={700} variant="body2">
        Atenção!!! Verifique atentamente a cada dado preenchido no cadastro de
        sua conta.
      </Typography>

      <Typography color={theme.palette.warning.dark} variant="body2">
        • Caso queira cadastrar uma conta de banco CNPJ, verifique se a sua conta
        corrente é CNPJ e preencha o CPF correto do responsável da conta.
      </Typography>
      <Typography color={theme.palette.warning.dark} variant="body2">
      • O preenchimento incorreto das informações pode trazer transtornos no
        momento da transferência do valor para essa conta corrente.
      </Typography>
      <Typography color={theme.palette.warning.dark} variant="body2">
      • Se possível preencha com calma para não ocorrer erros.
      </Typography>
    </Box>
  );
};
