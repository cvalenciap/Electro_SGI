using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base
{
    [Serializable()]
    public class BaseResponse : Paginado
    {
        /// <summary>
        /// Estado de Registro
        /// </summary>
        public string EstadoRegistro { get; set; }
    }
}
