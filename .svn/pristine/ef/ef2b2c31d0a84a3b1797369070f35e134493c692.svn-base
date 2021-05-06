using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.Responsable
{
    /// <summary>
    /// Modelo de Responsable
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 01022017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class FormularioResponsableModel
    {
        /// <summary>
        /// Clase Response de Responsable
        /// </summary>
        public ResponsableResponse Responsable { get; set; }

        /// <summary>
        /// Lista de Género
        /// </summary>
        public List<SelectListItem> ListaGenero { get; set; }       

        /// <summary>
        /// Lista Cargo
        /// </summary>
        public List<SelectListItem> ListaCargo { get; set; }

        /// <summary>
        /// Lista de Tipos de Documento de Identidad
        /// </summary>
        public List<SelectListItem> ListaTipoDocumento { get; set; }
       
        /// <summary>
        /// Lista de Estado de Registro
        /// </summary>
        public List<SelectListItem> ListaEstadoRegistro { get; set; }


        /// <summary>
        /// Constructor de la Clase
        /// </summary>
        public FormularioResponsableModel()
        {
            this.Responsable = new ResponsableResponse();
            this.ListaGenero = new List<SelectListItem>();          
            this.ListaCargo = new List<SelectListItem>();
            this.ListaTipoDocumento = new List<SelectListItem>();          
            this.ListaEstadoRegistro = new List<SelectListItem>();
        }
    }
}
