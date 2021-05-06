using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
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
    /// Definición del Servicio de Responsable
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public interface IResponsableService : IGenericService
    {
        /// <summary>
        /// Realiza la búsqueda de Responsables
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Listado de Responsables</returns>
        ProcessResult<List<ResponsableResponse>> BuscarResponsable(ResponsableRequest filtro);

        /// <summary>
        /// Registra o actualiza un registro de Responsable
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        ProcessResult<object> RegistrarResponsable(ResponsableRequest data);

        /// <summary>
        /// Eliminar uno o muchos registro de Responsable
        /// </summary>
        /// <param name="data">Lista de Códigos de Responsables a eliminar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
       ProcessResult<object> EliminarResponsable(ResponsableRequest data);
    }
}
