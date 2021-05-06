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
    public class PerspectivaLogicRepository : QueryRepository<PerspectivaLogic>, IPerspectivaLogicRepository
    {
        /// <summary>
        /// Permite la búsqueda de Mantenimiento
        /// </summary>      
        public List<PerspectivaLogic> BuscarPerspectiva(
            Guid? codigoPerspectiva,
            string nombrePerspectiva,
            string descripcionPerspectiva,
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
                new SqlParameter("CODIGO_PERSPECTIVA", SqlDbType.UniqueIdentifier)      { Value = (object)codigoPerspectiva ?? DBNull.Value },
                new SqlParameter("NOMBRE_PERSPECTIVA", SqlDbType.VarChar)               { Value = (object)nombrePerspectiva ?? DBNull.Value },
                new SqlParameter("DESCRIPCION_PERSPECTIVA", SqlDbType.VarChar)          { Value = (object)descripcionPerspectiva ?? DBNull.Value },
                new SqlParameter("NOMBRE_COMPLETO_RESPONSABLE", SqlDbType.VarChar)      { Value = (object)nombreCompletoResponsable ?? DBNull.Value },                
                new SqlParameter("CODIGO_EMPRESA_SISTEMA", SqlDbType.UniqueIdentifier)  { Value = (object)codigoEmpresaSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)          { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.NVarChar)                   { Value = (object)codigoIdioma ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Int)                      { Value = (object)estadoRegistro ?? DBNull.Value },                
                new SqlParameter("NUMERO_PAGINA", SqlDbType.BigInt)                     { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.BigInt)                    { Value = (object)tamanioPagina ?? DBNull.Value },
                
            };

            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<PerspectivaLogic>("MNT.USP_PERSPECTIVA_SEL", parametros).ToList();
            return resultado;
        }
    }
}
