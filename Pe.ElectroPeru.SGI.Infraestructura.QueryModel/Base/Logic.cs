using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base
{
    /// <summary>
    /// Entity Logic
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class Logic
    {
        /// <summary>
        /// Estado de Registro
        /// </summary>
        public string EstadoRegistro { get; set; }
        /// <summary>
        /// Número de Registro
        /// </summary>
        public long NumeroRegistro { get; set; }
        /// <summary>
        /// Registros por Pagina
        /// </summary>
        public long TotalRegistro { get; set; }

       
    }
}
