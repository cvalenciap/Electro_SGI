using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Base
{
    public class PrincipalModel
    {
        #region Propiedades
        /// <summary>
        /// Código de Idioma
        /// </summary>
        public string CodigoIdioma { get; set; }

        /// <summary>
        /// Lista de Idiomas
        /// </summary>
        public List<SelectListItem> ListaIdioma { get; set; }
        #endregion

        /// <summary>
        /// Constructor de la clase
        /// </summary>
        public PrincipalModel()
        {
            this.ListaIdioma = new List<SelectListItem>();
        }
    }
}
