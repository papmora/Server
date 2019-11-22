import {Router} from 'express';

import {vConstruccionController} from '../controllers/VConstruccionController';

class VistaConstruccionRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        //Login
        this.router.get('/login', vConstruccionController.getLogin);
        //Muestra los clientes
        this.router.get('/clientes', vConstruccionController.getClientes);

        //Muestra los empleados
        this.router.get('/empleados', vConstruccionController.getEmpleados);

        //Muestra los materiales
        this.router.get('/materiales', vConstruccionController.getMateriales);

        //Muestra los nombres de la estapas
        this.router.get('/nombreEtapa', vConstruccionController.getNombreEtapas);

        //Muestra los profesionales
        this.router.get('/profesionales', vConstruccionController.getProfesionales);

        //Muestra los proyectos con sus empleados
        this.router.get('/proyectosEmpleados', vConstruccionController.getProyectEmpleados);

        //Muestra los proyectos
        this.router.get('/proyectos', vConstruccionController.getProyectos);

        //Muestra los proyectos con su cliente respectivo
        this.router.get('/proyectosClientes', vConstruccionController.getProyectosClientes);


        //Muestra  un  proyectos
        this.router.get('/proyecto/:id', vConstruccionController.getProyecto);

        //Muestra los reportes de estado
        this.router.get('/reporteEstado/:id', vConstruccionController.getReporteEstado);

        //Muestra los reportes de gastos
        this.router.get('/reporteGastos', vConstruccionController.getReporteGastos);

        //Muestra los reportes de planilla
        this.router.get('/reportePlanilla', vConstruccionController.getReportePlanilla);

        //Muestra los reportes de presupuesto
        this.router.get('/reportePresupuesto/:id', vConstruccionController.getReportePresupuesto);

        //Muestra el id, nombre y presupuesto de una etapa
        this.router.get('/tieneEtapas', vConstruccionController.getTieneEtapas);

        //Muestra el id, nombre y presupuesto de una etapa
        this.router.get('/asignacionHoras/:id', vConstruccionController.getAsignacionHoras);

        //Muestra las etapas de un proyecto
        this.router.get('/asignacionEtapas/:id', vConstruccionController.getAsignacionEtapas);

        //Obtiene id de proyecto al pasar el nombre
        this.router.get('/idfromproject', vConstruccionController.getIdFromProject);

        //Crear Ingeniero o Arquitecto
        this.router.post('/registrar/Profesional', vConstruccionController.createProfesional);
        //Crear clientes
        this.router.post('/registrar/Clientes', vConstruccionController.createClientes);
        //Crear empleados
        this.router.post('/registrar/Empleados', vConstruccionController.createEmpleados);
        //Crear materiales
        this.router.post('/registrar/Materiales', vConstruccionController.createMateriales);
        //Crear etapas
        this.router.post('/registrar/Etapas', vConstruccionController.createEtapas);
        //Crear obras
        this.router.post('/registrar/Obras', vConstruccionController.createObras);
        //Crear diseñadores
        this.router.post('/registrar/diseñadores', vConstruccionController.createObras);
        //Muestra  los materiales utilizados
        this.router.get('/AsignacionMateriales/:id', vConstruccionController.getAsignacionMateriales);
        //Muestra  los materiales utilizados
        this.router.get('/tieneProyecto/:id', vConstruccionController.getTieneProyecto);
        

        //Asignar horas 
        this.router.post('/asignar/horas', vConstruccionController.asignarHoras);
        //Asignar gastos
        this.router.post('/asignar/gastos', vConstruccionController.asignarGastos);
        //Asignar etapas a proyectos 
        this.router.post('/asignar/etapasProyectos', vConstruccionController.asignarEtapasProyectos);
        //Asignar materiales a etapas 
        this.router.post('/asignar/materialesEtapas', vConstruccionController.asiganrMaterialesEtapas);

        
    }
}

const vConstruccionRoutes = new VistaConstruccionRoutes();
export default vConstruccionRoutes.router;