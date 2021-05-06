using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class PerspectivaDetalleRequest : BaseRequest
    {
        public Guid? CodigoPerspectivaDetalle { get; set; }
        public Guid? CodigoPerspectiva { get; set; }

        public Guid? CodigoObjetivoEstrategicoFonafe { get; set; }
        public string NombreObjetivoEstrategicoFonafe { get; set; }

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
