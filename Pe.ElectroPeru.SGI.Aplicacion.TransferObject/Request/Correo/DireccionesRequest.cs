using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Correo
{
    /// <summary>
    /// Request de Correo
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 25082015 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class DireccionesRequest : BaseRequest
    {
        /// <summary>
        /// Email
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// Para
        /// </summary>
        public string NombreCompleto { get; set; }
    }
}
