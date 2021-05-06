using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Seguridad.Perfil;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Seguridad
{
    [AppPresentationError]
    public class PerfilController : BaseController
    {
        #region Propiedades      
        public IPerfilService perfilService { get; set; }

        public IParametroValorService parametroValorService { get; set; }

        public ISistemaService sistemaService { get; set; }
        #endregion

        #region Vistas
        public ActionResult Index()
        {
            PerfilModel modelo = new PerfilModel();

            modelo.ListaEstado = new List<SelectListItem>();

            modelo.ListaEstado.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaEstado.Add(new SelectListItem { Value = "1", Text = "Activo" });
            modelo.ListaEstado.Add(new SelectListItem { Value = "0", Text = "Inactivo" });
            
            return View(modelo);
        }

        public ActionResult Formulario(PerfilRequest filtro)
        {
            PerfilModel modelo = new PerfilModel();
            modelo.Perfil = new PerfilResponse();
            modelo.ListaSistema = new List<SelectListItem>();

            if (!string.IsNullOrEmpty(filtro.CodigoPerfil.ToString()))
            {
                var response = perfilService.Obtener(filtro.CodigoPerfil);

                modelo.Perfil.CodigoPerfil = response.Result.CodigoPerfil;
                modelo.Perfil.CodigoSistema = response.Result.CodigoSistema;
                modelo.Perfil.Nombre = response.Result.Nombre;
                modelo.Perfil.Descripcion = response.Result.Descripcion;
                modelo.Perfil.EstadoRegistro = response.Result.EstadoRegistro;
            }
            
            modelo.ListaSistema.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaSistema.AddRange(sistemaService.Buscar(new SistemaRequest()
            {CodigoSistema = filtro.CodigoSistema, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoSistema.ToString(),
                Selected = false
            }));

            return View(modelo);
        }
        #endregion

        #region Json
        public JsonResult Buscar(PerfilRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = perfilService.Buscar(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

            return Json(response);
        }

        public JsonResult Registrar(PerfilRequest data)
        {
            var response = perfilService.Registrar(data);
            return Json(response);
        }

        public JsonResult Eliminar(PerfilRequest filtro)
        {
            var response = perfilService.Eliminar(filtro);
            return Json(response);
        }
        #endregion
    }
}
