import { RootState } from "@/@types/redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
  formStep: 1,
  form: {},
  nextStep: false,
};

export const modalStepperSlice = createSlice({
  name: "MODAL_STEPPER",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpened = true;
    },
    closeModal: (state) => {
      state.isOpened = false;
    },
    nextStep: (state) => {
      state.nextStep = true;
    },
    previousStep: (state) => {
      state.nextStep = false;
    },
    setFormStep: (state, action) => {
      state.formStep = action.payload;
    },
    setFormData: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  nextStep,
  previousStep,
  setFormStep,
 setFormData
} = modalStepperSlice.actions;

export const handleModalSelector = (state: RootState) => state.modalStepper;

export default modalStepperSlice.reducer;
