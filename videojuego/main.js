"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mago_1 = require("./mago");
var luchador_1 = require("./luchador");
var arquero_1 = require("./arquero");
// Crear personajes
var magnifico = new mago_1.mago("Magifico", 10, 100, 50); // Aquí se crea una instancia
var locomotoro = new luchador_1.luchador("Locomotoro", 15, 120, 70);
var dibu = new arquero_1.arquero("Dibu", 12, 80, 60);
// Realizar ataques
console.log(magnifico.atacar()); // Esto llama al método 'atacar'
console.log(locomotoro.atacar());
console.log(dibu.atacar());
// Realizar defensa
console.log(magnifico.defender()); // "Magifico se defiende!"
console.log(locomotoro.defender()); // "Locomotoro se defiende!"
console.log(dibu.defender()); // "Dibu se defiende!"
// Usar habilidades especiales
console.log(magnifico.hechizoEspecial()); // "Magifico lanza un poderoso hechizo!"
console.log(locomotoro.golpeCrítico()); // "Locomotoro realiza un golpe crítico!"
console.log(dibu.disparoPreciso()); // "Dibu realiza un disparo preciso!"
// Mostrar propiedades
console.log("Nombre: ".concat(magnifico.nombre, ", Nivel: ").concat(magnifico.nivel, ", Puntos de Vida: ").concat(magnifico.puntosDeVida, ", Magia: ").concat(magnifico.magia));
console.log("Nombre: ".concat(locomotoro.nombre, ", Nivel: ").concat(locomotoro.nivel, ", Puntos de Vida: ").concat(locomotoro.puntosDeVida, ", Fuerza: ").concat(locomotoro.fuerza));
console.log("Nombre: ".concat(dibu.nombre, ", Nivel: ").concat(dibu.nivel, ", Puntos de Vida: ").concat(dibu.puntosDeVida, ", Agilidad: ").concat(dibu.agilidad));
