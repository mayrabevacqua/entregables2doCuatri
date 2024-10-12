import { Soporte } from "./Soporte";

const main = () => {
    const sistemaSoporte = new Soporte();

    // Agregar motos
    sistemaSoporte.agregarMoto("ABC123", 2020, "Yamaha", 2021, "Deportiva");
    sistemaSoporte.agregarMoto("XYZ456", 2019, "Honda", 2020, "Cruiser");

    // Agregar camiones
    sistemaSoporte.agregarCamion("JKL789", 2018, "Mercedes", 2019, 5000);
    sistemaSoporte.agregarCamion("MNO012", 2021, "Volvo", 2022, 8000);

    // Modificar una moto
    sistemaSoporte.modificarMoto("ABC123", 2021, "Yamaha", 2022, "Touring");

    // Modificar un camión
    sistemaSoporte.modificarCamion("JKL789", 2019, "Mercedes", 2020, 5500);

    // Dar de baja una moto
    sistemaSoporte.darDeBajaMoto("XYZ456");

    // Dar de baja un camión
    sistemaSoporte.darDeBajaCamion("MNO012");

};

main();
