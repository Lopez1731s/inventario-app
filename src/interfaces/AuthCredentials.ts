export interface AuthCredentials {
    correo: string;
    contrasenia: string;
}

export interface AuthState {
    sub: number | null;
    correo: string | null;
    nombre: string | null;
    roles: string | null;
    iat: number | null;
    exp: number | null;
}