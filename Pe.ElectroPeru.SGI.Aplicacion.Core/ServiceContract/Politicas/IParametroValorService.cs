using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using System;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas
{
    /// <summary>
    /// Definición del servicio de aplicación Parametro Valor Service
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22150326 <br />
    /// Modificación:            <br />
    /// </remarks>
    public interface IParametroValorService : IGenericService
    {
        /// <summary>
        /// Realiza la busqueda de Parametro Valor
        /// </summary>
        /// <param name="filtro">Filtro de Parametro Valor</param>
        /// <returns>Listado de unidad operativas encontrados</returns>
        ProcessResult<List<ParametroValorResponse>> BuscarParametroValor(ParametroValorRequest filtro);

        /// <summary>
        /// Realiza la busqueda de Parametro Valor
        /// </summary>
        /// <param name="filtro">Filtro de Parametro Valor</param>
        /// <returns>Listado de unidad operativas encontrados</returns>
        ProcessResult<List<dynamic>> BuscarParametroValorDinamico(ParametroValorRequest filtro);

        /// <summary>
        /// Realiza el registro de un de Parametro Valor
        /// </summary>
        /// <param name="filtro">Filtro de Parametro Valor</param>
        /// <returns>Indicador de Error</returns>
        ProcessResult<string> RegistrarParametroValor(ParametroValorRequest filtro);

        /// <summary>
        /// Realiza el eliminar de un de Parametro Valor
        /// </summary>
        /// <param name="filtro">Filtro de Parametro Valor</param>
        /// <returns>Indicador de Error</returns>
        ProcessResult<string> EliminarParametroValor(ParametroValorRequest filtro);

        /// <summary>
        /// Realiza el eliminar de un de Parametro Valor
        /// </summary>
        /// <param name="filtro">Lista de Parametro Valor a Eliminar</param>
        /// <returns>Indicador de Error</returns>
        ProcessResult<string> EliminarMasivoParametroValor(List<ParametroValorRequest> filtro);

        /// <summary>
        /// Realiza el eliminar de un de Parametro Valor
        /// </summary>
        /// <param name="filtro">Lista de Parametro Valor a Eliminar</param>
        /// <returns>Indicador de Error</returns>
        ProcessResult<List<ParametroValorResponse>> BuscarValorPorSeccionParametro(ParametroValorRequest filtro);

        /// <summary>
        /// Realiza la búsqueda de Valores de las Secciones Adicionales de Parámetro
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Valores de las Secciones Adicionales de Parámetro</returns>
        ProcessResult<List<ParametroValorResponse>> BuscarValorSeccionAdicionalParametro(ParametroValorRequest filtro);


        /// <summary>
        /// Realiza la búsqueda de Valores de las Secciones Adicionales de Parámetro 5 parametros de retorno
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Valores de las Secciones Adicionales de Parámetro</returns>
        ProcessResult<List<ParametroValorResponse>> BuscarValorSeccionAdicionalRetornaCincoParametros(ParametroValorRequest filtro);


        /// <summary>
        /// Realiza la busqueda de Multiple Parametro Valor
        /// </summary>
        /// <param name="filtro">Filtro de Parametro Valor</param>
        /// <returns>Listado de Multiple parametro valor</returns>
        ProcessResult<Dictionary<string, List<Tuple<string, string, string>>>> BuscarMultipleParametroValor(ParametroValorRequest filtro);
    }
}
