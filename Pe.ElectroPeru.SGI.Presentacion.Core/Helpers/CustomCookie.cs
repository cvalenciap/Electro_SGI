using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Helpers
{
    public class CustomCookie
    {
        /// <summary>
        /// Nombre de Cookie
        /// </summary>
        public static string cookieName = "Cookies_SGSA";

        public static string GetCookieLogeo()
        {
            HttpCookie myCookie = new HttpCookie(FormsAuthentication.FormsCookieName);
            myCookie = HttpContext.Current.Request.Cookies[FormsAuthentication.FormsCookieName];
            if (myCookie == null)
            {
                return null;
            }
            else
            {
                var ticket = FormsAuthentication.Decrypt(myCookie.Value);
                return ticket.Name;
            }
        }

        public static void SetCookie(string nombreCookie, string valueCookie)
        {
            HttpCookie myCookie = HttpContext.Current.Response.Cookies[nombreCookie] ?? new HttpCookie(nombreCookie);

            if (HttpContext.Current.Response.Cookies[cookieName] == null)
            {

                myCookie.Value = valueCookie;
                myCookie.Expires = DateTime.Now.AddDays(365);
                HttpContext.Current.Request.Cookies.Add(myCookie);
            }
            else
            {
                //    //myCookie.Expires = DateTime.Now.AddYears(1);
                //    //myCookie[nombreCookie] = valueCookie;
                HttpContext.Current.Request.Cookies[nombreCookie].Expires = DateTime.Now.AddDays(365);
                HttpContext.Current.Request.Cookies[nombreCookie].Value = valueCookie;

            }
        }

        public static string GetCookie(string nombreCookie)
        {
            HttpCookie myCookie = HttpContext.Current.Request.Cookies[cookieName] ?? new HttpCookie(cookieName);
            if (myCookie != null)
            {
                string nombreUsuario = Convert.ToString(myCookie.Values[nombreCookie]);
                return nombreUsuario;
            }

            return null;
        }
        public static List<SelectListItem> GetListaIdioma(string nombreCookie)
        {
            //HttpCookie myCookie = HttpContext.Current.Response.Cookies[cookieName] ?? new HttpCookie(cookieName);
            string listIdioma = Convert.ToString(HttpContext.Current.Request.Cookies[nombreCookie].Value);

            return Newtonsoft.Json.JsonConvert.DeserializeObject<List<SelectListItem>>(listIdioma);
        }

        public static void ClearCookies()
        {
            HttpCookie myCookie = HttpContext.Current.Request.Cookies[cookieName] ?? new HttpCookie(cookieName);
            if (myCookie != null)
            {
                myCookie.Expires = DateTime.Now.AddDays(-1d);
                HttpContext.Current.Response.Cookies.Add(myCookie);
                HttpContext.Current.Request.Cookies.Remove(myCookie.Name);
            }
        }
    }
}
