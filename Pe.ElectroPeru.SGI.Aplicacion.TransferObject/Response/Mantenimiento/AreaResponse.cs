using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class AreaResponse : BaseResponse
    {
        public Guid? CodigoArea { get; set; }
        public string NombreArea { get; set; }
        public Guid? CodigoResponsable { get; set; }
        public string NombreResponsable { get; set; }

        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
