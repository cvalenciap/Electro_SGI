using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas
{
    /// <summary>
    /// Definición del servicio de aplicación UnidadOperativaService
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22150326 <br />
    /// Modificación:            <br />
    /// </remarks>
    public interface IParametroSeccionService : IGenericService
    {
        /// <summary>
        /// Realiza la busqueda de Parametro Valor
        /// </summary>
        /// <param name="filtro">Filtro de Parametro Valor</param>
        /// <returns>Listado de unidad operativas encontrados</returns>
        ProcessResult<List<ParametroSeccionResponse>> BuscarParametroSeccion(ParametroSeccionRequest filtro);

        /// <summary>
        /// Realiza el registro de un Parámetro Sección
        /// </summary>
        /// <param name="filtro">Parámetro Sección a Registrar</param>
        /// <returns>Indicador de Error</returns>
        ProcessResult<string> RegistrarParametroSeccion(ParametroSeccionRequest filtro);

        /// <summary>
        /// Realiza la eliminación de una sección de parámetro
        /// </summary>
        /// <param name="filtro">Sección a Eliminar</param>
        /// <returns>Indicador de Error</returns>
        ProcessResult<string> EliminarParametroSeccion(ParametroSeccionRequest filtro, bool autoGuardado = true);

        /// <summary>
        /// Realiza la eliminación masiva de secciones de parámetro
        /// </summary>
        /// <param name="filtro">Lista de secciones a Eliminar</param>
        /// <returns>Indicador de Error</returns>
        ProcessResult<string> EliminarMasivoParametroSeccion(List<ParametroSeccionRequest> filtro);
    }
}
