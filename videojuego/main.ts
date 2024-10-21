import { mago } from "./mago";
import { luchador} from "./luchador";
import {arquero } from "./arquero";


// Crear personajes
const magnifico = new mago("Magifico", 10, 100, 50); 
const locomotoro = new luchador("Locomotoro", 15, 120, 70);
const dibu = new arquero("Dibu", 12, 80, 60);

// Ataques
console.log(magnifico.atacar());
console.log(locomotoro.atacar());
console.log(dibu.atacar());

// Defensa
console.log(magnifico.defender());
console.log(locomotoro.defender());
console.log(dibu.defender());

// Habilidades especiales
console.log(magnifico.hechizoEspecial());
console.log(locomotoro.golpeCrítico());
console.log(dibu.disparoPreciso());