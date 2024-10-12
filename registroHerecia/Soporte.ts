import { registroAutomotor } from "./registroAutomotor";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

export class Soporte extends registroAutomotor {
    public agregarMoto(patente: string, modelo: number, marca: string, fechaDeRegistro: number, tipoDeMoto: string): void {
        const moto = new Moto(patente, modelo, marca, fechaDeRegistro, tipoDeMoto);
        this.agregarVehiculo(moto);
    }

    public agregarCamion(patente: string, modelo: number, marca: string, fechaDeRegistro: number, capacidadCarga: number): void {
        const camion = new Camion(patente, modelo, marca, fechaDeRegistro, capacidadCarga);
        this.agregarVehiculo(camion);
    }

    public modificarMoto(patente: string, modelo?: number, marca?: string, fechaDeRegistro?: number, tipoDeMoto?: string): void {
        this.modificarVehiculo(patente, 'Moto', modelo, marca, fechaDeRegistro);
    }

    public modificarCamion(patente: string, modelo?: number, marca?: string, fechaDeRegistro?: number, capacidadCarga?: number): void {
        this.modificarVehiculo(patente, 'Camión', modelo, marca, fechaDeRegistro);
    }

    public darDeBajaMoto(patente: string): void {
        this.darDeBaja(patente);
    }

    public darDeBajaCamion(patente: string): void {
        this.darDeBaja(patente);
    }
}
