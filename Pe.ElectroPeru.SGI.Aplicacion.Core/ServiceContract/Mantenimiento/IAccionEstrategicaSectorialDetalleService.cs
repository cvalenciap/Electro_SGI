﻿using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento
{
    /// <summary>
    /// Definición del Servicio de Áreas
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public interface IAccionEstrategicaSectorialDetalleService : IGenericService
    {
        /// <summary>
        /// Permite la búsqueda de Áreas
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Áreas</returns>
        ProcessResult<List<AccionEstrategicaSectorialDetalleResponse>> BuscarAccionEstrategicaSectorialDetalle(AccionEstrategicaSectorialDetalleRequest filtro);

        /// <summary>
        /// Registrar área
        /// </summary>
        /// <param name="data">Datos de área</param>
        /// <returns>Registro de área</returns>
        ProcessResult<AccionEstrategicaSectorialDetalleResponse> RegistrarAccionEstrategicaSectorialDetalle(AccionEstrategicaSectorialDetalleRequest data);

        /// <summary>
        /// Eliminar área
        /// </summary>
        /// <param name="filtro">Datos de área</param>
        /// <returns>Eliminación de área</returns>
        ProcessResult<object> EliminarAccionEstrategicaSectorialDetalle(AccionEstrategicaSectorialDetalleRequest filtro);

        /// <summary>
        /// Permite obtener un área
        /// </summary>
        /// <param name="codigoAccionEstrategicaSectorial">Código del área</param>
        /// <returns>Entidad AccionEstrategicaSectorial</returns>
        //ProcessResult<AccionEstrategicaSectorialResponse> ObtenerAccionEstrategicaSectorialPorId(int codigoAccionEstrategicaSectorial);
    }
}
