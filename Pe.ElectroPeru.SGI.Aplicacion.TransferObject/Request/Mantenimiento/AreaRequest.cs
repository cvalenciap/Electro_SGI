using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class AreaRequest : BaseRequest
    {
        public Guid? CodigoArea { get; set; }
        public string NombreArea { get; set; }
        public Guid? CodigoResponsable { get; set; }
        public string NombreResponsable { get; set; }

        /// <summary>
        /// Código del idioma
        /// </summary>
        public string CodigoIdioma { get; set; }

        /// <summary>
        /// Estado
        /// </summary>
        public string EstadoRegistroDescripcion { get; set; }
    }
}
