using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Seguridad.Asignacion;
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
    public class AsignacionController : BaseController
    {
        #region Propiedades      
        public IAsignacionService asignacionService { get; set; }
        
        public ISistemaService sistemaService { get; set; }

        public IUsuariosService usuarioService { get; set; }

        public IPerfilService perfilService { get; set; }
        #endregion

        #region Vistas
        public ActionResult Index()
        {
            AsignacionModel modelo = new AsignacionModel();

            modelo.ListaEstado = new List<SelectListItem>();

            modelo.ListaEstado.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaEstado.Add(new SelectListItem { Value = "1", Text = "Activo" });
            modelo.ListaEstado.Add(new SelectListItem { Value = "0", Text = "Inactivo" });

            return View(modelo);
        }

        public ActionResult Formulario(AsignacionRequest filtro)
        {
            AsignacionModel modelo = new AsignacionModel();
            modelo.Asignacion = new AsignacionResponse();
            modelo.ListaSistema = new List<SelectListItem>();
            modelo.ListaUsuario = new List<SelectListItem>();
            modelo.ListaPerfil = new List<SelectListItem>();

            if (!string.IsNullOrEmpty(filtro.CodigoAsignacion.ToString()))
            {
                var response = asignacionService.Obtener(filtro.CodigoAsignacion);

                modelo.Asignacion.CodigoAsignacion = response.Result.CodigoAsignacion;
                modelo.Asignacion.CodigoSistema = response.Result.CodigoSistema;
                modelo.Asignacion.CodigoUsuario = response.Result.CodigoUsuario;
                modelo.Asignacion.CodigoPerfil = response.Result.CodigoPerfil;
                modelo.Asignacion.EstadoRegistro = response.Result.EstadoRegistro;
            }

            modelo.ListaSistema.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaSistema.AddRange(sistemaService.Buscar(new SistemaRequest()
            { CodigoSistema = filtro.CodigoSistema, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoSistema.ToString(),
                Selected = false
            }));

            modelo.ListaUsuario.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaUsuario.AddRange(usuarioService.Buscar(new UsuariosRequest()
            { CodigoUsuario = filtro.CodigoUsuario, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Apellido + " "+ x.Nombre,
                Value = x.CodigoUsuario.ToString(),
                Selected = false
            }));

            modelo.ListaPerfil.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaPerfil.AddRange(perfilService.Buscar(new PerfilRequest()
            { CodigoPerfil = filtro.CodigoPerfil, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoPerfil.ToString(),
                Selected = false
            }));

            return View(modelo);
        }
        #endregion

        #region Json
        public JsonResult Buscar(AsignacionRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);
            filtro.CodigoIdioma = filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = asignacionService.Buscar(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

            return Json(response);
        }

        public JsonResult Registrar(AsignacionRequest data)
        {
            var response = asignacionService.Registrar(data);
            return Json(response);
        }

        public JsonResult Eliminar(AsignacionRequest filtro)
        {
            var response = asignacionService.Eliminar(filtro);
            return Json(response);
        }
        #endregion
    }
}
