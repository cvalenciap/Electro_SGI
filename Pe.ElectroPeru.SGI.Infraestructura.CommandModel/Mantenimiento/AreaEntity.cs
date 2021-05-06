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
    public class AreaEntity : Entity
    {
        public Guid? CodigoArea { get; set; }
        /// <summary>
        /// Nombre de Área
        /// </summary>
        public string NombreArea { get; set; }
        /// <summary>
        /// Código de Colaborador Responsable
        /// </summary>
        public Nullable<System.Guid> CodigoResponsable { get; set; }
    }
}
