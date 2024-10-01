// Implementar la clase registroAutomotor (autos, motos, camiones)
// Métodos: AgregarVehículo get set
// Modificar un vehículo, dar de baja

export class registroAutomotor {
    private vehiculo: string; // acá se colocaría si es auto, moto o camión
    private patente: string;
    private modelo: number;
    private marca: string;
    private fechaDeRegistro: number; //se colocaría sólo el año 
    private estaActivo: boolean; // diferencia entre vehículos activos y aquellos que daremos de baja

    constructor(vehiculo: string, patente: string, modelo: number, marca: string, fechaDeRegistro: number, estaActivo: boolean) {
        this.vehiculo = vehiculo;
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
        this.fechaDeRegistro = fechaDeRegistro;
        this.estaActivo = true; // todos los vehículos estarán activos al principio
    }

    //Métodos get
    public getVehiculo(): string {
        return this.vehiculo;
    }

    public getPatente(): string {
        return this.patente;
    }

    public getModelo(): number {
        return this.modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getFechaDeRegistro(): number {
        return this.fechaDeRegistro;
    }
    public getestaActivo(): boolean {
        return this.estaActivo;
    }

    // Métodos set
    public setVehiculo(vehiculo: string): void {
        this.vehiculo = vehiculo;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public setModelo(modelo: number): void {
        this.modelo = modelo;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public setFechaDeRegistro(fechaDeRegistro: number): void {
        this.fechaDeRegistro = fechaDeRegistro;
    }
    public setestaActivo(estaActivo: boolean): void {
        this.estaActivo = estaActivo;
    }

    //Método agregar vehículo
    public agregarVehiculo(vehiculo: string, patente: string, modelo: number, marca: string, fechaDeRegistro: number): void {
        this.setVehiculo(vehiculo);
        this.setPatente(patente);
        this.setModelo(modelo);
        this.setMarca(marca);
        this.setFechaDeRegistro(fechaDeRegistro);
        this.setestaActivo(this.estaActivo);

        console.log(`Vehículo agregado: ${this.getVehiculo()}, Patente: ${this.getPatente()}, Modelo: ${this.getModelo()}, Marca: ${this.getMarca()}, Fecha de Registro: ${this.getFechaDeRegistro()}, Está activo: ${this.estaActivo}`);

    }

    // Método para modificar un vehículo
    public modificarVehiculo(vehiculo?: string, patente?: string, modelo?: number, marca?: string, fechaDeRegistro?: number): void {
        if (vehiculo !== undefined) {
            this.setVehiculo(vehiculo);
        }
        if (patente !== undefined) {
            this.setPatente(patente);
        }
        if (modelo !== undefined) {
            this.setModelo(modelo);
        }
        if (marca !== undefined) {
            this.setMarca(marca);
        }
        if (fechaDeRegistro !== undefined) {
            this.setFechaDeRegistro(fechaDeRegistro);
        }

        console.log(`Vehículo modificado: ${this.getVehiculo()}, Patente: ${this.getPatente()}, Modelo: ${this.getModelo()}, Marca: ${this.getMarca()}, Fecha de Registro: ${this.getFechaDeRegistro()}, Está activo: ${this.estaActivo}`);
    }

    public darDeBaja(): void {
        this.estaActivo = false; // Se marca como inactivo

        console.log(`Vehículo ${this.getVehiculo()} dado de baja.`);
    }

}
