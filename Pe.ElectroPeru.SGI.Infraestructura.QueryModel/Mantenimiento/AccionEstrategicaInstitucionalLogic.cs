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
    public class AccionEstrategicaInstitucionalLogic : Logic
    {
        public Guid? CodigoAccionEstrategicaInstitucional { get; set; }
        public string NombreAccionEstrategicaInstitucional { get; set; }
        public string DescripcionAccionEstrategicaInstitucional { get; set; }
        public Guid? CodigoResponsable { get; set; }
        public string NombreCompletoResponsable { get; set; }
        public string EstadoRegistroDescripcion { get; set; }
    }
}

