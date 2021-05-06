using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Seguridad.Sistema
{
    public class SistemaModel
    {
        public SistemaResponse Sistema { get; set; }

        public List<SelectListItem> ListaEstado { get; set; }
    }
}
