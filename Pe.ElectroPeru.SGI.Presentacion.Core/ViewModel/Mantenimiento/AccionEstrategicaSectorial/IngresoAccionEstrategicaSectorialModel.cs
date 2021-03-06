using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoAccionEstrategicaSectorial
{
    /// <summary>
    /// Modelo de Observacion Planeada
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 27112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class IngresoAccionEstrategicaSectorialModel
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
        public AccionEstrategicaSectorialResponse AccionEstrategicaSectorial { get; set; }
        /// <summary>
        /// Lista Inspeccion Gestion
        /// </summary>
        public List<AccionEstrategicaSectorialDetalleResponse> ListaAccionEstrategicaSectorialDetalle { get; set; }
        public AccionEstrategicaSectorialDetalleResponse AccionEstrategicaSectorialDetalle { get; set; }
        public BandejaAccionEstrategicaSectorialResponse BandejaAccionEstrategicaSectorial { get; set; }


        public IngresoAccionEstrategicaSectorialModel()
        {           
            this.ListaObjetivoEstrategicoFonafe = new List<SelectListItem>();
            this.ListaEstadoArea = new List<SelectListItem>();
            this.AccionEstrategicaSectorial = new AccionEstrategicaSectorialResponse();
            this.BandejaAccionEstrategicaSectorial = new BandejaAccionEstrategicaSectorialResponse();
            this.AccionEstrategicaSectorialDetalle = new AccionEstrategicaSectorialDetalleResponse();
        }
    }
}
