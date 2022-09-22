import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../interfaces';
import { RootState } from '../store/store';

const initialState : AuthState = {
    sub: null,
    correo: null,
    nombre: null,
    roles: null,
    iat: null,
    exp: null
};

export const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser : (state, action: PayloadAction<AuthState>) => {
            state.sub = action.payload.sub;
            state.correo = action.payload.correo;
            state.nombre = action.payload.nombre;
            state.roles = action.payload.roles;
            state.iat = action.payload.iat;
            state.exp = action.payload.exp;
        }
    },
});