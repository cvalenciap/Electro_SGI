using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoIndicador
{
    /// <summary>
    /// Modelo de Observacion Planeada
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 27112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class IngresoIndicadorModel
    {
        /// <summary>
        /// Lista de Area 
        /// </summary>
        public List<SelectListItem> ListaTipoIndicador { get; set; }       
        /// <summary>
        /// Lista de Area 
        /// </summary>
        public List<SelectListItem> ListaArea { get; set; }
        /// <summary>
        /// Lista de Procedimiento 
        /// </summary>
        public List<SelectListItem> ListaPeriodicidad { get; set; }
        /// <summary>
        /// Lista de Verificacion Cumplimiento 
        /// </summary>
        public List<SelectListItem> ListaUnidadMedida { get; set; }        
        /// <summary>
        /// Inspecciones
        /// </summary>
        public IndicadorResponse Indicador { get; set; }
        /// <summary>
        /// Lista Inspeccion Gestion
        /// </summary>
        public List<IndicadorAmbitoResponse> ListaIndicadorAmbito { get; set; }
        /// <summary>
        /// Lista Inspeccion Gestion
        /// </summary>
        public List<IndicadorMetaResponse> ListaIndicadorMeta { get; set; }

        public IndicadorMetaResponse IndicadorMeta { get; set; }

        public IndicadorMetaAnualResponse IndicadorMetaAnual { get; set; }

        public IndicadorValorResponse IndicadorValor { get; set; }

        public IndicadorEvaluacionResponse IndicadorEvaluacion { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public List<SelectListItem> ListaIndicadorAmbitoTodos { get; set; }
        /// <summary>
        /// Lista de Area 
        /// </summary>
        public List<SelectListItem> ListaEstado { get; set; }
        /// <summary>
        /// Bandeja Inspeccion
        /// </summary>
        public BandejaIndicadorResponse Bandejandicador { get; set; }
        /// <summary>
        /// Lista de Area 
        /// </summary>
        public List<SelectListItem> ListaVariable { get; set; }

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

        public IngresoIndicadorModel()
        {           
            this.ListaArea = new List<SelectListItem>();
            this.ListaTipoIndicador = new List<SelectListItem>();
            this.ListaPeriodicidad = new List<SelectListItem>();
            this.ListaUnidadMedida = new List<SelectListItem>();
            this.ListaEstado = new List<SelectListItem>();
            this.Bandejandicador = new BandejaIndicadorResponse();
            this.ListaIndicadorAmbito = new List<IndicadorAmbitoResponse>();
            this.ListaIndicadorMeta = new List<IndicadorMetaResponse>();
            this.ListaIndicadorAmbitoTodos = new List<SelectListItem>();
            this.ListaVariable = new List<SelectListItem>();
            this.Indicador = new IndicadorResponse();
            this.IndicadorMeta = new IndicadorMetaResponse();
            this.IndicadorMetaAnual = new IndicadorMetaAnualResponse();
            this.IndicadorValor = new IndicadorValorResponse();
            this.IndicadorEvaluacion = new IndicadorEvaluacionResponse();

            this.ListaTrimestre = new List<SelectListItem>();
            this.ListaSemestre = new List<SelectListItem>();
            this.ListaSemana = new List<SelectListItem>();
            this.ListaMes = new List<SelectListItem>();
        }
    }
}
