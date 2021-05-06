using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class ObjetivoEstrategicoSectorialDetalleResponse : BaseResponse
    {
        public Guid? CodigoObjetivoEstrategicoSectorialDetalle { get; set; }
        public Guid? CodigoObjetivoEstrategicoSectorial { get; set; }
       
        public Guid? CodigoAccionEstrategicaSectorial { get; set; }
        public string NombreAccionEstrategicaSectorial { get; set; }

        public int? Permiso { get; set; }
    }
}
