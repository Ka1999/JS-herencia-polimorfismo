/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/Director.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


//const cliente2 = new Cliente('María','16979808','8989');
 
const empleado = new Empleado('Juan Perez','1234343',10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado, '123456'));

const gerente = new Gerente('Pedro Rivas','232344',12000);
gerente.asignarClave('655');
console.log(SistemaAutenticacion.login(gerente, '6555'));

//const director = new Director('Andres Quintero','232323',15000);

const cliente = new Cliente('Leonardo', '13804050', '123224');
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente, '01111'));
