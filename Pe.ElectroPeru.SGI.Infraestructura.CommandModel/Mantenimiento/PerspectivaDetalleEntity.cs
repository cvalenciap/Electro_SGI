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
    public class PerspectivaDetalleEntity : Entity
    {
        public Guid? CodigoPerspectivaDetalle { get; set; }
        public Guid? CodigoPerspectiva { get; set; }
        public Guid? CodigoObjetivoEstrategicoFonafe { get; set; }        
    }
}
