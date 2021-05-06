using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Politicas;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Politicas;
using Pe.ElectroPeru.SGI.Infraestructura.Repository.Base;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Query.Politicas
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
            Guid? codigoSistema,
            string codigoTipoNotificacion,
            string asunto,
            bool? indicadorActiva,
            string contenido,
            string estadoRegistro, 
            int numeroPagina = 1,
            int registrosPagina = -1
        )
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_PLANTILLA_NOTIFICACION", SqlDbType.UniqueIdentifier)   { Value = (object)codigoPlantillaNotificacion ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)                  { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_TIPO_NOTIFICACION", SqlDbType.NVarChar)                { Value = (object)codigoTipoNotificacion ?? DBNull.Value },
                new SqlParameter("ASUNTO", SqlDbType.NVarChar)                                  { Value = (object)asunto ?? DBNull.Value },
                new SqlParameter("INDICADOR_ACTIVA", SqlDbType.Bit)                             { Value = (object)indicadorActiva ?? DBNull.Value },                
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
