import { registroAutomotor } from "./registroAutomotor";


const vehiculo1 = new registroAutomotor("Auto", "ABC123", 2022, "MarcaX", 2022, true);
const vehiculo2 = new registroAutomotor("Moto", "XYZ789", 2023, "MarcaY", 2023, true);

vehiculo1.agregarVehiculo("Auto", "ABC123", 2022, "Marca1", 2022);
vehiculo2.agregarVehiculo("Moto", "XYZ789", 2023, "Marca2", 2023);

vehiculo1.modificarVehiculo("Auto Modificado", "ABC1234", 2023, "Marca3", 2023);

vehiculo1.darDeBaja();

console.log(`Estado del vehículo 1: ${vehiculo1.getVehiculo()}, Patente: ${vehiculo1.getPatente()}, Está activo: ${vehiculo1.getestaActivo()}`);
console.log(`Estado del vehículo 2: ${vehiculo2.getVehiculo()}, Patente: ${vehiculo2.getPatente()}, Está activo: ${vehiculo2.getestaActivo()}`);
