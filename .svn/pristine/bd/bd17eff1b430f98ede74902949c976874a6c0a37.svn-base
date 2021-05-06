using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Politicas.ValorParametro
{
    /// <summary>
    /// Modelo de Valor de Parámetro
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class ValorParametroModel
    {
        /// <summary>
        /// Constructor de la Clase
        /// </summary>
        public ValorParametroModel()
        {
            ListaParametro = new List<SelectListItem>();
        }
        #region Propiedades 
        /// <summary>
        /// Lista de Parámetro
        /// </summary>
        public List<SelectListItem> ListaParametro { get; set; }
        /// <summary>
        /// Lista de Secciones
        /// </summary>
        public List<ParametroSeccionResponse> ListaSecciones { get; set; }
        /// <summary>
        /// Lista de Parámetro Relacionado
        /// </summary>
        public Dictionary<string,List<SelectListItem>> ListaParametroRelacionado { get; set; }
        /// <summary>
        /// Parámetro Actual
        /// </summary>
        public ParametroResponse ParametroActual { get; set; }
        /// <summary>
        /// Parámetro de Valor Actual
        /// </summary>
        public ParametroValorResponse ParametroValorActual { get; set; }
        #endregion
    }    
}
