using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento
{
    /// <summary>
    /// Logic de Tabla de Área
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class FormulaDetalleLogic : Logic
    {
        public Guid? CodigoFormulaDetalle { get; set; }
        public Guid? CodigoFormula { get; set; }
        public string NombreFormula { get; set; }
        public Guid? CodigoVariable { get; set; }
        public string DescripcionValor { get; set; }
        public string NombreVariable { get; set; }
    }
}

