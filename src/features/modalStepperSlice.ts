import { RootState } from "@/@types/redux";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 isOpened: false,
 formStep: 1,
 form: {
    registerAnAccount: {},
    shippingChannelsBillingMessage: {},
    formOfPaymentOfTheCharge: {}
 },
 nextStep: false
};

export const modalStepperSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
});

export const { } = modalStepperSlice.actions;

export const handleModalSelector = (state: RootState) => state;

export default modalStepperSlice.reducer;