import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from 'types/types';

interface IErrorState {
  isErrorProducts: IError | null;
  isErrorCategory: IError | null;
  isErrorAuth: IError | null;
  isErrorProfile: IError | null;
}

const initialState: IErrorState = {
  isErrorProducts: null,
  isErrorCategory: null,
  isErrorAuth: null,
  isErrorProfile: null,
};

const errorSlice = createSlice({
  name: 'errorState',
  initialState,
  reducers: {
    productsError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorProducts: action.payload };
    },
    categoryError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorCategory: action.payload };
    },
    authError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorAuth: action.payload };
    },
    profileError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorProfile: action.payload };
    },
    clearErrors: () => {
      return initialState;
    },
  },
});

export const { productsError, categoryError, authError, clearErrors, profileError } = errorSlice.actions;

export default errorSlice.reducer;
