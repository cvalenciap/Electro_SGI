using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoFormula
{
    /// <summary>
    /// Modelo de Observacion Planeada
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 27112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class FormulaModel
    {      
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaVariable { get; set; }       
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaEstadoArea { get; set; }       
        /// <summary>
        /// Mantenimiento
        /// </summary>
        public FormulaResponse Formula { get; set; }
        /// <summary>
        /// Lista Inspeccion Gestion
        /// </summary>
        public List<FormulaDetalleResponse> ListaFormulaDetalle { get; set; }        
        public FormulaDetalleResponse FormulaDetalle { get; set; }        

        public FormulaModel()
        {            
            this.ListaVariable = new List<SelectListItem>();            
            this.ListaEstadoArea = new List<SelectListItem>();
            this.Formula = new FormulaResponse();            
            this.FormulaDetalle = new FormulaDetalleResponse();            
        }
    }
}
