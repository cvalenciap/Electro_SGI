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
    public class VariableEntity : Entity
    {
        public Guid? CodigoVariable { get; set; }
        /// <summary>
        /// Nombre de Área
        /// </summary>
        public string NombreVariable { get; set; }
        /// <summary>
        /// Código de Colaborador Responsable
        /// </summary>
        public string NombreSiglaVariable { get; set; }
        /// <summary>
        /// Código de Colaborador Responsable
        /// </summary>
        public string DescripcionVariable { get; set; }
        /// <summary>
        /// Código de Colaborador Responsable
        /// </summary>
        public int? CodigoTipoVariable { get; set; }
    }
}
