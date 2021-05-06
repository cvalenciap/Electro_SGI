using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class ObjetivoEstrategicoSectorialResponse : BaseResponse
    {
        public Guid? CodigoObjetivoEstrategicoSectorial { get; set; }
        public string NombreObjetivoEstrategicoSectorial { get; set; }
        public string DescripcionObjetivoEstrategicoSectorial { get; set; }        
        public Guid? CodigoResponsable { get; set; }
        public string NombreCompletoResponsable { get; set; }
       
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
