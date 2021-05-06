using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Seguridad.Modulo;
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
    public class ModuloController : BaseController
    {
        #region Propiedades      
        public IModuloService moduloService { get; set; }

        public ISistemaService sistemaService { get; set; }
        #endregion

        #region Vistas
        public ActionResult Index()
        {
            ModuloModel modelo = new ModuloModel();

            modelo.ListaEstado = new List<SelectListItem>();

            modelo.ListaEstado.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaEstado.Add(new SelectListItem { Value = "1", Text = "Activo" });
            modelo.ListaEstado.Add(new SelectListItem { Value = "0", Text = "Inactivo" });

            return View(modelo);
        }

        public ActionResult Formulario(ModuloRequest filtro)
        {
            ModuloModel modelo = new ModuloModel();
            modelo.Modulo = new ModuloResponse();
            modelo.ListaSistema = new List<SelectListItem>();
            modelo.ListaModuloPadre = new List<SelectListItem>();

            if (!string.IsNullOrEmpty(filtro.CodigoModulo.ToString()))
            {
                var response = moduloService.Obtener(filtro.CodigoModulo);

                modelo.Modulo.CodigoModulo = response.Result.CodigoModulo;
                modelo.Modulo.CodigoSistema = response.Result.CodigoSistema;
                modelo.Modulo.Nombre = response.Result.Nombre;
                modelo.Modulo.Descripcion = response.Result.Descripcion;
                modelo.Modulo.ModuloPadre = response.Result.ModuloPadre;
                modelo.Modulo.Glyphicon = response.Result.Glyphicon;
                modelo.Modulo.RutaImagen = response.Result.RutaImagen;
                modelo.Modulo.Controlador = response.Result.Controlador;
                modelo.Modulo.Metodo = response.Result.Metodo;

                modelo.Modulo.EstadoRegistro = response.Result.EstadoRegistro;
            }

            modelo.ListaSistema.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaSistema.AddRange(sistemaService.Buscar(new SistemaRequest()
            { CodigoSistema = filtro.CodigoSistema, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoSistema.ToString(),
                Selected = false
            }));

            modelo.ListaModuloPadre.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaModuloPadre.AddRange(moduloService.Buscar(new ModuloRequest()
            { CodigoModulo = filtro.CodigoModulo, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoModulo.ToString(),
                Selected = false
            }));

            return View(modelo);
        }
        #endregion

        #region Json
        public JsonResult Buscar(ModuloRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);
            filtro.CodigoIdioma = filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = moduloService.Buscar(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

            return Json(response);
        }

        public JsonResult Registrar(ModuloRequest data)
        {
            var response = moduloService.Registrar(data);
            return Json(response);
        }

        public JsonResult Eliminar(ModuloRequest filtro)
        {
            var response = moduloService.Eliminar(filtro);
            return Json(response);
        }
        #endregion
    }
}
