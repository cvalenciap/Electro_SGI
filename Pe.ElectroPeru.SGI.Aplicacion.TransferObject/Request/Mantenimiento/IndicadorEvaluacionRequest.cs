using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class IndicadorEvaluacionRequest : BaseRequest
    {
        /// <summary>
        /// Codigo Indicador Evaluacion
        /// </summary>
        public Guid? CodigoIndicadorEvaluacion { get; set; }
        /// <summary>
        /// Codigo Indicador
        /// </summary>
        public Guid CodigoIndicador { get; set; }
        /// <summary>
        /// Año
        /// </summary>
        public string Anio { get; set; }
        /// <summary>
        /// Mes
        /// </summary>
        public string Mes { get; set; }
        /// <summary>
        /// Sub Tipo
        /// </summary>
        public string CodigoSubTipoPeriodicidad { get; set; }
        /// <summary>
        /// Sub Tipo
        /// </summary>
        public string DescripcionSubTipoPeriodicidad { get; set; }
        /// <summary>
        /// Evaluacion Evaluacion
        /// </summary>
        public decimal? ValorEvaluacion { get; set; }

        /// <summary>
        /// Código del idioma
        /// </summary>
        public string CodigoIdioma { get; set; }
    }
}
