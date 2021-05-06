using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class VariableRequest : BaseRequest
    {
        public Guid? CodigoVariable { get; set; }
        public string NombreVariable { get; set; }
        public string NombreSiglaVariable { get; set; }
        public string DescripcionVariable { get; set; }
        public int? CodigoTipoVariable { get; set; }

        /// <summary>
        /// Código del idioma
        /// </summary>
        public string CodigoIdioma { get; set; }
      
        public List<VariableDetalleRequest> ListaVariableDetalle { get; set; }

        public VariableRequest() {
            this.ListaVariableDetalle = new List<VariableDetalleRequest>();
        }
    }
}
