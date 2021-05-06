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
    /// Definición del Servicio de Áreas
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public interface IIndicadorService : IGenericService
    {
        /// <summary>
        /// Permite la búsqueda de Áreas
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Áreas</returns>
        //ProcessResult<List<IndicadorResponse>> BuscarIndicador(IndicadorRequest filtro);

        /// <summary>
        /// Permite la búsqueda de Áreas
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Áreas</returns>
        ProcessResult<List<BandejaIndicadorResponse>> BuscarIndicador(BandejaIndicadorRequest filtro);

        /// <summary>
        /// Registrar área
        /// </summary>
        /// <param name="data">Datos de área</param>
        /// <returns>Registro de área</returns>
        ProcessResult<IndicadorResponse> RegistrarIndicador(IndicadorRequest data);

        /// <summary>
        /// Eliminar área
        /// </summary>
        /// <param name="filtro">Datos de área</param>
        /// <returns>Eliminación de área</returns>
        ProcessResult<object> EliminarIndicador(IndicadorRequest filtro);

        /// <summary>
        /// Eliminar área
        /// </summary>
        /// <param name="filtro">Datos de área</param>
        /// <returns>Reactivar de área</returns>
        ProcessResult<object> ReactivarIndicador(IndicadorRequest filtro);

        /// <summary>
        /// Permite obtener una Observacion Planeada Entity
        /// </summary>
        /// <param name="CodigoExpediente"></param>
        /// <returns>Entidad Observacion Planeada Response</returns>
        ProcessResult<IndicadorResponse> ObtenerIndicador(IndicadorRequest data);

        /// <summary>
        /// Permite obtener una Inspeccion Gestion
        /// </summary>        
        ProcessResult<List<IndicadorAmbitoResponse>> ObtenerIndicadorAmbito(IndicadorRequest data);

    }
}
