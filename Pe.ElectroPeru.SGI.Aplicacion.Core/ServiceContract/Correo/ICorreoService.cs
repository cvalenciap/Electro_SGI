using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Correo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Correo
{
    /// <summary>
    /// Definición del servicio de aplicación Correo
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 05042017 <br />
    /// Modificación:            <br />
    /// </remarks>
    public interface ICorreoService : IGenericService
    {
        /// <summary>
        /// Realiza el envio de Correo a Demanda
        /// </summary>
        /// <param name="filtro">Configuracion del correo a Enviar</param>
        /// <returns>Conformidad de ejecución</returns>
        ProcessResult<string> Enviar(EmailRequest logic);
    }
}
