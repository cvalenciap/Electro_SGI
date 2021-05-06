using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.PlantillaNotificacion;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.PlantillaNotificacion;
using Pe.ElectroPeru.SGI.Infraestructura.Repository.Base;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Query.PlantillaNotificacion
{
    /// <summary>
    /// Implementación del repositorio de Plantilla Notificacion Logic 
    /// </summary>
    /// <remarks>
    /// Creación:   GMD <br />
    /// Modificación:            <br />
    /// </remarks>
    public class PlantillaNotificacionLogicRepository : QueryRepository<PlantillaNotificacionLogic>, IPlantillaNotificacionLogicRepository
    {
        /// <summary>
        /// Método para buscar plantillas de notificación
        /// </summary>
        /// <param name="codigoPlantillaNotificacion">Código de Plantilla de Notificación</param>
        /// <param name="codigoSistema"></param>
        /// <param name="codigoTipoNotificacion"></param>
        /// <param name="asunto"></param>
        /// <param name="indicadorActiva"></param>
        /// <param name="contenido"></param>
        /// <param name="estadoRegistro"></param>
        /// <returns>Lista de plantillas de notificación</returns>
        public List<PlantillaNotificacionLogic> BuscarPlantillaNotificacion(
            Guid? codigoPlantillaNotificacion,
            string codigoTipoNotificacion,
            string asunto,
            string contenido,
            string estadoRegistro,
            int numeroPagina = 1,
            int registrosPagina = 100
        )
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_PLANTILLA_NOTIFICACION", SqlDbType.UniqueIdentifier)   { Value = (object)codigoPlantillaNotificacion ?? DBNull.Value },
                new SqlParameter("CODIGO_TIPO_NOTIFICACION", SqlDbType.NVarChar)                { Value = (object)codigoTipoNotificacion ?? DBNull.Value },
                new SqlParameter("ASUNTO", SqlDbType.NVarChar)                                  { Value = (object)asunto ?? DBNull.Value },
                new SqlParameter("CONTENIDO", SqlDbType.NVarChar)                               { Value = (object)contenido ?? DBNull.Value },                
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.NVarChar)                         { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.Int)                                { Value = numeroPagina },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.Int)                               { Value = registrosPagina }
            };
            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<PlantillaNotificacionLogic>("POL.USP_PLANTILLA_NOTIFICACION_SEL", parametros).ToList();

            return resultado;
        }
    }
}
