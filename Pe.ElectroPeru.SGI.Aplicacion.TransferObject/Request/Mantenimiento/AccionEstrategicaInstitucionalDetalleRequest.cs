using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class AccionEstrategicaInstitucionalDetalleRequest : BaseRequest
    {
        public Guid? CodigoAccionEstrategicaInstitucionalDetalle { get; set; }
        public Guid? CodigoAccionEstrategicaInstitucional { get; set; }
       
        public Guid? CodigoIndicador { get; set; }
        public string NombreIndicador { get; set; }

        public Guid? CodigoFormula { get; set; }
        public string NombreFormula { get; set; }

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
