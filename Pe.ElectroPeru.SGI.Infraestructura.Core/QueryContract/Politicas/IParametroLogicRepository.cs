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
    public interface IParametroLogicRepository : IQueryRepositoryLogic<ParametroLogic>
    {
        /// <summary>
        /// Permite buscar Parametros
        /// </summary>
        /// <param name="codigoParametro">Código de Parametro</param>
        /// <param name="indicadorGlobal">Indicador Global</param>
        /// <param name="codigoEmpresa">Código de Empresa</param>
        /// <param name="codigoSistema">Código de Sistema</param>
        /// <param name="codigoIdentificador">Código Identificador</param>
        /// <param name="tipoParametro">Código de Tipo de Parámetro</param>
        /// <param name="nombre">Nombre</param>
        /// <param name="descripcion">Descripción</param>
        /// <param name="indicadorPermiteAgregar">Indicador de Permite Agregar</param>
        /// <param name="indicadorPermiteModificar">Indicador de Permite Modificar</param>
        /// <param name="indicadorPermiteEliminar">Indicador de Permite Eliminar</param>
        /// <param name="estadoRegistro">Estado de Registro</param>
        /// <returns>Lista de Parametros</returns>
        List<ParametroLogic> BuscarParametro(
            int? codigoParametro,
            bool? indicadorGlobal,
            Guid? codigoEmpresa,
            Guid? codigoSistema,
            string codigoIdentificador,
            string tipoParametro,
            string nombre,
            string descripcion,
            bool? indicadorPermiteAgregar,
            bool? indicadorPermiteModificar,
            bool? indicadorPermiteEliminar,
            string estadoRegistro,
            int numeroPagina,
            int registrosPagina);
    }
}
