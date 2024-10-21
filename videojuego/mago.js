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
exports.mago = void 0;
var personaje_1 = require("./personaje");
var mago = /** @class */ (function (_super) {
    __extends(mago, _super);
    function mago(nombre, nivel, puntosDeVida, magia) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.magia = magia;
        return _this;
    }
    mago.prototype.atacar = function () {
        return "".concat(this.nombre, " lanza un hechizo!");
    };
    mago.prototype.hechizoEspecial = function () {
        return "".concat(this.nombre, " lanza un poderoso hechizo!");
    };
    return mago;
}(personaje_1.personaje));
exports.mago = mago;
