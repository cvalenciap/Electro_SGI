using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System.Web;

namespace Pe.ElectroPeru.SGI.Transversal.Core.Util
{
    public static class Login
    {
        /// <summary>
        /// Clase para llenar información de usuario logeado en variables de session
        /// </summary>
        public static class Envio
        {
            public static void Usuario(string usuario, int codigo, string nombreCompleto, byte[] foto, string correo)
            {
                HttpContext.Current.Session.Add(Constantes.Sesion.Usuario.Login, usuario);
                HttpContext.Current.Session.Add(Constantes.Sesion.Usuario.Codigo, codigo);
                HttpContext.Current.Session.Add(Constantes.Sesion.Usuario.NombreCompleto, nombreCompleto);
                HttpContext.Current.Session.Add(Constantes.Sesion.Usuario.Foto, foto);
                HttpContext.Current.Session.Add(Constantes.Sesion.Usuario.Correo, correo);
            }

            public static void Perfil(int codigo, string nombre)
            {
                HttpContext.Current.Session.Add(Constantes.Sesion.Perfil.Nombre, nombre);
                HttpContext.Current.Session.Add(Constantes.Sesion.Perfil.Codigo, codigo);
            }

            public static void Sistema(int codigo, string nombre, string descripcion)
            {
                HttpContext.Current.Session.Add(Constantes.Sesion.Sistema.Nombre, nombre);
                HttpContext.Current.Session.Add(Constantes.Sesion.Sistema.Codigo, codigo);
                HttpContext.Current.Session.Add(Constantes.Sesion.Sistema.Descripcion, descripcion);
            }
        }

        /// <summary>
        /// Clase para obtener información de usuario logeado desde variables de session
        /// </summary>
        public static class Obtener
        {
            public static class Usuario
            {
                public static string Login()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Usuario.Login] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Usuario.Login].ToString();
                    return null;
                }

                public static string Codigo()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Usuario.Codigo] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Usuario.Codigo].ToString();
                    return null;
                }
                
                public static string NombreCompleto()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Usuario.NombreCompleto] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Usuario.NombreCompleto].ToString();
                    return null;
                }

                public static byte[] Foto()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Usuario.Foto] != null)
                        return (byte[])HttpContext.Current.Session[Constantes.Sesion.Usuario.Foto];
                    return null;
                }

                public static string Correo()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Usuario.Correo] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Usuario.Correo].ToString();
                    return null;
                }

                public static string Area()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Usuario.Area] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Usuario.Area].ToString();
                    return null;
                }

                public static string CodigoArea()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Usuario.CodigoArea] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Usuario.CodigoArea].ToString();
                    return null;
                }
            }

            public static class Perfil
            {
                public static string Nombre()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Perfil.Nombre] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Perfil.Nombre].ToString();
                    return null;
                }

                public static string Codigo()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Perfil.Codigo] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Perfil.Codigo].ToString();
                    return null;
                }
            }

            public static class Sistema
            {
                public static string Nombre()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Sistema.Nombre] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Sistema.Nombre].ToString();
                    return null;
                }

                public static string Codigo()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Sistema.Codigo] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Sistema.Codigo].ToString();
                    return null;
                }

                public static string Descripcion()
                {
                    if (HttpContext.Current.Session[Constantes.Sesion.Sistema.Descripcion] != null)
                        return HttpContext.Current.Session[Constantes.Sesion.Sistema.Descripcion].ToString();
                    return null;
                }
            }
        }

        public static void LogOut()
        {
            HttpContext.Current.Session.Abandon();
        }
    }
}