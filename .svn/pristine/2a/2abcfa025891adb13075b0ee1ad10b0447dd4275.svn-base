using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Base;
//using Pe.GyM.Security.Account.Model;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Politicas.PlantillaNotificacion
{
    /// <summary>
    /// Modelo de vista para la bandeja de Plantillas de Notificación
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 20150319
    /// Modificación:   
    /// </remarks>
    public class PlantillaNotificacionModel : GenericViewModel
    {
        /// <summary>
        /// Lista para los indicadores de Plantilla Activa.
        /// </summary>
        public List<SelectListItem> ListaIndicadorActiva { get; set; }
        #region Propiedades
        /// <summary>
        /// Constructor de la Clase
        /// </summary>
        public PlantillaNotificacionModel()
        {
            this.ListaIndicadorActiva = this.GenerarListadoOpcioneEstadoFiltro();
        }

        /// <summary>
        /// Controles de Permiso
        /// </summary>
        /// COMENTADO POR ANGEL
        //public Control ControlPermisos { get; set; }
        #endregion
    }
}
