using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse : BaseResponse
    {
        public Guid? CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional { get; set; }
        public Guid? CodigoObjetivoEstrategicoEmpresa { get; set; }
       
        public Guid? CodigoAccionEstrategicaInstitucional { get; set; }
        public string NombreAccionEstrategicaInstitucional { get; set; }
        public int? Permiso { get; set; }
    }
}
