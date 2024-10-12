"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(vehiculo, patente, modelo, marca, fechaDeRegistro) {
        this.vehiculo = vehiculo;
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
        this.fechaDeRegistro = fechaDeRegistro;
        this.estaActivo = true; // todos los vehículos están activos al inicio
    }
    // Métodos get
    Vehiculo.prototype.getVehiculo = function () {
        return this.vehiculo;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getFechaDeRegistro = function () {
        return this.fechaDeRegistro;
    };
    Vehiculo.prototype.getEstaActivo = function () {
        return this.estaActivo;
    };
    // Métodos set
    Vehiculo.prototype.setVehiculo = function (vehiculo) {
        this.vehiculo = vehiculo;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.setFechaDeRegistro = function (fechaDeRegistro) {
        this.fechaDeRegistro = fechaDeRegistro;
    };
    Vehiculo.prototype.darDeBaja = function () {
        this.estaActivo = false;
        console.log("Veh\u00EDculo ".concat(this.getVehiculo(), " dado de baja."));
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
