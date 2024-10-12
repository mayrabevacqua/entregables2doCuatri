import { Vehiculo } from "./Vehiculo";

export class registroAutomotor {
    private vehiculos: Vehiculo[] = [];

    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
        console.log(`Vehículo agregado: ${vehiculo.getVehiculo()}, Patente: ${vehiculo.getPatente()}, Modelo: ${vehiculo.getModelo()}, Marca: ${vehiculo.getMarca()}, Fecha de Registro: ${vehiculo.getFechaDeRegistro()}, Está activo: ${vehiculo.getEstaActivo()}`);
    }

    public modificarVehiculo(patente: string, vehiculo?: string, modelo?: number, marca?: string, fechaDeRegistro?: number): void {
        const vehiculoEncontrado = this.vehiculos.find(v => v.getPatente() == patente);
        if (vehiculoEncontrado) {
            if (vehiculo) vehiculoEncontrado.setVehiculo(vehiculo);
            if (modelo) vehiculoEncontrado.setModelo(modelo);
            if (marca) vehiculoEncontrado.setMarca(marca);
            if (fechaDeRegistro) vehiculoEncontrado.setFechaDeRegistro(fechaDeRegistro);
            console.log(`Vehículo modificado: ${vehiculoEncontrado.getVehiculo()}, Patente: ${vehiculoEncontrado.getPatente()}, Modelo: ${vehiculoEncontrado.getModelo()}, Marca: ${vehiculoEncontrado.getMarca()}, Fecha de Registro: ${vehiculoEncontrado.getFechaDeRegistro()}, Está activo: ${vehiculoEncontrado.getEstaActivo()}`);
        } else {
            console.log(`Vehículo con patente ${patente} no encontrado.`);
        }
    }

    public darDeBaja(patente: string): void {
        const vehiculoEncontrado = this.vehiculos.find(v => v.getPatente() == patente);
        if (vehiculoEncontrado) {
            vehiculoEncontrado.darDeBaja();
        } else {
            console.log(`Vehículo con patente ${patente} no encontrado.`);
        }
    }

}