using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Correo;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Correo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Correo
{
    /// <summary>
    /// Adaptador de Correo
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 25082015 <br />
    /// Modificación:            <br />
    /// </remarks>
    public sealed class CorreoAdapter
    {
        /// <summary>
        /// Obtiene un logic de correo apartir de su request
        /// </summary>
        /// <param name="parametroRequest">Request de correo</param>
        /// <returns>Logic del correoo</returns>
        public static EmailLogic ObtenerEmail(EmailRequest request)
        {
            var logic = new EmailLogic();
            logic.Para = new List<DireccionesLogic>();
            logic.ConCopia = new List<DireccionesLogic>();
            logic.Adjuntos = new List<AdjuntosLogic>();
            if (request.Para != null)
            {
                foreach (DireccionesRequest item in request.Para)
                {
                    logic.Para.Add(new DireccionesLogic() { Email = item.Email, NombreCompleto = item.NombreCompleto });
                }
            }
            if (request.ConCopia != null)
            {
                foreach (DireccionesRequest item in request.ConCopia)
                {
                    logic.ConCopia.Add(new DireccionesLogic() { Email = item.Email, NombreCompleto = item.NombreCompleto });
                }
            }
            if (request.Adjuntos != null)
            {
                foreach (AdjuntosRequest item in request.Adjuntos)
                {
                    logic.Adjuntos.Add(new AdjuntosLogic() { Archivo = item.Archivo, NombreArchivo = item.NombreArchivo });
                }
            }
            logic.Asunto = request.Asunto;
            logic.Mensaje = request.Mensaje;
            return logic;
        }
    }
}
