using System.Web.Mvc;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Seguridad.Usuarios;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Transversal.Core.Util;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base
{
    public class LogeoController : Controller
    {
        public IUsuariosService _usuariosService { get; set; }

        private UsuariosResponse response = new UsuariosResponse();

        public ActionResult Index()
        {
            return View();
        }

        public bool validarSeguridad(string parametros)
        {
            string[] Valores = parametros.Split('|');
            string usuario, contrasena;
            bool resp = false;

            usuario = Valores[0].ToUpper();
            contrasena = Valores[1].ToString();

            response = _usuariosService.Login(usuario, contrasena).Result;

            if (response != null)
            {
                Login.Envio.Usuario(response.Usuario, response.CodigoUsuario, response.Apellido +" "+ response.Nombre, null, response.EMail);
                resp = true;
            }
            else
            {
                response = new UsuariosResponse();
                resp = false;
            }

            return resp;
        }
    }
}
