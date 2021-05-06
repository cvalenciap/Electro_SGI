using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class ObjetivoEstrategicoSectorialDetalleRequest : BaseRequest
    {
        public Guid? CodigoObjetivoEstrategicoSectorialDetalle { get; set; }
        public Guid? CodigoObjetivoEstrategicoSectorial { get; set; }
       
        public Guid? CodigoAccionEstrategicaSectorial { get; set; }
        public string NombreAccionEstrategicaSectorial { get; set; }

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
