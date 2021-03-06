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
    public class ObjetivoEstrategicoEmpresaDetalleLogic : Logic
    {
        public Guid? CodigoObjetivoEstrategicoEmpresaDetalle { get; set; }
        public Guid? CodigoObjetivoEstrategicoEmpresa { get; set; }

        public Guid? CodigoIndicador { get; set; }
        public string NombreIndicador { get; set; }

        public int? CodigoPeriodicidad { get; set; }

        public int? CodigoAmbito { get; set; }

        public Guid? CodigoFormula { get; set; }
        public string NombreFormula { get; set; }
    }
}

