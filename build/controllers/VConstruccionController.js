"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class VConstruccionController {
    //Filtros para login
    //Metodo get que verifica lo que pasa el usuario para iniciar sesion
    getLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipo = req.query.tipo;
            const correo = req.query.correo;
            const contraseña = req.query.contraseña;
            var query;
            var queryArray = [];
            if (tipo === null) {
                res.json({ message: 'No ha indicado el tipo de usuario' });
            }
            if (tipo != null) {
                queryArray.push('Tipo=' + "'" + tipo + "'");
            }
            if (correo === null) {
                res.json({ message: 'No ha indicado el correo' });
            }
            if (correo != null) {
                queryArray.push('Correo=' + "'" + correo + "'");
            }
            if (contraseña === null) {
                res.json({ message: 'No ha indicado la contraseña' });
            }
            if (contraseña != null) {
                queryArray.push('Contraseña=' + "'" + contraseña + "'");
            }
            if (queryArray.length === 0) {
                res.json([]);
                return;
            }
            else {
                query = 'SELECT * FROM USUARIOS WHERE ' + queryArray.join(' AND ');
            }
            console.log(query);
            const login = yield database_1.pool.query(query);
            res.json(login.rows);
        });
    }
    //Busqueda de clientes
    //Retorna todos lo clientes 
    getClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM cliente');
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de empleados
    //Retorna todos lo empleados
    getEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM empleado');
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de nombre de etapas
    //Retorna todos los nombres de las etapas 
    getNombreEtapas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM etapa');
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de materiales
    //Retorna todos los materiales 
    getMateriales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM material');
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de profesionales
    //Retorna todos los profesionales
    getProfesionales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM profesional');
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de proyectos
    //Retorna todos los proyectos 
    getProyectos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM proyecto');
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de proyectos
    //Retorna todos los proyectos 
    getProyectosClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM Proyecto_cliente()');
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de un proyectos
    //Retorna un proyecto
    getProyecto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const response = yield database_1.pool.query('SELECT * FROM PROYECTO WHERE PROYECTO.id = ' + id);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de proyectos con empleados
    //Retorna todos los empleados asociados a un proyecto 
    getProyectEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM Proyecto_empleados()');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de reporte estado
    getReporteEstado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const response = yield database_1.pool.query('SELECT * FROM Reporte_Estado(' + id + ')');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de reporte gastos
    getReporteGastos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM compra');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de reporte planilla
    getReportePlanilla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM ReportePlanilla()');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de reporte presupuesto
    getReportePresupuesto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const response = yield database_1.pool.query('SELECT * FROM ReportePresupuesto(' + id + ')');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de reporte presupuesto
    getTieneEtapas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM Etapas()');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de reporte las horas asignadas de un proyecto
    getAsignacionHoras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const response = yield database_1.pool.query('SELECT * FROM AsignarHoras(' + id + ')');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Busqueda de reporte asignacionetapas
    getAsignacionEtapas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const response = yield database_1.pool.query('SELECT * FROM AsignacionEtapas(' + id + ')');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Obtener id de la propiedad al pasarle el nombre 
    getIdFromProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nombre = req.body;
            try {
                const response = yield database_1.pool.query('SELECT id FROM proyecto WHERE nombre = ' + nombre + '');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Obtener id de la propiedad al pasarle el nombre 
    getAsignacionMateriales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const response = yield database_1.pool.query('SELECT * FROM AsignacionMateriales(' + id + ')');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Obtener id de la propiedad al pasarle el nombre 
    getTieneProyecto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const response = yield database_1.pool.query('SELECT TIENE.id , ETAPA.nombre FROM TIENE INNER JOIN ETAPA ON TIENE.etapaid = ETAPA.id WHERE TIENE.proyectoid = ' + id);
                console.log(response.rows);
                return res.status(200).json(response.rows);
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Crear Ingeniero o Arquitecto
    createProfesional(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula, nombre, primerapellido, segundoapellido, especialidad, codigo, telefono } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO profesional (cedula, nombre, primerapellido, segundoapellido, especialidad, codigo, telefono) VALUES ($1, $2, $3, $4, $5, $6, $7)', [cedula, nombre, primerapellido, segundoapellido, especialidad, codigo, telefono]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Profesional creado de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Crear clientes
    createClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula, nombre, primerapellido, segundoapellido, telefono } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO cliente (cedula, nombre, primerapellido, segundoapellido, telefono) VALUES ($1, $2, $3, $4, $5)', [cedula, nombre, primerapellido, segundoapellido, telefono]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Cliente creado de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Crear empleados
    createEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula, nombre, primerapellido, segundoapellido, telefono, pago } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO empleado (cedula, nombre, primerapellido, segundoapellido, telefono, pago) VALUES ($1, $2, $3, $4, $5, $6)', [cedula, nombre, primerapellido, segundoapellido, telefono, pago]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Empleado creado de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Crear materiales
    createMateriales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo, nombre, preciounitario } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO material (codigo, nombre, preciounitario) VALUES ($1, $2, $3)', [codigo, nombre, preciounitario]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Material creado de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Crear etapas
    createEtapas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, descripcion } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO etapa (nombre, descripcion) VALUES ($1, $2)', [nombre, descripcion]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Etapa creada de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Crear obras
    createObras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clienteid, nombre, descripcion, provincia, canton, distrito, habitaciones, banos, metrosconstruccion, metrospropiedad, pisos, estado, presupuesto, preciofinal, parqueos, gimnasio, parqueovisitas, piscina, tipopiso } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO proyecto (clienteid, nombre, descripcion, provincia, canton, distrito, habitaciones, banos, metrosconstruccion, metrospropiedad, pisos, estado, presupuesto, preciofinal,parqueos,gimnasio,parqueovisitas,piscina,tipopiso) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)', [clienteid, nombre, descripcion, provincia, canton,
                    distrito, habitaciones, banos, metrosconstruccion, metrospropiedad, pisos, estado, presupuesto, preciofinal, parqueos, gimnasio, parqueovisitas, piscina, tipopiso]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Obra creada de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Crear diseñadores
    createDiseñador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, proyectoid } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO disenadores (id, proyectoid) VALUES ($1, $2)', [id, proyectoid]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Diseñador creado de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Asignar horas a empleados
    asignarHoras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Proyecto, Cedula, Horas, FechaInicio, FechaFinal } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO tarea (proyectoid, responsableid, horas, fechainicio, fechafinal) VALUES ($1, $2, $3, $4, $5)', [Proyecto, Cedula, Horas, FechaInicio, FechaFinal]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Se logró asignar las horas de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Asignar gastos a proyectos 
    asignarGastos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Proyecto, Numero, Proveedor, Material, Monto, Foto, Fecha } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO compra (proyectoid, numerofactura, material, precio, foto, proveedor, fecha) VALUES ($1, $2, $3, $4, $5, $6, $7)', [Proyecto, Numero, Material, Monto, Foto, Proveedor, Fecha]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Se logró asignar los gastos de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Asignar etapas a proyectos 
    asignarEtapasProyectos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { etapaid, proyectoid, fechainicio, fechafinal, presupuesto } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO tiene (etapaid, proyectoid, fechainicio, fechafinal, presupuesto) VALUES ($1, $2, $3, $4, $5)', [etapaid, proyectoid, fechainicio, fechafinal, presupuesto]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Se logró asignar las etapas de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
    //Asignar materiales a etapas 
    asiganrMaterialesEtapas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Material, Etapa, Cantidad } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO utiliza (codigomaterial, tieneid, cantidad) VALUES ($1, $2, $3)', [Material, Etapa, Cantidad]);
                console.log(response.rows);
                return res.status(200).json({ message: 'Se logró asignar los materiales de forma exitosa' });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        });
    }
}
exports.vConstruccionController = new VConstruccionController();
