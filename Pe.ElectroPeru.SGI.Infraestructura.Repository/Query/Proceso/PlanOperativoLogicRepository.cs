using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Proceso;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Proceso;
using Pe.ElectroPeru.SGI.Infraestructura.Repository.Base;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Query.Proceso
{
    public class PlanOperativoLogicRepository : QueryRepository<PlanOperativoLogic>, IPlanOperativoLogicRepository
    {
        public List<PlanOperativoLogic> BuscarPlanOperativo(
            string descripcionObjetivoEstrategicoFonafe,            
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {                
                new SqlParameter("DESCRIPCION_OBJETIVO_ESTRATEGICO_FONAFE", SqlDbType.VarChar)   { Value = (object)descripcionObjetivoEstrategicoFonafe ?? DBNull.Value },                
                new SqlParameter("CODIGO_EMPRESA_SISTEMA", SqlDbType.UniqueIdentifier)           { Value = (object)codigoEmpresaSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)                   { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.VarChar)                             { Value = (object)codigoIdioma ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char)                              { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.BigInt)                              { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.BigInt)                             { Value = (object)tamanioPagina ?? DBNull.Value },
            };

            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<PlanOperativoLogic>("MNT.USP_PLAN_OPERATIVO_SEL", parametros).ToList();
            return resultado;
        }

        public List<PlanOperativoLogic> BuscarPlanOperativoRpt()
        {            
            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<PlanOperativoLogic>("PRO.USP_PLAN_OPERATIVO_RPT").ToList();
            return resultado;
        }

    }
}
