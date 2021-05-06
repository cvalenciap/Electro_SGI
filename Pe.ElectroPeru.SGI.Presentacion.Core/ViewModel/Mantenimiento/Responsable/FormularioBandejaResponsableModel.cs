using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.Responsable
{
    public class FormularioBandejaResponsableModel
    {
        public List<SelectListItem> ListaGenero { get; set; }
        public List<SelectListItem> ListaCargo { get; set; }
        public List<SelectListItem> ListaEstadoRegistro { get; set; }
        public List<SelectListItem> ListaTipoDocumento { get; set; }
   
        public FormularioBandejaResponsableModel()
        {
            this.ListaGenero = new List<SelectListItem>();
            this.ListaCargo = new List<SelectListItem>();
            this.ListaEstadoRegistro = new List<SelectListItem>();
            this.ListaTipoDocumento = new List<SelectListItem>();
        }
    }
}
