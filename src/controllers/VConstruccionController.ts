import {Request, Response} from 'express';
import {QueryResult} from 'pg';

import {pool} from '../database';

class VConstruccionController {
    //Filtros para login
    //Metodo get que verifica lo que pasa el usuario para iniciar sesion
    public async getLogin(req:Request, res:Response){
        const tipo = req.query.tipo;
        const correo = req.query.correo;
        const contraseña = req.query.contraseña;
        var query;
        var queryArray = [];
        if (tipo === null){
            res.json({message:'No ha indicado el tipo de usuario'});
        }
        if (tipo != null){
            queryArray.push('Tipo=' + "'" + tipo + "'");
        }
        if (correo === null){
            res.json({message:'No ha indicado el correo'});
        }
        if (correo != null){
            queryArray.push('Correo=' + "'" + correo + "'");
        }
        if (contraseña === null){
            res.json({message:'No ha indicado la contraseña'});
        }
        if (contraseña != null){
            queryArray.push('Contraseña=' + "'" + contraseña + "'");
        }
        if (queryArray.length === 0){
            res.json([]);
            return;
        }
        else{
            query = 'SELECT * FROM USUARIOS WHERE ' + queryArray.join(' AND ');
        }

        console.log(query);
        const login = await pool.query(query);
        res.json(login.rows);

    }


    //Busqueda de clientes
    //Retorna todos lo clientes 
    public async getClientes(req:Request, res:Response): Promise<Response> {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM cliente');
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
        
    }

    //Busqueda de empleados
    //Retorna todos lo empleados
    public async getEmpleados(req:Request, res:Response) {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM empleado');
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Busqueda de nombre de etapas
    //Retorna todos los nombres de las etapas 
    public async getNombreEtapas(req:Request, res:Response) {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM etapa');
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Busqueda de materiales
    //Retorna todos los materiales 
    public async getMateriales(req:Request, res:Response) {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM material');
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Busqueda de profesionales
    //Retorna todos los profesionales
    public async getProfesionales(req:Request, res:Response) {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM profesional');
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Busqueda de proyectos
    //Retorna todos los proyectos 
    public async getProyectos(req:Request, res:Response) {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM proyecto');
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }
    //Busqueda de proyectos
    //Retorna todos los proyectos 
    public async getProyectosClientes(req:Request, res:Response) {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM Proyecto_cliente()');
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Busqueda de un proyectos
    //Retorna un proyecto
    public async getProyecto(req:Request, res:Response) {
        const id = parseInt(req.params.id); 
        try {
            const response : QueryResult = await pool.query('SELECT * FROM PROYECTO WHERE PROYECTO.id = '+id);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Busqueda de proyectos con empleados
    //Retorna todos los empleados asociados a un proyecto 
    public async getProyectEmpleados(req:Request, res:Response) {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM Proyecto_empleados()');
            console.log(response.rows);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Busqueda de reporte estado
    public async getReporteEstado(req:Request, res:Response) {
        const id = parseInt(req.params.id);        
        try {
            const response : QueryResult = await pool.query('SELECT * FROM Reporte_Estado(' + id + ')');
            console.log(response.rows);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
        
    }

    //Busqueda de reporte gastos
    public async getReporteGastos(req:Request, res:Response) {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM compra');
            console.log(response.rows);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Busqueda de reporte planilla
    public async getReportePlanilla(req:Request, res:Response) {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM ReportePlanilla()');
            console.log(response.rows);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Busqueda de reporte presupuesto
    public async getReportePresupuesto(req:Request, res:Response) {
        const id = parseInt(req.params.id);  
        try {
            const response : QueryResult = await pool.query('SELECT * FROM ReportePresupuesto('+id+')');
            console.log(response.rows);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }
    //Busqueda de reporte presupuesto
    public async getTieneEtapas(req:Request, res:Response) {
        try {
            const response : QueryResult = await pool.query('SELECT * FROM Etapas()');
            console.log(response.rows);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }
    //Busqueda de reporte las horas asignadas de un proyecto
    public async getAsignacionHoras(req:Request, res:Response) {
        const id = parseInt(req.params.id);  
        try {
            const response : QueryResult = await pool.query('SELECT * FROM AsignarHoras('+id+')');
            console.log(response.rows);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Busqueda de reporte asignacionetapas
    public async getAsignacionEtapas(req:Request, res:Response) {
        const id = parseInt(req.params.id);  
        try {
            const response : QueryResult = await pool.query('SELECT * FROM AsignacionEtapas('+id+')');
            console.log(response.rows);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

   

    //Obtener id de la propiedad al pasarle el nombre 
    public async getIdFromProject(req:Request, res:Response) {
        const nombre = req.body;  
        try {
            const response : QueryResult = await pool.query('SELECT id FROM proyecto WHERE nombre = '+nombre+'');
            console.log(response.rows);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }
        //Obtener id de la propiedad al pasarle el nombre 
        public async getAsignacionMateriales(req:Request, res:Response) {
            const id = parseInt(req.params.id);  
            try {
                const response : QueryResult = await pool.query('SELECT * FROM AsignacionMateriales('+id+')');
                console.log(response.rows);
                return res.status(200).json(response.rows);
            } catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        }
        //Obtener id de la propiedad al pasarle el nombre 
        public async getTieneProyecto(req:Request, res:Response) {
            const id = parseInt(req.params.id);  
            try {
                const response : QueryResult = await pool.query('SELECT TIENE.id , ETAPA.nombre FROM TIENE INNER JOIN ETAPA ON TIENE.etapaid = ETAPA.id WHERE TIENE.proyectoid = '+ id);
                console.log(response.rows);
                return res.status(200).json(response.rows);
            } catch (error) {
                console.log(error);
                return res.status(200).json('Error interno del servidor');
            }
        }
        


    //Crear Ingeniero o Arquitecto
    public async createProfesional(req:Request, res:Response) {
        const {cedula, nombre, primerapellido, segundoapellido, especialidad, codigo, telefono} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO profesional (cedula, nombre, primerapellido, segundoapellido, especialidad, codigo, telefono) VALUES ($1, $2, $3, $4, $5, $6, $7)', [cedula, nombre, primerapellido, segundoapellido, especialidad, codigo, telefono]);
            console.log(response.rows);
            return res.status(200).json({message: 'Profesional creado de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }
    //Crear clientes
    public async createClientes(req:Request, res:Response) {
        const {cedula, nombre, primerapellido, segundoapellido, telefono} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO cliente (cedula, nombre, primerapellido, segundoapellido, telefono) VALUES ($1, $2, $3, $4, $5)', [cedula, nombre, primerapellido, segundoapellido, telefono]);
            console.log(response.rows);
            return res.status(200).json({message: 'Cliente creado de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }
    //Crear empleados
    public async createEmpleados(req:Request, res:Response) {
        const {cedula, nombre, primerapellido, segundoapellido, telefono, pago} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO empleado (cedula, nombre, primerapellido, segundoapellido, telefono, pago) VALUES ($1, $2, $3, $4, $5, $6)', [cedula, nombre, primerapellido, segundoapellido, telefono, pago]);
            console.log(response.rows);
            return res.status(200).json({message: 'Empleado creado de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }
    //Crear materiales
    public async createMateriales(req:Request, res:Response) {
        const {codigo, nombre, preciounitario} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO material (codigo, nombre, preciounitario) VALUES ($1, $2, $3)', [codigo, nombre, preciounitario]);
            console.log(response.rows);
            return res.status(200).json({message: 'Material creado de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }
    //Crear etapas
    public async createEtapas(req:Request, res:Response) {
        const {nombre, descripcion} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO etapa (nombre, descripcion) VALUES ($1, $2)', [nombre, descripcion]);
            console.log(response.rows);
            return res.status(200).json({message: 'Etapa creada de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }
    //Crear obras
    public async createObras(req:Request, res:Response) {
        const {clienteid, nombre, descripcion, provincia, canton,
            distrito, habitaciones, banos, metrosconstruccion, metrospropiedad, pisos, estado, presupuesto, preciofinal,parqueos,gimnasio,parqueovisitas,piscina,tipopiso} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO proyecto (clienteid, nombre, descripcion, provincia, canton, distrito, habitaciones, banos, metrosconstruccion, metrospropiedad, pisos, estado, presupuesto, preciofinal,parqueos,gimnasio,parqueovisitas,piscina,tipopiso) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)', [clienteid, nombre, descripcion, provincia, canton,
                                                                distrito, habitaciones, banos, metrosconstruccion, metrospropiedad, pisos, estado, presupuesto, preciofinal,parqueos,gimnasio,parqueovisitas,piscina,tipopiso]);
            console.log(response.rows);
            return res.status(200).json({message: 'Obra creada de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Crear diseñadores
    public async createDiseñador(req:Request, res:Response) {
        const {id, proyectoid} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO disenadores (id, proyectoid) VALUES ($1, $2)', [id, proyectoid]);
            console.log(response.rows);
            return res.status(200).json({message: 'Diseñador creado de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }


    //Asignar horas a empleados
    public async asignarHoras(req:Request, res:Response) {
        const {Proyecto, Cedula, Horas, FechaInicio, FechaFinal} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO tarea (proyectoid, responsableid, horas, fechainicio, fechafinal) VALUES ($1, $2, $3, $4, $5)', [Proyecto, Cedula, Horas, FechaInicio, FechaFinal]);
            console.log(response.rows);
            return res.status(200).json({message: 'Se logró asignar las horas de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Asignar gastos a proyectos 
    public async asignarGastos(req:Request, res:Response) {
        const {Proyecto, Numero, Proveedor, Material, Monto, Foto, Fecha} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO compra (proyectoid, numerofactura, material, precio, foto, proveedor, fecha) VALUES ($1, $2, $3, $4, $5, $6, $7)', [Proyecto, Numero, Material, Monto, Foto, Proveedor, Fecha]);
            console.log(response.rows);
            return res.status(200).json({message: 'Se logró asignar los gastos de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Asignar etapas a proyectos 
    public async asignarEtapasProyectos(req:Request, res:Response) {
        const {etapaid, proyectoid, fechainicio, fechafinal, presupuesto} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO tiene (etapaid, proyectoid, fechainicio, fechafinal, presupuesto) VALUES ($1, $2, $3, $4, $5)', [etapaid, proyectoid, fechainicio, fechafinal, presupuesto]);
            console.log(response.rows);
            return res.status(200).json({message: 'Se logró asignar las etapas de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

    //Asignar materiales a etapas 
    public async asiganrMaterialesEtapas(req:Request, res:Response) {
        const {Material, Etapa, Cantidad} =req.body;
        try {
            const response : QueryResult = await pool.query('INSERT INTO utiliza (codigomaterial, tieneid, cantidad) VALUES ($1, $2, $3)', [Material, Etapa, Cantidad]);
            console.log(response.rows);
            return res.status(200).json({message: 'Se logró asignar los materiales de forma exitosa'});
        } catch (error) {
            console.log(error);
            return res.status(200).json('Error interno del servidor');
        }
    }

}

export const vConstruccionController = new VConstruccionController();