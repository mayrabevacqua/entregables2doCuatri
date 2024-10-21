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
exports.luchador = void 0;
var personaje_1 = require("./personaje");
var luchador = /** @class */ (function (_super) {
    __extends(luchador, _super);
    function luchador(nombre, nivel, puntosDeVida, fuerza) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.fuerza = fuerza;
        return _this;
    }
    luchador.prototype.atacar = function () {
        return "".concat(this.nombre, " realiza un ataque fuerte!");
    };
    luchador.prototype.golpeCrítico = function () {
        return "".concat(this.nombre, " realiza un golpe cr\u00EDtico!");
    };
    return luchador;
}(personaje_1.personaje));
exports.luchador = luchador;
