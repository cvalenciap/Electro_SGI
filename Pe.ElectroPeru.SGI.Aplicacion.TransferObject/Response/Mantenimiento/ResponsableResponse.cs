using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class ResponsableResponse : BaseResponse
    {
        public Guid? CodigoResponsable { get; set; }
        public string Nombres { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string NombreCompleto { get; set; }
        public int? CodigoGenero { get; set; }
        public string NombreGenero { get; set; }
        public int? CodigoCargo { get; set; }
        public string NombreCargo { get; set; }
        public int? CodigoTipoDocumento { get; set; }
        public string NombreTipoDocumento { get; set; }
        public string NumeroDocumento { get; set; }
        public string CorreoElectronico { get; set; }

        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
