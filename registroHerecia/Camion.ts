import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    private capacidadCarga: number; 

    constructor(patente: string, modelo: number, marca: string, fechaDeRegistro: number, capacidadCarga: number) {
        super('Camión', patente, modelo, marca, fechaDeRegistro);
        this.capacidadCarga = capacidadCarga;
    }

    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }
}
