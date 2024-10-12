import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
    private cantidadPuertas: number; 

    constructor(patente: string, modelo: number, marca: string, fechaDeRegistro: number, cantidadPuertas: number) {
        super('Auto', patente, modelo, marca, fechaDeRegistro);
        this.cantidadPuertas = cantidadPuertas;
    }

    public getCantidadPuertas(): number {
        return this.cantidadPuertas;
    }
}
