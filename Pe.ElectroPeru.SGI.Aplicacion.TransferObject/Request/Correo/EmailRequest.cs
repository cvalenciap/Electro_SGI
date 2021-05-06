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
    public class EmailRequest : BaseRequest
    {
        /// <summary>
        /// EmailRequest
        /// </summary>
        public EmailRequest()
        {
            Para = new List<DireccionesRequest>();
            ConCopia = new List<DireccionesRequest>();
            Adjuntos = new List<AdjuntosRequest>();
        }
        /// <summary>
        /// Para
        /// </summary>
        public List<DireccionesRequest> Para { get; set; }
        /// <summary>
        /// ConCopia
        /// </summary>
        public List<DireccionesRequest> ConCopia { get; set; }
        /// <summary>
        /// Asunto
        /// </summary>
        public string Asunto { get; set; }
        /// <summary>
        /// Mensaje
        /// </summary>
        public string Mensaje { get; set; }
        /// <summary>
        /// Adjuntos
        /// </summary>
        public List<AdjuntosRequest> Adjuntos { get; set; }
    }
}
