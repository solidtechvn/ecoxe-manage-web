import { createAsyncThunk } from '@reduxjs/toolkit';
import { pickBy } from 'lodash';
import axios from '../../../shared/config/axios-interceptor';


export interface ILoginForm {
  username: string;
  password: string;
  rememberMe: boolean;
}

export const login = createAsyncThunk(`authenticate`, async (body: ILoginForm, thunkAPI) => {
  try {
    const { data } = await axios.post(`authenticate`, pickBy(body));
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const account = createAsyncThunk(`account`, async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`account`);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
