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
    public class AccionEstrategicaSectorialLogicRepository : QueryRepository<AccionEstrategicaSectorialLogic>, IAccionEstrategicaSectorialLogicRepository
    {
        /// <summary>
        /// Permite la búsqueda de Mantenimiento
        /// </summary>      
        public List<AccionEstrategicaSectorialLogic> BuscarAccionEstrategicaSectorial(
            Guid? codigoAccionEstrategicaSectorial,
            string nombreAccionEstrategicaSectorial,
            string descripcionAccionEstrategicaSectorial,
            string nombreCompletoResponsable,            
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {                
                new SqlParameter("CODIGO_ACCION_ESTRATEGICA_SECTORIAL", SqlDbType.UniqueIdentifier)  { Value = (object)codigoAccionEstrategicaSectorial ?? DBNull.Value },
                new SqlParameter("NOMBRE_ACCION_ESTRATEGICA_SECTORIAL", SqlDbType.VarChar)           { Value = (object)nombreAccionEstrategicaSectorial ?? DBNull.Value },
                new SqlParameter("DESCRIPCION_ACCION_ESTRATEGICA_SECTORIAL", SqlDbType.VarChar)      { Value = (object)descripcionAccionEstrategicaSectorial ?? DBNull.Value },
                new SqlParameter("NOMBRE_COMPLETO_RESPONSABLE", SqlDbType.VarChar)                       { Value = (object)nombreCompletoResponsable ?? DBNull.Value },                
                new SqlParameter("CODIGO_EMPRESA_SISTEMA", SqlDbType.UniqueIdentifier)                   { Value = (object)codigoEmpresaSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)                           { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.NVarChar)                                    { Value = (object)codigoIdioma ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Int)                                       { Value = (object)estadoRegistro ?? DBNull.Value },                
                new SqlParameter("NUMERO_PAGINA", SqlDbType.BigInt)                                      { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.BigInt)                                     { Value = (object)tamanioPagina ?? DBNull.Value },
                
            };

            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<AccionEstrategicaSectorialLogic>("MNT.USP_ACCION_ESTRATEGICA_SECTORIAL_SEL", parametros).ToList();
            return resultado;
        }
    }
}
