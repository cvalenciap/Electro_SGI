using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class FormulaDetalleResponse : BaseResponse
    {
        public Guid? CodigoFormulaDetalle { get; set; }
        public Guid? CodigoFormula { get; set; }
        public string NombreFormula { get; set; }
        public Guid? CodigoVariable { get; set; }
        public string DescripcionValor { get; set; }
        public string NombreVariable { get; set; }

        public int? Permiso { get; set; }
    }
}
