using Pe.ElectroPeru.SGI.Aplicacion.Adapter.Correo;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Correo;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Contractual;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Correo;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Correo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Correo
{
    /// <summary>
    /// Servicio de aplicación Correo
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 05042017 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class CorreoService : GenericService, ICorreoService
    {
        /// <summary>
        /// Repositorio de Envio de Correos
        /// </summary>
        public ICorreoLogicProxy correoLogicProxy { get; set; }
        /// <summary>
        /// Realiza el envio de Correo a Demanda
        /// </summary>
        /// <param name="filtro">Configuracion del correo a Enviar</param>
        /// <returns>Conformidad de ejecución</returns>
        public ProcessResult<string> Enviar(EmailRequest logic)
        {
            ProcessResult<string> result = new ProcessResult<string>();
            result.IsSuccess = correoLogicProxy.Enviar(CorreoAdapter.ObtenerEmail(logic));
            return result;
        }
    }
}
