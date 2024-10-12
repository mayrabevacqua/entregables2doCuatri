import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    private tipoDeMoto: string; 

    constructor(patente: string, modelo: number, marca: string, fechaDeRegistro: number, tipoDeMoto: string) {
        super('Moto', patente, modelo, marca, fechaDeRegistro);
        this.tipoDeMoto = tipoDeMoto;
    }

    public getTipoDeMoto(): string {
        return this.tipoDeMoto;
    }
}