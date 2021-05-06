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
    public class ObjetivoEstrategicoEmpresaLogic : Logic
    {
        public Guid? CodigoObjetivoEstrategicoEmpresa { get; set; }
        public string NombreObjetivoEstrategicoEmpresa { get; set; }
        public string DescripcionObjetivoEstrategicoEmpresa { get; set; }
        public int? CodigoModeloConceptual { get; set; }
        public string DescripcionModeloConceptual { get; set; }
        public Guid? CodigoResponsable { get; set; }
        public string NombreCompletoResponsable { get; set; }
        public string EstadoRegistroDescripcion { get; set; }
    }
}

