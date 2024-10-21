import { personaje} from "./personaje";

export class mago extends personaje {
    magia: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number, magia: number) {
        super(nombre, nivel, puntosDeVida);
        this.magia = magia;
    }

    atacar(): string {
        return `${this.nombre} lanza un hechizo!`;
    }

    hechizoEspecial(): string {
        return `${this.nombre} lanza un poderoso hechizo!`;
    }
}