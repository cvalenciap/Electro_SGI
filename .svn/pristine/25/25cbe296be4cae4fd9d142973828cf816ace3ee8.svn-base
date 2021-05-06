using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.PlantillaNotificacion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.PlantillaNotificacion
{
    public interface IPlantillaNotificacionLogicRepository : IQueryRepository<PlantillaNotificacionLogic>
    {
        /// <summary>
        /// Realiza la busqueda de Plantilla 
        /// </summary>
        /// <param name="codigoPlantillaNotificacion">Código Plantilla Notificacion</param>
        /// <param name="codigoSistema">Código Sistema</param>
        /// <param name="codigoTipoNotificacion">Código Tipo Notificacion</param>
        /// <param name="asunto">Asunto</param>
        /// <param name="indicadorActiva">Indicador Activa</param>
        /// <param name="contenido">Contenido</param>
        /// <param name="estadoRegistro">Estado Registro</param>
        /// <returns>Lista con el resultado de la operación</returns>
        List<PlantillaNotificacionLogic> BuscarPlantillaNotificacion(
            Guid? codigoPlantillaNotificacion,
            string codigoTipoNotificacion,
            string asunto,
            string contenido,
            string estadoRegistro,
            int numeroPagina,
            int registrosPagina
        );
    }
}
