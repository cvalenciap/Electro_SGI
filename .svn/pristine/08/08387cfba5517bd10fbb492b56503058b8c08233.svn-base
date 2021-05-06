using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Seguridad.Usuarios;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using System;
using Pe.ElectroPeru.SGI.Transversal.Core.Util;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Seguridad
{
    [AppPresentationError]
    public class UsuariosController : BaseController
    {
        #region Propiedades      
        public IUsuariosService usuariosService { get; set; }
        
        public IParametroValorService parametroValorService { get; set; }

        public ISistemaService sistemaService { get; set; }
        #endregion

        #region Vistas
        public ActionResult Index()
        {
            UsuariosModel modelo = new UsuariosModel();

            modelo.ListaEstado = new List<SelectListItem>();

            modelo.ListaEstado.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaEstado.Add(new SelectListItem { Value = "1", Text = "Activo" });
            modelo.ListaEstado.Add(new SelectListItem { Value = "0", Text = "Inactivo" });

            modelo.ListaCargo = new List<SelectListItem>();

            modelo.ListaCargo.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaCargo.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Cargo,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = "ES-PE"
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            return View(modelo);
        }

        public ActionResult Formulario(UsuariosRequest filtro)
        {
            UsuariosModel modelo = new UsuariosModel();
            modelo.Usuarios = new UsuariosResponse();
            modelo.ListaTipoDocumentoIdentidad = new List<SelectListItem>();
            modelo.ListaCargo = new List<SelectListItem>();

            if (!string.IsNullOrEmpty(filtro.CodigoUsuario.ToString()))
            {
                var response = usuariosService.Obtener(filtro.CodigoUsuario, Convert.ToInt32(Login.Obtener.Sistema.Codigo()));

                modelo.Usuarios.CodigoUsuario = response.Result.CodigoUsuario;
                modelo.Usuarios.Apellido = response.Result.Apellido;
                modelo.Usuarios.Nombre = response.Result.Nombre;
                modelo.Usuarios.EMail = response.Result.EMail;
                modelo.Usuarios.TipoDocumentoIdentidad = response.Result.TipoDocumentoIdentidad;
                modelo.Usuarios.NumDocumentoIdentidad = response.Result.NumDocumentoIdentidad;
                modelo.Usuarios.Usuario = response.Result.Usuario;
                modelo.Usuarios.Contrasena = response.Result.Contrasena;
                modelo.Usuarios.CodigoCargo = response.Result.CodigoCargo;
                modelo.Usuarios.ReestablecerContrasena = response.Result.ReestablecerContrasena;

                modelo.Usuarios.EstadoRegistro = response.Result.EstadoRegistro;
            }

            modelo.ListaTipoDocumentoIdentidad.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaTipoDocumentoIdentidad.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.TipoDocumentoIdentidad,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = "ES-PE"
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            modelo.ListaCargo.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaCargo.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Cargo,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = "ES-PE"
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            return View(modelo);
        }

        public ActionResult CambiarContrasena(UsuariosRequest filtro)
        {
            UsuariosModel modelo = new UsuariosModel();
            modelo.Usuarios = new UsuariosResponse();
            modelo.Usuarios.Usuario = Login.Obtener.Usuario.Login();
            return View(modelo);
        }
        #endregion

        #region Json
        public JsonResult Buscar(UsuariosRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);
            filtro.CodigoIdioma = filtro.CodigoIdioma = obtenerCodigoIdioma();
            filtro.CodigoCargo = Convert.ToInt32(filtro.NombreCargo);
            var response = usuariosService.Buscar(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

            return Json(response);
        }

        public JsonResult Registrar(UsuariosRequest data)
        {
            if (data.CodigoUsuario == 0 || data.ReestablecerContrasena)
                data.Contrasena = data.NumDocumentoIdentidad;

            var response = usuariosService.Registrar(data);
            
            return Json(response);
        }

        public JsonResult RegistrarCambiarContrasena(UsuariosRequest data)
        {
            UsuariosResponse usuario = new UsuariosResponse();
            ProcessResult<object> response = new ProcessResult<object>();
            usuario = usuariosService.Login(data.Usuario, data.Contrasena).Result;          
            

            if (usuario.CodigoUsuario > 0)
            {
                data.CodigoUsuario = usuario.CodigoUsuario;
                data.Apellido = usuario.Apellido;
                data.Nombre = usuario.Nombre;
                data.EMail = usuario.EMail;
                data.TipoDocumentoIdentidad = usuario.TipoDocumentoIdentidad;
                data.NumDocumentoIdentidad = usuario.NumDocumentoIdentidad;
                data.Usuario = usuario.Usuario;
                data.Contrasena = data.ContrasenaNueva;
                data.CodigoCargo = usuario.CodigoCargo;
                data.NombreCargo = usuario.NombreCargo;
                data.EstadoRegistroBit = true;

                response = usuariosService.Registrar(data);
            }
            else
            {
                data.EstadoRegistroBit = false;
                response.Result = data;
            }

            return Json(response);
        }

        public JsonResult Eliminar(UsuariosRequest filtro)
        {
            var response = usuariosService.Eliminar(filtro);
            return Json(response);
        }
        #endregion
    }
}
