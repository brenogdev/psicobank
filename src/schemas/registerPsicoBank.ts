import { z } from "zod";

export const RegisterPsicoBank = z.object({
  bank: z.string().nonempty(),
  accountType: z.enum(["currentAccount", "savingsAccount"]),
  agency: z.number().max(4),
  accountWithDigit: z.number().max(5),
  typeOfPerson: z.enum(["physicalPerson", "legalPerson"]),
  cpf: z.string().nonempty(),
  phone: z.string().nonempty(),
  fullName: z.string().nonempty(),
  zipCode: z.string().nonempty(),
  state: z.string().nonempty(),
  city: z.string().nonempty(),
  address: z.string().nonempty(),
  number: z.number(),
});

export type RegisterPsicoBankProps = z.infer<typeof RegisterPsicoBank>;
