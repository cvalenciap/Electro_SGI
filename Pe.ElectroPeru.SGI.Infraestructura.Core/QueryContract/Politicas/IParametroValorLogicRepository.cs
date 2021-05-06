using System.Collections.Generic;
using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Politicas;
using System;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Politicas
{
    /// <summary>
    /// Interface de Parametro de Valor Repository
    /// </summary>
    /// <remarks>
    /// Creación:   GMD <br />
    /// Modificación:            <br />
    /// </remarks>
    public interface IParametroValorLogicRepository : IQueryRepositoryLogic<ParametroValorLogic>
    {
        /// <summary>
        /// Realiza la busqueda de Parametro Valor
        /// </summary>
        /// <param name="codigoParametro">Código de Parametro</param>
        /// <param name="indicadorGlobal">Indicador de Global</param>
        /// <param name="codigoEmpresa">Código de Empresa</param>
        /// <param name="codigoSistema">Código de Sistema</param>
        /// <param name="codigoIdentificador">Código Identificador</param>
        /// <param name="tipoParametro">Tipo de Parámetro</param>
        /// <param name="codigoSeccion">Código de Sección</param>
        /// <param name="codigoValor">Código de Valor</param>
        /// <param name="valor">Valor</param>
        /// <param name="estadoRegistro">Estado de Registro</param>
        /// <returns>Lista de valores de parametro</returns>
        List<ParametroValorLogic> BuscarParametroValor(int? codigoParametro, bool? indicadorGlobal, Guid? codigoEmpresa, Guid? codigoSistema, string codigoIdentificador, string tipoParametro, int? codigoSeccion, int? codigoValor, string valor, string estadoRegistro);

        /// <summary>
        /// Realiza la busqueda de Parametro Valor
        /// </summary>
        /// <param name="codigoParametro">Código de Parametro</param>
        /// <param name="indicadorEmpresa">Indicador de Global</param>
        /// <param name="codigoEmpresa">Código de Empresa</param>
        /// <param name="codigoSistema">Código de Sistema</param>
        /// <param name="codigoIdentificador">Código Identificador</param>
        /// <param name="tipoParametro">Tipo de Parámetro</param>
        /// <param name="codigoSeccion">Código de Sección</param>
        /// <param name="codigoValor">Código de Valor</param>
        /// <param name="valor">Valor</param>
        /// <param name="estadoRegistro">Estado de Registro</param>
        /// <returns>Lista de valores de parametro</returns>
        ParametroValorSeccionLogic BuscarParametroValorSeccion(int? codigoParametro, bool? indicadorEmpresa, Guid? codigoEmpresa, Guid? codigoSistema, string codigoIdentificador, string tipoParametro, int? codigoSeccion, int? codigoValor, string valor, string estadoRegistro);

        /// <summary>
        /// Realiza el registro de un parametro valor
        /// </summary>
        /// <param name="parametroValorLogic">Entidad logica de parametro valor</param>
        /// <returns>Cantidad de registros registrados</returns>
        int RegistrarParametroValor(ParametroValorLogic parametroValorLogic);

        /// <summary>
        /// Realiza la modificación de un parametro valor
        /// </summary>
        /// <param name="parametroValorLogic">Entidad logica de parametro valor</param>
        /// <returns>Cantidad de registros modificados</returns>
        int ModificarParametroValor(ParametroValorLogic parametroValorLogic);

        /// <summary>
        /// Realiza la búsqueda de Valores de las Secciones de un Parámetro
        /// </summary>
        /// <param name="codigoEmpresa">Código de Empresa</param>
        /// <param name="indicadorEmpresa">Indicador de Empresa</param>
        /// <param name="codigoSistema">Código de Sistema</param>
        /// <param name="codigoIdentificadorParametro">Código de Identificador de Parámetro</param>
        /// <param name="codigoIdioma">Código de Idioma</param>
        /// <returns>Lista de Valores de las Secciones de un Parámetro</returns>
        List<ParametroValorLogic> BuscarValorPorSeccionParametro(
            Guid codigoEmpresa,
            bool indicadorEmpresa,
            Guid codigoSistema,
            string codigoIdentificadorParametro,
            string codigoIdioma);

        /// <summary>
        /// Realiza la búsqueda de Valores de las Secciones Adicionales de un Parámetro
        /// </summary>
        /// <param name="codigoEmpresa">Código de Empresa</param>
        /// <param name="indicadorEmpresa">Indicador de Empresa</param>
        /// <param name="codigoSistema">Código de Sistema</param>
        /// <param name="codigoIdentificadorParametro">Código de Identificador de Parámetro</param>
        /// <param name="codigoIdioma">Código de Idioma</param>
        /// <returns>Lista de Valores de las Secciones Adicionales de un Parámetro</returns>
        List<ParametroValorLogic> BuscarValorSeccionAdicionalParametro(
            Guid codigoEmpresa,
            bool indicadorEmpresa,
            Guid codigoSistema,
            string codigoIdentificadorParametro,
            string codigoIdioma);
    }
}
