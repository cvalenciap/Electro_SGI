using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class ObjetivoEstrategicoFonafeDetalleResponse : BaseResponse
    {
        public Guid? CodigoObjetivoEstrategicoFonafeDetalle { get; set; }
        public Guid? CodigoObjetivoEstrategicoFonafe { get; set; }

        public Guid? CodigoObjetivoEstrategicoEmpresa { get; set; }
        public string NombreObjetivoEstrategicoEmpresa { get; set; }

        public int? Permiso { get; set; }
    }
}
