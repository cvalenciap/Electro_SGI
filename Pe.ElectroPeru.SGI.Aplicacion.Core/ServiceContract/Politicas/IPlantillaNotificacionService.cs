using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas
{
    /// <summary>
    /// Definición del servicio de aplicación Plantilla Notificacion Service
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22150326 <br />
    /// Modificación:            <br />
    /// </remarks>
    public interface IPlantillaNotificacionService : IGenericService
    {
        /// <summary>
        /// Realiza la busqueda de Plantilla Notificación
        /// </summary>
        /// <param name="filtro">Parametros a buscar</param>
        /// <returns>Lista de Plantillas de Notificación</returns>
        ProcessResult<List<PlantillaNotificacionResponse>> BuscarPlantillaNotificacion(PlantillaNotificacionRequest filtro);

        /// <summary>
        /// Registra Plantilla de Notificación
        /// </summary>
        /// <param name="data">data</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        ProcessResult<PlantillaNotificacionRequest> RegistrarPlantillaNotificacion(PlantillaNotificacionRequest data);



    }
}
