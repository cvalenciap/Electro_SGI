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
    public class VariableValorEntity : Entity
    {
        /// <summary>
        /// Codigo Variable Meta
        /// </summary>
        public Guid? CodigoVariableValor { get; set; }
        /// <summary>
        /// Codigo Variable
        /// </summary>
        public Guid CodigoVariable { get; set; }
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
        /// Sub Tipo
        /// </summary>
        public string DescripcionSubTipoPeriodicidad { get; set; }
        /// <summary>
        /// Valor Meta
        /// </summary>
        public decimal? Valor { get; set; }
    }
}
