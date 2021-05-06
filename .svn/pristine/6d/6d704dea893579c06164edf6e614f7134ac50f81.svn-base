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
    public class VariableLogicRepository : QueryRepository<VariableLogic>, IVariableLogicRepository
    {
        /// <summary>
        /// Permite la búsqueda de Mantenimiento
        /// </summary>      
        public List<VariableDetalleLogic> BuscarVariable(
            Guid? codigoVariable,
            string nombreVariable,
            string nombreSiglaVariable,
            DateTime? fechaInicioVigencia,
            DateTime? fechaFinVigencia,
            Guid? codigoArea,
            int? codigoPeriodicidad,
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {                
                new SqlParameter("CODIGO_VARIABLE", SqlDbType.UniqueIdentifier)         { Value = (object)codigoVariable ?? DBNull.Value },
                new SqlParameter("NOMBRE_VARIABLE", SqlDbType.VarChar)                  { Value = (object)nombreVariable ?? DBNull.Value },
                new SqlParameter("NOMBRE_SIGLA_VARIABLE", SqlDbType.VarChar)            { Value = (object)nombreSiglaVariable ?? DBNull.Value },
                new SqlParameter("FECHA_INICIO_VIGENCIA", SqlDbType.DateTime)           { Value = (object)fechaInicioVigencia ?? DBNull.Value },
                new SqlParameter("FECHA_FIN_VIGENCIA", SqlDbType.DateTime)              { Value = (object)fechaFinVigencia ?? DBNull.Value },
                new SqlParameter("CODIGO_AREA", SqlDbType.UniqueIdentifier)             { Value = (object)codigoArea ?? DBNull.Value },
                new SqlParameter("CODIGO_PERIODICIDAD", SqlDbType.Int)                  { Value = (object)codigoPeriodicidad ?? DBNull.Value },                
                new SqlParameter("CODIGO_EMPRESA_SISTEMA", SqlDbType.UniqueIdentifier)  { Value = (object)codigoEmpresaSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)          { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.NVarChar)                   { Value = (object)codigoIdioma ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Int)                      { Value = (object)estadoRegistro ?? DBNull.Value },                
                new SqlParameter("NUMERO_PAGINA", SqlDbType.BigInt)                     { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.BigInt)                    { Value = (object)tamanioPagina ?? DBNull.Value },
                
            };

            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<VariableDetalleLogic>("MNT.USP_VARIABLE_SEL", parametros).ToList();
            return resultado;
        }
    }
}
