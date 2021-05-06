using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class ObjetivoEstrategicoFonafeDetalleRequest : BaseRequest
    {
        public Guid? CodigoObjetivoEstrategicoFonafeDetalle { get; set; }
        public Guid? CodigoObjetivoEstrategicoFonafe { get; set; }

        public Guid? CodigoObjetivoEstrategicoEmpresa { get; set; }
        public string NombreObjetivoEstrategicoEmpresa { get; set; }

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
