import { Rol } from "../enums/enums";

export interface Medico {
    email: string;
    nombre: string;
    apellido: string;
    documento: number;
    especialidades: string[];
}

export interface UsuarioStandard {
    email: string;
    nombre: string;
    apellido: string;
    documento: number;
    rol: Rol;
}