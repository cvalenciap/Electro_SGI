using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class AccionEstrategicaInstitucionalDetalleResponse : BaseResponse
    {
        public Guid? CodigoAccionEstrategicaInstitucionalDetalle { get; set; }
        public Guid? CodigoAccionEstrategicaInstitucional { get; set; }
       
        public Guid? CodigoIndicador { get; set; }
        public string NombreIndicador { get; set; }

        public Guid? CodigoFormula { get; set; }
        public string NombreFormula { get; set; }

        public int? Permiso { get; set; }
    }
}
