using System.Collections.Generic;
using System.Web.Mvc;
using System.Linq;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base
{
    /// <summary>
    /// Controladora web base
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 20150107
    /// Modificación:   
    /// </remarks>
    /// COMENTADO POR ANGEL
    //[AuthorizeFilter]
    public class GenericController : Controller
    {
        /// <summary>
        /// Obtiene el valor del idioma seleccionado en la session
        /// </summary>
        /// <returns></returns>
        public string obtenerCodigoIdioma()
        {
            string codigoIdioma = DatosConstantes.ParametrosGenerales.CodigoIdiomaPorDefecto;
            if (HttpContext.Session["CodigoIdioma"] != null)
            {
                codigoIdioma = HttpContext.Session["CodigoIdioma"].ToString();
            }
            return codigoIdioma;
        }


        /// <summary>
        /// Obtiene los valores para los combos
        /// </summary>
        /// <param name="codigoIdentificador">Codigo del Identificador</param>
        /// <param name="valorSeleccionado">valor seleccionado en el combo</param>
        /// <returns>Listado de valores</returns>
        public List<SelectListItem> ObtenerValoresParametroMultiple(string codigoIdentificador, string ValorSeleccionado)
        {
            List<SelectListItem> resultado = new List<SelectListItem>();
            if (HttpContext.Session["ListaItems"] != null)
            {
                var diccionario = (Dictionary<string, List<Tuple<string, string, string>>>)HttpContext.Session["ListaItems"];
                var lstParametro = diccionario.Where(x => x.Key == codigoIdentificador).Select(x => x.Value).ToList();
                foreach (var item in lstParametro[0])
                {
                    resultado.Add(new SelectListItem
                    {
                        Value = item.Item1,
                        Text = item.Item2,
                        Selected = ValorSeleccionado == item.Item1
                    });
                }
            }

            return resultado;
        }

        /// <summary>
        /// Obtiene los valores para los combos
        /// </summary>
        /// <param name="codigoIdentificador">Codigo del Identificador</param>
        /// <param name="valorSeleccionado">valor seleccionado en el combo</param>
        /// <returns>Listado de valores</returns>
        public List<SelectListItem> AgregarItemMaestroInactivo(List<SelectListItem> listaMaestro, string codigo, string valor)
        {
            listaMaestro.Add(new SelectListItem
                {
                    Value = codigo,
                    Text = valor,
                    Selected = true
                });

            return listaMaestro;
        }
    }
}
