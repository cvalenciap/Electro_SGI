using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Seguridad.Accion;
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
    public class AccionController : BaseController
    {
        #region Propiedades      
        public IAccionService accionService { get; set; }
        #endregion

        #region Vistas
        public ActionResult Index()
        {
            AccionModel modelo = new AccionModel();

            modelo.ListaEstado = new List<SelectListItem>();

            modelo.ListaEstado.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaEstado.Add(new SelectListItem { Value = "1", Text = "Activo" });
            modelo.ListaEstado.Add(new SelectListItem { Value = "0", Text = "Inactivo" });

            return View(modelo);
        }

        public ActionResult Formulario(AccionRequest filtro)
        {
            AccionModel modelo = new AccionModel();
            modelo.Accion = new AccionResponse();

            if (!string.IsNullOrEmpty(filtro.CodigoAccion.ToString()))
            {
                var response = accionService.Obtener(filtro.CodigoAccion);

                modelo.Accion.CodigoAccion = response.Result.CodigoAccion;
                modelo.Accion.Nombre = response.Result.Nombre;
                modelo.Accion.Descripcion = response.Result.Descripcion;
                modelo.Accion.EstadoRegistro = response.Result.EstadoRegistro;
            }

            return View(modelo);
        }
        #endregion

        #region Json
        public JsonResult Buscar(AccionRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);
            filtro.CodigoIdioma = filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = accionService.Buscar(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

            return Json(response);
        }

        public JsonResult Registrar(AccionRequest data)
        {
            var response = accionService.Registrar(data);
            return Json(response);
        }

        public JsonResult Eliminar(AccionRequest filtro)
        {
            var response = accionService.Eliminar(filtro);
            return Json(response);
        }
        #endregion
    }
}
