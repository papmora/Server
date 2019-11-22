"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VConstruccionController_1 = require("../controllers/VConstruccionController");
class VistaConstruccionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Login
        this.router.get('/login', VConstruccionController_1.vConstruccionController.getLogin);
        //Muestra los clientes
        this.router.get('/clientes', VConstruccionController_1.vConstruccionController.getClientes);
        //Muestra los empleados
        this.router.get('/empleados', VConstruccionController_1.vConstruccionController.getEmpleados);
        //Muestra los materiales
        this.router.get('/materiales', VConstruccionController_1.vConstruccionController.getMateriales);
        //Muestra los nombres de la estapas
        this.router.get('/nombreEtapa', VConstruccionController_1.vConstruccionController.getNombreEtapas);
        //Muestra los profesionales
        this.router.get('/profesionales', VConstruccionController_1.vConstruccionController.getProfesionales);
        //Muestra los proyectos con sus empleados
        this.router.get('/proyectosEmpleados', VConstruccionController_1.vConstruccionController.getProyectEmpleados);
        //Muestra los proyectos
        this.router.get('/proyectos', VConstruccionController_1.vConstruccionController.getProyectos);
        //Muestra los proyectos con su cliente respectivo
        this.router.get('/proyectosClientes', VConstruccionController_1.vConstruccionController.getProyectosClientes);
        //Muestra  un  proyectos
        this.router.get('/proyecto/:id', VConstruccionController_1.vConstruccionController.getProyecto);
        //Muestra los reportes de estado
        this.router.get('/reporteEstado/:id', VConstruccionController_1.vConstruccionController.getReporteEstado);
        //Muestra los reportes de gastos
        this.router.get('/reporteGastos', VConstruccionController_1.vConstruccionController.getReporteGastos);
        //Muestra los reportes de planilla
        this.router.get('/reportePlanilla', VConstruccionController_1.vConstruccionController.getReportePlanilla);
        //Muestra los reportes de presupuesto
        this.router.get('/reportePresupuesto/:id', VConstruccionController_1.vConstruccionController.getReportePresupuesto);
        //Muestra el id, nombre y presupuesto de una etapa
        this.router.get('/tieneEtapas', VConstruccionController_1.vConstruccionController.getTieneEtapas);
        //Muestra el id, nombre y presupuesto de una etapa
        this.router.get('/asignacionHoras/:id', VConstruccionController_1.vConstruccionController.getAsignacionHoras);
        //Muestra las etapas de un proyecto
        this.router.get('/asignacionEtapas/:id', VConstruccionController_1.vConstruccionController.getAsignacionEtapas);
        //Obtiene id de proyecto al pasar el nombre
        this.router.get('/idfromproject', VConstruccionController_1.vConstruccionController.getIdFromProject);
        //Crear Ingeniero o Arquitecto
        this.router.post('/registrar/Profesional', VConstruccionController_1.vConstruccionController.createProfesional);
        //Crear clientes
        this.router.post('/registrar/Clientes', VConstruccionController_1.vConstruccionController.createClientes);
        //Crear empleados
        this.router.post('/registrar/Empleados', VConstruccionController_1.vConstruccionController.createEmpleados);
        //Crear materiales
        this.router.post('/registrar/Materiales', VConstruccionController_1.vConstruccionController.createMateriales);
        //Crear etapas
        this.router.post('/registrar/Etapas', VConstruccionController_1.vConstruccionController.createEtapas);
        //Crear obras
        this.router.post('/registrar/Obras', VConstruccionController_1.vConstruccionController.createObras);
        //Crear diseñadores
        this.router.post('/registrar/diseñadores', VConstruccionController_1.vConstruccionController.createObras);
        //Muestra  los materiales utilizados
        this.router.get('/AsignacionMateriales/:id', VConstruccionController_1.vConstruccionController.getAsignacionMateriales);
        //Muestra  los materiales utilizados
        this.router.get('/tieneProyecto/:id', VConstruccionController_1.vConstruccionController.getTieneProyecto);
        //Asignar horas 
        this.router.post('/asignar/horas', VConstruccionController_1.vConstruccionController.asignarHoras);
        //Asignar gastos
        this.router.post('/asignar/gastos', VConstruccionController_1.vConstruccionController.asignarGastos);
        //Asignar etapas a proyectos 
        this.router.post('/asignar/etapasProyectos', VConstruccionController_1.vConstruccionController.asignarEtapasProyectos);
        //Asignar materiales a etapas 
        this.router.post('/asignar/materialesEtapas', VConstruccionController_1.vConstruccionController.asiganrMaterialesEtapas);
    }
}
const vConstruccionRoutes = new VistaConstruccionRoutes();
exports.default = vConstruccionRoutes.router;
