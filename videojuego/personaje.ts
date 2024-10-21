export class personaje {
    nombre: string;
    nivel: number;
    puntosDeVida: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    atacar(): string {
        return `${this.nombre} ataca!`;
    }

    defender(): string {
        return `${this.nombre} se defiende!`;
    }
}
