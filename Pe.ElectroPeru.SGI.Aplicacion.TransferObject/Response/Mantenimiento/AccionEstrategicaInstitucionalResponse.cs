using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class AccionEstrategicaInstitucionalResponse : BaseResponse
    {
        public Guid? CodigoAccionEstrategicaInstitucional { get; set; }
        public string NombreAccionEstrategicaInstitucional { get; set; }
        public string DescripcionAccionEstrategicaInstitucional { get; set; }      
        public Guid? CodigoResponsable { get; set; }
        public string NombreCompletoResponsable { get; set; }
       
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
