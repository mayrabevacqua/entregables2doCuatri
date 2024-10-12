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
exports.Camion = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(patente, modelo, marca, fechaDeRegistro, capacidadCarga) {
        var _this = _super.call(this, 'Camión', patente, modelo, marca, fechaDeRegistro) || this;
        _this.capacidadCarga = capacidadCarga;
        return _this;
    }
    Camion.prototype.getCapacidadCarga = function () {
        return this.capacidadCarga;
    };
    return Camion;
}(Vehiculo_1.Vehiculo));
exports.Camion = Camion;
