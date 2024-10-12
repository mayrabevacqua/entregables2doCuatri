export class Vehiculo {
    protected vehiculo: string; // tipo de vehículo (auto, moto, camión)
    protected patente: string;
    protected modelo: number;
    protected marca: string;
    protected fechaDeRegistro: number; // año de registro
    protected estaActivo: boolean;

    constructor(vehiculo: string, patente: string, modelo: number, marca: string, fechaDeRegistro: number) {
        this.vehiculo = vehiculo;
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
        this.fechaDeRegistro = fechaDeRegistro;
        this.estaActivo = true; // todos los vehículos están activos al inicio
    }

    // Métodos get
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

    public getEstaActivo(): boolean {
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

    public darDeBaja(): void {
        this.estaActivo = false;
        console.log(`Vehículo ${this.getVehiculo()} dado de baja.`);
    }
}
