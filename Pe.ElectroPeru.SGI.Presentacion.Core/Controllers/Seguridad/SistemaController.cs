using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Seguridad.Sistema;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Seguridad
{
    [AppPresentationError]
    public class SistemaController : BaseController
    {
        #region Propiedades      
        public ISistemaService sistemaService { get; set; }

        //public IParametroValorService parametroValorService { get; set; }

        #endregion

        #region Vistas
        public ActionResult Index()
        {
            SistemaModel modelo = new SistemaModel();

            modelo.ListaEstado = new List<SelectListItem>();
            modelo.ListaEstado.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaEstado.Add(new SelectListItem { Value = "1", Text = "Activo" });
            modelo.ListaEstado.Add(new SelectListItem { Value = "0", Text = "Inactivo" });

            return View(modelo);
        }

        public ActionResult Formulario(SistemaRequest filtro)
        {
            SistemaModel modelo = new SistemaModel();
            modelo.Sistema = new SistemaResponse();

            if (!string.IsNullOrEmpty(filtro.CodigoSistema.ToString()))
            {
                var response = sistemaService.Obtener(filtro.CodigoSistema);

                modelo.Sistema.CodigoSistema = response.Result.CodigoSistema;
                modelo.Sistema.Nombre = response.Result.Nombre;
                modelo.Sistema.Descripcion = response.Result.Descripcion;
                modelo.Sistema.Ruta = response.Result.Ruta;
                modelo.Sistema.Token = response.Result.Token;
                modelo.Sistema.Parametro = response.Result.Parametro;
                modelo.Sistema.ValorParametro = response.Result.ValorParametro;
                
                modelo.Sistema.EstadoRegistro = response.Result.EstadoRegistro;
            }
           
            return View(modelo);
        }
        #endregion

        #region Json
        public JsonResult Buscar(SistemaRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);
            filtro.CodigoIdioma = filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = sistemaService.Buscar(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

            return Json(response);
        }

        public JsonResult Registrar(SistemaRequest data)
        {
            var response = sistemaService.Registrar(data);
            return Json(response);
        }

        public JsonResult Eliminar(SistemaRequest filtro)
        {
            var response = sistemaService.Eliminar(filtro);
            return Json(response);
        }
        #endregion
    }
}
