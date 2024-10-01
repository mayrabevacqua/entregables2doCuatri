"use strict";
// Implementar la clase registroAutomotor (autos, motos, camiones)
// Métodos: AgregarVehículo get set
// Modificar un vehículo, dar de baja
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroAutomotor = void 0;
var registroAutomotor = /** @class */ (function () {
    function registroAutomotor(vehiculo, patente, modelo, marca, fechaDeRegistro, estaActivo) {
        this.vehiculo = vehiculo;
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
        this.fechaDeRegistro = fechaDeRegistro;
        this.estaActivo = true; // todos los vehículos estarán activos al principio
    }
    //Métodos get
    registroAutomotor.prototype.getVehiculo = function () {
        return this.vehiculo;
    };
    registroAutomotor.prototype.getPatente = function () {
        return this.patente;
    };
    registroAutomotor.prototype.getModelo = function () {
        return this.modelo;
    };
    registroAutomotor.prototype.getMarca = function () {
        return this.marca;
    };
    registroAutomotor.prototype.getFechaDeRegistro = function () {
        return this.fechaDeRegistro;
    };
    registroAutomotor.prototype.getestaActivo = function () {
        return this.estaActivo;
    };
    // Métodos set
    registroAutomotor.prototype.setVehiculo = function (vehiculo) {
        this.vehiculo = vehiculo;
    };
    registroAutomotor.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    registroAutomotor.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    registroAutomotor.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    registroAutomotor.prototype.setFechaDeRegistro = function (fechaDeRegistro) {
        this.fechaDeRegistro = fechaDeRegistro;
    };
    registroAutomotor.prototype.setestaActivo = function (estaActivo) {
        this.estaActivo = estaActivo;
    };
    //Método agregar vehículo
    registroAutomotor.prototype.agregarVehiculo = function (vehiculo, patente, modelo, marca, fechaDeRegistro) {
        this.setVehiculo(vehiculo);
        this.setPatente(patente);
        this.setModelo(modelo);
        this.setMarca(marca);
        this.setFechaDeRegistro(fechaDeRegistro);
        this.setestaActivo(this.estaActivo);
        console.log("Veh\u00EDculo agregado: ".concat(this.getVehiculo(), ", Patente: ").concat(this.getPatente(), ", Modelo: ").concat(this.getModelo(), ", Marca: ").concat(this.getMarca(), ", Fecha de Registro: ").concat(this.getFechaDeRegistro(), ", Est\u00E1 activo: ").concat(this.estaActivo));
    };
    // Método para modificar un vehículo
    registroAutomotor.prototype.modificarVehiculo = function (vehiculo, patente, modelo, marca, fechaDeRegistro) {
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
        console.log("Veh\u00EDculo modificado: ".concat(this.getVehiculo(), ", Patente: ").concat(this.getPatente(), ", Modelo: ").concat(this.getModelo(), ", Marca: ").concat(this.getMarca(), ", Fecha de Registro: ").concat(this.getFechaDeRegistro(), ", Est\u00E1 activo: ").concat(this.estaActivo));
    };
    registroAutomotor.prototype.darDeBaja = function () {
        this.estaActivo = false; // Lo marcamos como inactivo
        console.log("Veh\u00EDculo ".concat(this.getVehiculo(), " dado de baja."));
    };
    return registroAutomotor;
}());
exports.registroAutomotor = registroAutomotor;
