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
    public class VariableDetalleEntity : Entity
    {
        public Guid? CodigoDetalleVariable { get; set; }
        public Guid? CodigoVariable { get; set; }
        /// <summary>
        /// Fecha Ejecucion
        /// </summary>
        public DateTime? FechaInicioVigencia { get; set; }
        /// <summary>
        /// Fecha Ejecucion
        /// </summary>
        public DateTime? FechaFinVigencia { get; set; }
        /// <summary>
        /// Código de Colaborador Responsable
        /// </summary>
        public Guid? CodigoArea { get; set; }
        /// <summary>
        /// Código de Colaborador Responsable
        /// </summary>
        public Guid? CodigoResponsable { get; set; }
        /// <summary>
        /// Código de Colaborador Responsable
        /// </summary>
        public int? CodigoPeriodicidad { get; set; }
    }
}
