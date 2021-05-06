using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Proceso;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Proceso.PlanEstrategico
{
    public class IngresoPlanEstrategicoModel
    {
        public BandejaPlanEstrategicoResponse BandejaPlanEstrategico { get; set; }
        public List<SelectListItem> ListaArea { get; set; }

        public IngresoPlanEstrategicoModel()
        {
            this.BandejaPlanEstrategico = new BandejaPlanEstrategicoResponse();
            this.ListaArea = new List<SelectListItem>();
        }
    }
}
