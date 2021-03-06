using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas
{
    /// <summary>
    /// Definición del servicio de aplicación Parametro
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22150326 <br />
    /// Modificación:            <br />
    /// </remarks>
    public interface IParametroService : IGenericService
    {
        /// <summary>
        /// Realiza la busqueda de Parametro
        /// </summary>
        /// <param name="filtro">Filtro de Parametro</param>
        /// <returns>Listado de Parametro</returns>
        ProcessResult<List<ParametroResponse>> BuscarParametro(ParametroRequest filtro);

        /// <summary>
        /// Realiza el registro de un de Parametro Valor
        /// </summary>
        /// <param name="filtro">Parametro Valor a Registrar</param>
        /// <returns>Indicador de Error</returns>
        ProcessResult<string> RegistrarParametro(ParametroRequest filtro);

        /// <summary>
        /// Realiza la eliminación de un Parámetro
        /// </summary>
        /// <param name="filtro">Parametro Eliminar</param>
        /// <returns>Indicador de Error</returns>
        ProcessResult<string> EliminarParametro(ParametroRequest filtro);
    }
}
