using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class PerspectivaDetalleResponse : BaseResponse
    {
        public Guid? CodigoPerspectivaDetalle { get; set; }
        public Guid? CodigoPerspectiva { get; set; }

        public Guid? CodigoObjetivoEstrategicoFonafe { get; set; }
        public string NombreObjetivoEstrategicoFonafe { get; set; }

        public int? Permiso { get; set; }

    }
}
