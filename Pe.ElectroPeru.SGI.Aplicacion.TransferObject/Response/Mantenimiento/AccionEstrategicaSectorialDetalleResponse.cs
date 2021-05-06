using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class AccionEstrategicaSectorialDetalleResponse : BaseResponse
    {
        public Guid? CodigoAccionEstrategicaSectorialDetalle { get; set; }
        public Guid? CodigoAccionEstrategicaSectorial { get; set; }
       
        public Guid? CodigoObjetivoEstrategicoFonafe { get; set; }
        public string NombreObjetivoEstrategicoFonafe { get; set; }

        public int? Permiso { get; set; }
    }
}
