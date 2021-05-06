using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoVariable
{
    /// <summary>
    /// Modelo de Observacion Planeada
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 27112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class IngresoVariableModel
    {
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaTipoVariable { get; set; }
        /// <summary>
        /// Lista de Tipo Comportamiento
        /// </summary>
        public List<SelectListItem> ListaArea { get; set; }
        /// <summary>
        /// Lista de Tipo Tarea 
        /// </summary>
        public List<SelectListItem> ListaPeriodicidad { get; set; }
        /// <summary>
        /// Lista Inspeccion Gestion
        /// </summary>
        public List<VariableValorResponse> ListaVariableValor { get; set; }

        public VariableValorResponse VariableValor { get; set; }
        /// <summary>
        /// Mantenimiento
        /// </summary>
        public VariableResponse Variable { get; set; }
        /// <summary>
        /// Lista Inspeccion Gestion
        /// </summary>
        public List<VariableDetalleResponse> ListaVariableDetalle { get; set; }
        /// <summary>
        /// Lista de Trimestres 
        /// </summary>
        public List<SelectListItem> ListaTrimestre { get; set; }

        /// <summary>
        /// Lista de Semestres 
        /// </summary>
        public List<SelectListItem> ListaSemestre { get; set; }

        /// <summary>
        /// Lista de Semanas 
        /// </summary>
        public List<SelectListItem> ListaSemana { get; set; }

        /// <summary>
        /// Lista de Meses 
        /// </summary>
        public List<SelectListItem> ListaMes { get; set; }

        public VariableDetalleResponse VariableDetalle { get; set; }
        public BandejaVariableResponse BandejaVariable { get; set; }


        public IngresoVariableModel()
        {
            this.ListaTipoVariable = new List<SelectListItem>();
            this.ListaArea = new List<SelectListItem>();
            this.ListaPeriodicidad = new List<SelectListItem>();
            this.ListaVariableDetalle = new List<VariableDetalleResponse>();           
            this.ListaArea = new List<SelectListItem>();           
            this.Variable = new VariableResponse();
            this.BandejaVariable = new BandejaVariableResponse();
            this.VariableDetalle = new VariableDetalleResponse();
            this.ListaVariableValor = new List<VariableValorResponse>();
            this.VariableValor = new VariableValorResponse();

            this.ListaTrimestre = new List<SelectListItem>();
            this.ListaSemestre = new List<SelectListItem>();
            this.ListaSemana = new List<SelectListItem>();
            this.ListaMes = new List<SelectListItem>();
        }
    }
}
