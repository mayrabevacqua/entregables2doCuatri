"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaje = void 0;
// personaje.ts
var personaje = /** @class */ (function () {
    function personaje(nombre, nivel, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }
    personaje.prototype.atacar = function () {
        return "".concat(this.nombre, " ataca!");
    };
    personaje.prototype.defender = function () {
        return "".concat(this.nombre, " se defiende!");
    };
    return personaje;
}());
exports.personaje = personaje;
