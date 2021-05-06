//using Pe.GyM.Security.Account.Model;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Politicas.PlantillaNotificacion
{
    /// <summary>
    /// Modelo de Plantilla Notificacion Formulario
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class PlantillaNotificacionFormulario : GenericViewModel
    {
        /// <summary>
        /// Constructor de Plantilla Notificacion Response 
        /// </summary>
        /// <param name="plantillaNotificacionResponse">Plantilla notificación response</param>
        public PlantillaNotificacionFormulario(PlantillaNotificacionResponse plantillaNotificacionResponse)
        {
            this.plantillaNotificacionResponse = plantillaNotificacionResponse;
        }
        #region Propiedades
        /// <summary>
        /// Clase Plantilla Notificacion Response
        /// </summary>
        public PlantillaNotificacionResponse plantillaNotificacionResponse { get; set; }
        #endregion
    }
}
