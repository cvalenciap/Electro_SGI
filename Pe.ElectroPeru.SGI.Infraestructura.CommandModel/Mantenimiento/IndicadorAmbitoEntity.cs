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
    public class IndicadorAmbitoEntity : Entity
    {
        /// <summary>
        /// Codigo Indicador Ambito
        /// </summary>
        public Guid? CodigoIndicadorAmbito { get; set; }
        /// <summary>
        /// Codigo Indicador
        /// </summary>
        public Guid CodigoIndicador { get; set; }
        /// <summary>
        /// Tipo Ambito
        /// </summary>
        public int? CodigoAmbito { get; set; }
        /// <summary>
        /// Tipo Ambito Otros
        /// </summary>
        public string AmbitoOtros { get; set; }
    }
}
