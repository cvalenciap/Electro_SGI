using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class PerspectivaResponse : BaseResponse
    {
        public Guid? CodigoPerspectiva { get; set; }
        public string NombrePerspectiva { get; set; }
        public string DescripcionPerspectiva { get; set; }       
        public Guid? CodigoResponsable { get; set; }
        public string NombreCompletoResponsable { get; set; }
        public string NombreObjetivoEstrategicoFonafe { get; set; }
        public string EstadoRegistroDescripcion { get; set; }
        public Guid? CodigoObjetivoEstrategicoFonafe { get; set; }

        public int? Permiso { get; set; }
    }
}
