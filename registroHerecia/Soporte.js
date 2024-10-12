"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soporte = void 0;
var registroAutomotor_1 = require("./registroAutomotor");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var Soporte = /** @class */ (function (_super) {
    __extends(Soporte, _super);
    function Soporte() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soporte.prototype.agregarMoto = function (patente, modelo, marca, fechaDeRegistro, tipoDeMoto) {
        var moto = new Moto_1.Moto(patente, modelo, marca, fechaDeRegistro, tipoDeMoto);
        this.agregarVehiculo(moto);
    };
    Soporte.prototype.agregarCamion = function (patente, modelo, marca, fechaDeRegistro, capacidadCarga) {
        var camion = new Camion_1.Camion(patente, modelo, marca, fechaDeRegistro, capacidadCarga);
        this.agregarVehiculo(camion);
    };
    Soporte.prototype.modificarMoto = function (patente, modelo, marca, fechaDeRegistro, tipoDeMoto) {
        this.modificarVehiculo(patente, 'Moto', modelo, marca, fechaDeRegistro);
    };
    Soporte.prototype.modificarCamion = function (patente, modelo, marca, fechaDeRegistro, capacidadCarga) {
        this.modificarVehiculo(patente, 'Camión', modelo, marca, fechaDeRegistro);
    };
    Soporte.prototype.darDeBajaMoto = function (patente) {
        this.darDeBaja(patente);
    };
    Soporte.prototype.darDeBajaCamion = function (patente) {
        this.darDeBaja(patente);
    };
    return Soporte;
}(registroAutomotor_1.registroAutomotor));
exports.Soporte = Soporte;
