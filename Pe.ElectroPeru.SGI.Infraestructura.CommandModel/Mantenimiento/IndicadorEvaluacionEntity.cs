using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento
{
    /// <summary>
    /// Entidad de Campo
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 08022017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class IndicadorEvaluacionEntity : Entity
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
        ///// <summary>
        ///// Mes
        ///// </summary>
        //public string Mes { get; set; }
        /// <summary>
        /// Sub Tipo
        /// </summary>
        public string CodigoSubTipoPeriodicidad { get; set; }       
        /// <summary>
        /// Valor Evaluacion
        /// </summary>
        public decimal? ValorEvaluacion { get; set; }
    }
}
