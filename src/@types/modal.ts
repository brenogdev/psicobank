export type ModalState = {
  isOpened: boolean;
  formStep: number;
  nextStep: boolean;
  form: {
    professional: string;
    bank: string;
    accountType: string;
    agency: number;
    accountWithDigit: number;
    typeOfPerson: string;
    cpf: string;
    phone: string;
    fullName: string;
    zipCode: string;
    state: string;
    city: string;
    address: string;
    number: number;
  };
};
