import { personaje} from "./personaje";

export class arquero extends personaje {
    agilidad: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number, agilidad: number) {
        super(nombre, nivel, puntosDeVida);
        this.agilidad = agilidad;
    }

    atacar(): string {
        return `${this.nombre} dispara una flecha!`;
    }

    disparoPreciso(): string {
        return `${this.nombre} realiza un disparo preciso!`;
    }
}