using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class AccionEstrategicaSectorialResponse : BaseResponse
    {
        public Guid? CodigoAccionEstrategicaSectorial { get; set; }
        public string NombreAccionEstrategicaSectorial { get; set; }
        public string DescripcionAccionEstrategicaSectorial { get; set; }      
        public Guid? CodigoResponsable { get; set; }
        public string NombreCompletoResponsable { get; set; }
       
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
