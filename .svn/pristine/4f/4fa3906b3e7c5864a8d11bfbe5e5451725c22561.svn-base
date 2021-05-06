using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoAccionEstrategicaInstitucional
{
    /// <summary>
    /// Modelo de Observacion Planeada
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 27112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class IngresoAccionEstrategicaInstitucionalModel
    {        
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaIndicador { get; set; }
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaEstadoArea { get; set; }       
        /// <summary>
        /// Mantenimiento
        /// </summary>
        public AccionEstrategicaInstitucionalResponse AccionEstrategicaInstitucional { get; set; }
        /// <summary>
        /// Lista Inspeccion Gestion
        /// </summary>
        public List<AccionEstrategicaInstitucionalDetalleResponse> ListaAccionEstrategicaInstitucionalDetalle { get; set; }
        public AccionEstrategicaInstitucionalDetalleResponse AccionEstrategicaInstitucionalDetalle { get; set; }
        public BandejaAccionEstrategicaInstitucionalResponse BandejaAccionEstrategicaInstitucional { get; set; }


        public IngresoAccionEstrategicaInstitucionalModel()
        {           
            this.ListaIndicador = new List<SelectListItem>();
            this.ListaEstadoArea = new List<SelectListItem>();
            this.AccionEstrategicaInstitucional = new AccionEstrategicaInstitucionalResponse();
            this.BandejaAccionEstrategicaInstitucional = new BandejaAccionEstrategicaInstitucionalResponse();
            this.AccionEstrategicaInstitucionalDetalle = new AccionEstrategicaInstitucionalDetalleResponse();
        }
    }
}
