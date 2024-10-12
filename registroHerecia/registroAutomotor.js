"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroAutomotor = void 0;
var registroAutomotor = /** @class */ (function () {
    function registroAutomotor() {
        this.vehiculos = [];
    }
    registroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
        console.log("Veh\u00EDculo agregado: ".concat(vehiculo.getVehiculo(), ", Patente: ").concat(vehiculo.getPatente(), ", Modelo: ").concat(vehiculo.getModelo(), ", Marca: ").concat(vehiculo.getMarca(), ", Fecha de Registro: ").concat(vehiculo.getFechaDeRegistro(), ", Est\u00E1 activo: ").concat(vehiculo.getEstaActivo()));
    };
    registroAutomotor.prototype.modificarVehiculo = function (patente, vehiculo, modelo, marca, fechaDeRegistro) {
        var vehiculoEncontrado = this.vehiculos.find(function (v) { return v.getPatente() == patente; });
        if (vehiculoEncontrado) {
            if (vehiculo)
                vehiculoEncontrado.setVehiculo(vehiculo);
            if (modelo)
                vehiculoEncontrado.setModelo(modelo);
            if (marca)
                vehiculoEncontrado.setMarca(marca);
            if (fechaDeRegistro)
                vehiculoEncontrado.setFechaDeRegistro(fechaDeRegistro);
            console.log("Veh\u00EDculo modificado: ".concat(vehiculoEncontrado.getVehiculo(), ", Patente: ").concat(vehiculoEncontrado.getPatente(), ", Modelo: ").concat(vehiculoEncontrado.getModelo(), ", Marca: ").concat(vehiculoEncontrado.getMarca(), ", Fecha de Registro: ").concat(vehiculoEncontrado.getFechaDeRegistro(), ", Est\u00E1 activo: ").concat(vehiculoEncontrado.getEstaActivo()));
        }
        else {
            console.log("Veh\u00EDculo con patente ".concat(patente, " no encontrado."));
        }
    };
    registroAutomotor.prototype.darDeBaja = function (patente) {
        var vehiculoEncontrado = this.vehiculos.find(function (v) { return v.getPatente() == patente; });
        if (vehiculoEncontrado) {
            vehiculoEncontrado.darDeBaja();
        }
        else {
            console.log("Veh\u00EDculo con patente ".concat(patente, " no encontrado."));
        }
    };
    return registroAutomotor;
}());
exports.registroAutomotor = registroAutomotor;
