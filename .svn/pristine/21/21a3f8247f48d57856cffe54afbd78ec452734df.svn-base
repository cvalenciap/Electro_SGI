using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoObjetivoEstrategicoFonafe
{
    /// <summary>
    /// Modelo de Observacion Planeada
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 27112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class IngresoObjetivoEstrategicoFonafeModel
    {
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaObjetivoEstrategicoEmpresa { get; set; }      
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaEstadoArea { get; set; }       
        /// <summary>
        /// Mantenimiento
        /// </summary>
        public ObjetivoEstrategicoFonafeResponse ObjetivoEstrategicoFonafe { get; set; }
        /// <summary>
        /// Lista Inspeccion Gestion
        /// </summary>
        public List<ObjetivoEstrategicoFonafeDetalleResponse> ListaObjetivoEstrategicoFonafeDetalle { get; set; }
        public ObjetivoEstrategicoFonafeDetalleResponse ObjetivoEstrategicoFonafeDetalle { get; set; }
        public BandejaObjetivoEstrategicoFonafeResponse BandejaObjetivoEstrategicoFonafe { get; set; }


        public IngresoObjetivoEstrategicoFonafeModel()
        {
            this.ListaObjetivoEstrategicoEmpresa = new List<SelectListItem>();           
            this.ListaEstadoArea = new List<SelectListItem>();
            this.ObjetivoEstrategicoFonafe = new ObjetivoEstrategicoFonafeResponse();
            this.BandejaObjetivoEstrategicoFonafe = new BandejaObjetivoEstrategicoFonafeResponse();
            this.ObjetivoEstrategicoFonafeDetalle = new ObjetivoEstrategicoFonafeDetalleResponse();
        }
    }
}
