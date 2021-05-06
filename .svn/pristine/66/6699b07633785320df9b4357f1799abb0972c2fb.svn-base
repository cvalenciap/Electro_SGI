using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoPerspectiva
{
    /// <summary>
    /// Modelo de Observacion Planeada
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 27112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class IngresoPerspectivaModel
    {
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaObjetivoEstrategicoFonafe { get; set; }      
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaEstadoArea { get; set; }       
        /// <summary>
        /// Mantenimiento
        /// </summary>
        public PerspectivaResponse Perspectiva { get; set; }
        /// <summary>
        /// Lista Inspeccion Gestion
        /// </summary>
        public List<PerspectivaDetalleResponse> ListaPerspectivaDetalle { get; set; }
        public PerspectivaDetalleResponse PerspectivaDetalle { get; set; }
        public BandejaPerspectivaResponse BandejaPerspectiva { get; set; }


        public IngresoPerspectivaModel()
        {
            this.ListaObjetivoEstrategicoFonafe = new List<SelectListItem>();           
            this.ListaEstadoArea = new List<SelectListItem>();
            this.Perspectiva = new PerspectivaResponse();
            this.BandejaPerspectiva = new BandejaPerspectivaResponse();
            this.PerspectivaDetalle = new PerspectivaDetalleResponse();
        }
    }
}
