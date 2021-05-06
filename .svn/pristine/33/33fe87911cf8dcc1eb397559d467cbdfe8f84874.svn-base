using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class IndicadorRequest : BaseRequest
    {
        public Guid? CodigoIndicador { get; set; }
        public string DescripcionIndicador { get; set; }
        public Guid? CodigoFormula { get; set; }
        public string NombreFormula { get; set; }
        public Guid? CodigoResponsable { get; set; }
        public string NombreCompletoResponsable { get; set; }
        public int? CodigoPeriodicidad { get; set; }
        public string NombrePeriodicidad { get; set; }
        public Guid? CodigoArea { get; set; }
        public string NombreArea { get; set; }
        public int? CodigoUnidadMedida { get; set; }
        public string NombreUnidadMedida { get; set; }
        public int? CodigoTipoIndicador { get; set; }
        public string NombreTipoIndicador { get; set; }
        /// <summary>
        /// Fecha Ejecucion
        /// </summary>
        public DateTime? FechaInicioVigencia { get; set; }
        /// <summary>
        /// Fecha Ejecucion String
        /// </summary>
        public string FechaInicioVigenciaString { get; set; }
        /// <summary>
        /// Fecha Ejecucion
        /// </summary>
        public DateTime? FechaFinVigencia { get; set; }
        /// <summary>
        /// Fecha Ejecucion String
        /// </summary>
        public string FechaFinVigenciaString { get; set; }
        public decimal? RatioMaximo { get; set; }
        public decimal? RatioMinimo { get; set; }
        public decimal? Ponderacion { get; set; }
                
        /// <summary>
        /// Código del idioma
        /// </summary>
        public string CodigoIdioma { get; set; }

        /// <summary>
        /// Estado
        /// </summary>
        public string EstadoRegistroDescripcion { get; set; }

        public List<IndicadorAmbitoRequest> ListaIndicadorAmbito { get; set; }

        public List<IndicadorMetaRequest> ListaIndicadorMeta { get; set; }

        public IndicadorRequest() {
            this.ListaIndicadorAmbito = new List<IndicadorAmbitoRequest>();
            this.ListaIndicadorMeta = new List<IndicadorMetaRequest>();
        }
    }
}
