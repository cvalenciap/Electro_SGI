using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.Area
{
    public class FormularioAreaModel
    {
        public AreaResponse Area { get; set; }
        /// <summary>
        /// 
        /// </summary>       
        public List<SelectListItem> ListaCargo { get; set; }
        public List<SelectListItem> ListaGenero { get; set; }      
        public int? CodigoArea { get; set; }
       
        public Guid? CodigoResponsable { get; set; }

        /// <summary>
        /// Nombre de Área
        /// </summary>
        public string NombreArea { get; set; }

        /// <summary>
        /// Nombre de Responsable
        /// </summary>
        public string NombreResponsable { get; set; }

        /// <summary>
        /// Lista de Estados de Área
        /// </summary>
        public List<SelectListItem> ListaEstadoArea { get; set; }

        public FormularioAreaModel()
        {
            this.Area = new AreaResponse();         ;
            this.ListaEstadoArea = new List<SelectListItem>();
            this.ListaCargo = new List<SelectListItem>();
            this.ListaGenero = new List<SelectListItem>();     
        }
    }
}
