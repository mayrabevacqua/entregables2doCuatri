import { personaje} from "./personaje";

export class luchador extends personaje {
    fuerza: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number, fuerza: number) {
        super(nombre, nivel, puntosDeVida);
        this.fuerza = fuerza;
    }

    atacar(): string {
        return `${this.nombre} realiza un ataque fuerte!`;
    }

    golpeCrítico(): string {
        return `${this.nombre} realiza un golpe crítico!`;
    }
}