import { combineReducers } from "redux";
import modalStepperSlice from "@/features/modalStepperSlice";

export const rootReducer = combineReducers({
    modalStepper: modalStepperSlice
});
