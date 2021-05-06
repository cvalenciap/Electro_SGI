using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Reportes;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Reportes;
using Pe.ElectroPeru.SGI.Infraestructura.Repository.Base;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Query.Reportes
{
    public class DashboardLogicRepository : QueryRepository<DashboardLogic>, IDashboardLogicRepository
    {
        public List<DashboardLogic> Buscar(            
            string codigoIdioma,
            Guid? codigoIndicador,
            string tipoDashboard,
            string anio,
            string fecha,
            int tipoPeriodicidad,
            string codigoTipoPeriodicidad
        )
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.VarChar) { Value = (object)codigoIdioma ?? DBNull.Value },
                new SqlParameter("CODIGO_INDICADOR", SqlDbType.UniqueIdentifier) { Value = (object)codigoIndicador ?? DBNull.Value },
                new SqlParameter("TIPO_DAHBOARD", SqlDbType.Char) { Value = (object)tipoDashboard ?? DBNull.Value },
                new SqlParameter("TIPO_PERIODICIDAD", SqlDbType.Int) { Value = (object)tipoPeriodicidad ?? DBNull.Value },
                new SqlParameter("ANIO", SqlDbType.VarChar) { Value = (object)anio ?? DBNull.Value },
                new SqlParameter("FECHA", SqlDbType.VarChar) { Value = (object)fecha ?? DBNull.Value },                
                new SqlParameter("CODIGO_SUB_TIPO_PERIODICIDAD", SqlDbType.VarChar) { Value = (object)codigoTipoPeriodicidad ?? DBNull.Value }                
            };

            List<DashboardLogic> resultado = dataBaseProvider.ExecuteStoreProcedure<DashboardLogic>("MNT.USP_DASHBOARD_SEL", parametros).ToList();

            return resultado;
        }
    }
}
