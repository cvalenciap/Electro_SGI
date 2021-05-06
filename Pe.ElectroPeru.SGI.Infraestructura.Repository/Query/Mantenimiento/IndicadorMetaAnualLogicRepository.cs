using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.Repository.Base;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Query.Mantenimiento
{
    public class IndicadorMetaAnualLogicRepository : QueryRepository<IndicadorMetaAnualLogic>, IIndicadorMetaAnualLogicRepository
    {
        /// <summary>
        /// Permite la búsqueda de Mantenimiento
        /// </summary>      
        public List<IndicadorMetaAnualLogic> BuscarIndicadorMetaAnual(
            Guid? codigoIndicadorMetaAnual,
            Guid? codigoIndicador,
            string Anio,          
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {                
                new SqlParameter("CODIGO_INDICADOR_META_ANUAL", SqlDbType.UniqueIdentifier) { Value = (object)codigoIndicadorMetaAnual ?? DBNull.Value },
                new SqlParameter("CODIGO_INDICADOR", SqlDbType.UniqueIdentifier)         { Value = (object)codigoIndicador ?? DBNull.Value },                
                new SqlParameter("ANIO", SqlDbType.VarChar)         { Value = (object)Anio ?? DBNull.Value },                                
                new SqlParameter("CODIGO_EMPRESA_SISTEMA", SqlDbType.UniqueIdentifier)  { Value = (object)codigoEmpresaSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)          { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.NVarChar)                   { Value = (object)codigoIdioma ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Int)                      { Value = (object)estadoRegistro ?? DBNull.Value },                
                new SqlParameter("NUMERO_PAGINA", SqlDbType.BigInt)                     { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.BigInt)                    { Value = (object)tamanioPagina ?? DBNull.Value },
                
            };

            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<IndicadorMetaAnualLogic>("MNT.USP_INDICADOR_META_ANUAL_SEL", parametros).ToList();
            return resultado;
        }
    }
}
