"use client";

import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppRedux";
import {
  closeModal,
  handleModalSelector,
  setFormData,
} from "@/features/modalStepperSlice";
import { ModalActions } from "@/components/ui/ModalActions";
import { StepperComponent } from "@/components/StepperComponent";
import { FormRegisterAccount } from "@/components/FormRegisterAccount";
import { FormShippingChannelsBillingMessage } from "@/components/FormShippingChannelsBillingMessage";
import { FormOfPaymentOfTheCharge } from "@/components/FormOfPaymentOfTheCharge";
import {
  RegisterPsicoBank,
  RegisterPsicoBankProps,
} from "@/schemas/registerPsicoBank";
import { toast } from "react-toastify";

export default function Root() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const { isOpened } = useAppSelector(handleModalSelector);

  const methods = useForm<RegisterPsicoBankProps>({
    resolver: zodResolver(RegisterPsicoBank),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const dispatch = useAppDispatch();

  const error = methods.formState.errors;

  const handleNextStepper = () => {
    // if (error) {
    //   toast.error("Os campos obrigatórios não foram preenchidos");
      
    // }
    // if (!error) {
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };

  const handleResetStepper = () => {
    dispatch(closeModal());
    setActiveStep(0);
  };

  const handleSubmitForm = (data: RegisterPsicoBankProps) => {
    dispatch(setFormData(data));
    methods.reset();
    dispatch(closeModal());
  };

  return (
    <FormProvider {...methods}>
      <Modal
        open={isOpened}
        onCancel={handleResetStepper}
        stepper={<StepperComponent activeStep={activeStep} />}
        content={
          <AnimatePresence mode="wait">
            {activeStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FormRegisterAccount />
              </motion.div>
            )}
            {activeStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FormShippingChannelsBillingMessage />
              </motion.div>
            )}
            {activeStep === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FormOfPaymentOfTheCharge />
              </motion.div>
            )}
          </AnimatePresence>
        }
        actions={
          <ModalActions
            activeStep={activeStep}
            onCancel={handleResetStepper}
            onNext={handleNextStepper}
            onFinish={methods.handleSubmit(handleSubmitForm)}
          />
        }
      />
    </FormProvider>
  );
}
