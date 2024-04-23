import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export const ModalAlert = ({
  type,
}: {
  type: "success" | "info" | "warning" | "default";
}) => {
  const theme = useTheme();

  const renderBgColorOnType = () => {
    switch (type) {
      case "success":
        return theme.palette.success.light;
      case "info":
        return theme.palette.info.light;
      case "default":
        return theme.palette.info.light;
      case "warning":
        return theme.palette.warning.light;
      default:
        return theme.palette.warning.light;
    }
  };

  return (
    <Box
      bgcolor={renderBgColorOnType()}
      width="100%"
      height="auto"
      p={2}
      display="flex"
      flexDirection="column"
      gap={1}
    >
      {type === "warning" && (
        <>
          <Typography
            color={theme.palette.warning.dark}
            fontWeight={700}
            variant="body2"
          >
            Atenção!!! Verifique atentamente a cada dado preenchido no cadastro
            de sua conta.
          </Typography>

          <Typography
            color={theme.palette.warning.dark}
            variant="body2"
            fontWeight={400}
          >
            • Caso queira cadastrar uma conta de banco CNPJ, verifique se a sua
            conta corrente é CNPJ e preencha o CPF correto do responsável da
            conta.
          </Typography>
          <Typography
            color={theme.palette.warning.dark}
            variant="body2"
            fontWeight={400}
          >
            • O preenchimento incorreto das informações pode trazer transtornos
            no momento da transferência do valor para essa conta corrente.
          </Typography>
          <Typography
            color={theme.palette.warning.dark}
            variant="body2"
            fontWeight={400}
          >
            • Se possível preencha com calma para não ocorrer erros.
          </Typography>
        </>
      )}
      {type === "info" && (
        <>
          <Typography
            color={theme.palette.info.main}
            fontWeight={400}
            variant="body2"
          >
            Esse é a mensagem por e-mail que seus clientes irão receber. Clique
            no campo de texto para editar o conteúdo da mensagem e depois siga
            para o próximo passo.
          </Typography>
        </>
      )}
      {type === "default" && (
        <>
          <Typography
            color={theme.palette.info.main}
            fontWeight={400}
            variant="body2"
          >
            Escolha quais as opções de pagamento que estarão disponíveis para o
            seu cliente no link das mensagens de cobrança;
          </Typography>
        </>
      )}
    </Box>
  );
};
