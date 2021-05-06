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
    public class IndicadorMetaAnualEntity : Entity
    {
        /// <summary>
        /// Codigo Indicador MetaAnual
        /// </summary>
        public Guid? CodigoIndicadorMetaAnual { get; set; }
        /// <summary>
        /// Codigo Indicador
        /// </summary>
        public Guid CodigoIndicador { get; set; }
        /// <summary>
        /// Año
        /// </summary>
        public string Anio { get; set; }       
        /// <summary>
        /// Valor MetaAnual
        /// </summary>
        public decimal? ValorMetaAnual { get; set; }
    }
}
