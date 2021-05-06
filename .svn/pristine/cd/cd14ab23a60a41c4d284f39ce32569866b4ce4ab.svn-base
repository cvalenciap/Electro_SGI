using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Seguridad.Permisos;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Seguridad
{
    [AppPresentationError]
    public class PermisosController : BaseController
    {
        #region Propiedades      
        public IPermisosService permisosService { get; set; }

        public IPerfilService perfilService { get; set; }

        public IAccionService accionService { get; set; }

        public IOpcionService opcionService { get; set; }

        public IParametroValorService parametroValorService { get; set; }

        public ISistemaService sistemaService { get; set; }
        #endregion

        #region Vistas
        public ActionResult Index()
        {
            PermisosModel modelo = new PermisosModel();

            modelo.ListaEstado = new List<SelectListItem>();

            modelo.ListaEstado.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaEstado.Add(new SelectListItem { Value = "1", Text = "Activo" });
            modelo.ListaEstado.Add(new SelectListItem { Value = "0", Text = "Inactivo" });

            modelo.ListaEstadoPermisos = new List<SelectListItem>();

            modelo.ListaEstadoPermisos.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaEstadoPermisos.Add(new SelectListItem { Value = "1", Text = "Habilitado" });
            modelo.ListaEstadoPermisos.Add(new SelectListItem { Value = "0", Text = "Inhabilitado" });

            modelo.ListaPerfil = new List<SelectListItem>();
            modelo.ListaAccion = new List<SelectListItem>();
            modelo.ListaOpcion = new List<SelectListItem>();

            modelo.ListaPerfil.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaPerfil.AddRange(perfilService.Buscar(new PerfilRequest()
            { CodigoPerfil = 0, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoPerfil.ToString(),
                Selected = false
            }));

            modelo.ListaAccion.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaAccion.AddRange(accionService.Buscar(new AccionRequest()
            { CodigoAccion = 0, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoAccion.ToString(),
                Selected = false
            }));

            modelo.ListaOpcion.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaOpcion.AddRange(opcionService.Buscar(new OpcionRequest()
            { CodigoOpcion = 0, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoOpcion.ToString(),
                Selected = false
            }));

            return View(modelo);
        }

        public ActionResult Formulario(PermisosRequest filtro)
        {
            PermisosModel modelo = new PermisosModel();
            modelo.Permisos = new PermisosResponse();
            modelo.ListaPerfil = new List<SelectListItem>();
            modelo.ListaAccion = new List<SelectListItem>();
            modelo.ListaOpcion = new List<SelectListItem>();

            if (!string.IsNullOrEmpty(filtro.CodigoPermisos.ToString()))
            {
                var response = permisosService.Obtener(filtro.CodigoPermisos);

                modelo.Permisos.CodigoPermisos = response.Result.CodigoPermisos;
                modelo.Permisos.CodigoPerfil = response.Result.CodigoPerfil;
                modelo.Permisos.CodigoAccion = response.Result.CodigoAccion;
                modelo.Permisos.CodigoOpcion = response.Result.CodigoOpcion;
                modelo.Permisos.EstadoPermiso = response.Result.EstadoPermiso;
                modelo.Permisos.EstadoRegistro = response.Result.EstadoRegistro;
                modelo.Permisos.EstadoPermisoBool = response.Result.EstadoPermiso == "1" ? true : false;
            }

            modelo.ListaPerfil.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaPerfil.AddRange(perfilService.Buscar(new PerfilRequest()
            { CodigoPerfil = filtro.CodigoPerfil, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoPerfil.ToString(),
                Selected = false
            }));

            modelo.ListaAccion.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaAccion.AddRange(accionService.Buscar(new AccionRequest()
            { CodigoAccion = filtro.CodigoAccion, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoAccion.ToString(),
                Selected = false
            }));

            modelo.ListaOpcion.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaOpcion.AddRange(opcionService.Buscar(new OpcionRequest()
            { CodigoOpcion = filtro.CodigoOpcion, EstadoRegistro = Constantes.Datos.Activo }).Result.Select(x => new SelectListItem()
            {
                Text = x.Nombre,
                Value = x.CodigoOpcion.ToString(),
                Selected = false
            }));

            return View(modelo);
        }
        #endregion

        #region Json
        public JsonResult Buscar(PermisosRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);
            filtro.CodigoIdioma = filtro.CodigoIdioma = obtenerCodigoIdioma();
            filtro.CodigoAccion = Convert.ToInt32(filtro.Accion);
            filtro.CodigoOpcion = Convert.ToInt32(filtro.Opcion);
            filtro.CodigoPerfil = Convert.ToInt32(filtro.Perfil);

            var response = permisosService.Buscar(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

            return Json(response);
        }

        public JsonResult Registrar(PermisosRequest data)
        {
            data.EstadoPermiso = data.EstadoPermisoBool ? "1" : "0";
            var response = permisosService.Registrar(data);
            return Json(response);
        }

        public JsonResult Eliminar(PermisosRequest filtro)
        {
            var response = permisosService.Eliminar(filtro);
            return Json(response);
        }
        #endregion
    }
}
