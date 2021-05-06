using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Seguridad.Opcion;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Seguridad
{
    [AppPresentationError]
    public class OpcionController : BaseController
    {
        #region Propiedades      
        public IOpcionService opcionService { get; set; }

        public IParametroValorService parametroValorService { get; set; }

        public IModuloService moduloService { get; set; }
        #endregion

        #region Vistas
        public ActionResult Index()
        {
            OpcionModel modelo = new OpcionModel();

            modelo.ListaEstado = new List<SelectListItem>();

            modelo.ListaEstado.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaEstado.Add(new SelectListItem { Value = "1", Text = "Activo" });
            modelo.ListaEstado.Add(new SelectListItem { Value = "0", Text = "Inactivo" });

            return View(modelo);
        }

        public ActionResult Formulario(OpcionRequest filtro)
        {
            OpcionModel modelo = new OpcionModel();
            modelo.Opcion = new OpcionResponse();
            modelo.ListaModulo = new List<SelectListItem>();
            modelo.ListaOpcionPadre = new List<SelectListItem>();

            if (!string.IsNullOrEmpty(filtro.CodigoOpcion.ToString()))
            {
                var response = opcionService.Obtener(filtro.CodigoOpcion);

                modelo.Opcion.CodigoOpcion = response.Result.CodigoOpcion;
                modelo.Opcion.OpcionPadre = response.Result.OpcionPadre;
                modelo.Opcion.CodigoModulo = response.Result.CodigoModulo;
                modelo.Opcion.Nombre = response.Result.Nombre;
                modelo.Opcion.Descripcion = response.Result.Descripcion;
                modelo.Opcion.Glyphicon = response.Result.Glyphicon;
                modelo.Opcion.Controlador = response.Result.Controlador;
                modelo.Opcion.Metodo = response.Result.Metodo;
                modelo.Opcion.Area = response.Result.Area;
                modelo.Opcion.EstadoRegistro = response.Result.EstadoRegistro;
            }

            modelo.ListaModulo.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaModulo.AddRange(moduloService.Buscar(new ModuloRequest()
            { CodigoModulo = filtro.CodigoModulo, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoModulo.ToString(),
                Selected = false
            }));

            modelo.ListaOpcionPadre.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaOpcionPadre.AddRange(opcionService.Buscar(new OpcionRequest()
            { CodigoOpcion = filtro.OpcionPadre, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoOpcion.ToString(),
                Selected = false
            }));

            return View(modelo);
        }
        #endregion

        #region Json
        public JsonResult Buscar(OpcionRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);
            filtro.CodigoIdioma = filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = opcionService.Buscar(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

            return Json(response);
        }

        public JsonResult Registrar(OpcionRequest data)
        {
            var response = opcionService.Registrar(data);
            return Json(response);
        }

        public JsonResult Eliminar(OpcionRequest filtro)
        {
            var response = opcionService.Eliminar(filtro);
            return Json(response);
        }
        #endregion
    }
}
