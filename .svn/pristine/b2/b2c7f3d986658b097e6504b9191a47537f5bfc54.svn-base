using iTextSharp.text;
using iTextSharp.text.html.simpleparser;
using iTextSharp.text.pdf;
using iTextSharp.tool.xml;
using iTextSharp.tool.xml.html;
using iTextSharp.tool.xml.parser;
using iTextSharp.tool.xml.pipeline.css;
using iTextSharp.tool.xml.pipeline.end;
using iTextSharp.tool.xml.pipeline.html;
using Microsoft.Reporting.WebForms;
//using Pe.GyM.Security.Account.Model;
using Pe.ElectroPeru.SGI.Transversal.Core.Base;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

namespace Pe.ElectroPeru.SGI.Transversal.Core.Util
{
    /// <summary>
    /// Clase Utilitaria
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 20150319
    /// Modificación:   
    /// </remarks>
    public class Utilitario
    {
        /// <summary>
        /// llave para la encriptacion 
        /// </summary>
        private const string key = "ABCDEFG54669525PQRSTUVWXYZabcdef852846opqrstuvwxyz";

        /// <summary>
        /// Permite convertir de String a DateTime con su respectivo formato de fecha
        /// </summary>
        /// <param name="valor">Fecha</param>
        /// <param name="formato">Formato</param>
        /// <returns>Retorna de Fecha</returns>
        public static DateTime? CadenaFormatoFecha(string valor, string formato)
        {
            try
            {
                return string.IsNullOrEmpty(valor) ? (DateTime?)null : DateTime.ParseExact(valor, formato, System.Globalization.CultureInfo.InvariantCulture);
            }
            catch (FormatException)
            {
                return null;
            }
        }

        /// <summary>
        /// Permite convertir DateTime a String con su respectivo formato de fecha
        /// </summary>
        /// <param name="valor">Fecha</param>
        /// <param name="formato">Formato</param>
        /// <returns>Retorna la fecha formateada</returns>
        public static string FechaFormatoCadena(DateTime? valor, string formato)
        {
            if (valor.HasValue)
            {
                return Convert.ToDateTime(valor).ToString(formato, System.Globalization.CultureInfo.InvariantCulture);
            }
            else
            {
                return string.Empty;
            }
        }

        /// <summary>
        /// Permite convertir de String a Decimal con su respectivo formato de decimal
        /// </summary>
        /// <param name="value">Decimal</param>
        /// <param name="format">Formato</param>
        /// <param name="numberFormat">Formato de Número</param>
        /// <returns>Retorna de Decimal</returns>
        public static decimal? CadenaFormatoDecimal(string value, string format, string separadorDecimal)
        {
            try
            {
                if (!format.Contains("{"))
                {
                    format = "{0:" + format + "}";
                }
                NumberFormatInfo numberFormatInfo = new NumberFormatInfo();
                numberFormatInfo.NumberDecimalSeparator = separadorDecimal;
                numberFormatInfo.NumberGroupSeparator = string.Empty;

                return string.IsNullOrEmpty(value) ? (decimal?)null : System.Decimal.Parse(value, numberFormatInfo);
            }
            catch (FormatException)
            {
                return null;
            }
        }

        /// <summary>
        /// Permite convertir Decimal a String con su respectivo formato de decimal
        /// </summary>
        /// <param name="value">Decimal</param>
        /// <param name="format">Formato</param>
        /// <param name="numberFormat">Formato de Número</param>
        /// <returns>Retorna el decimal formateado</returns>
        public static string DecimalFormatoCadena(decimal? value, string format, string separadorDecimal)
        {
            if (value.HasValue)
            {
                if (!format.Contains("{"))
                {
                    format = "{0:" + format + "}";
                }
                NumberFormatInfo numberFormatInfo = new NumberFormatInfo();
                numberFormatInfo.NumberDecimalSeparator = separadorDecimal;
                numberFormatInfo.NumberGroupSeparator = string.Empty;

                format = format.Replace(numberFormatInfo.NumberDecimalSeparator, "@");
                format = format.Replace("@", ".");

                return string.Format(numberFormatInfo, format, value);
            }
            else
            {
                return string.Empty;
            }
        }

        /// <summary>
        /// Obtiene el nombre de un mes calendario.
        /// </summary>
        /// <param name="mes">Número de Mes</param>
        /// <returns>Nombre del Mes</returns>
        public static string ObtenerNombreMes(int mes)
        {
            return CultureInfo.CurrentCulture.TextInfo.ToTitleCase(CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(mes));
        }

        /// <summary>
        /// Obtiene la lista de meses
        /// </summary>
        /// <returns>Retorna la lista de meses</returns>
        public static IDictionary<int, string> ObtenerListaMeses()
        {
            var listaMeses = new Dictionary<int, string>();

            for (var i = 1; i <= 12; i++)
            {
                listaMeses.Add(i, Utilitario.ObtenerNombreMes(i));
            }

            return listaMeses;
        }

        /// <summary>
        /// Retorna las iniciales de un nombre
        /// </summary>
        /// <param name="nombre">nombre a evaluar</param>
        /// <returns></returns>
        public static string RetornaIniciales(string nombre)
        {
            string result = string.Empty;
            foreach (char item in nombre)
            {
                if (Char.IsUpper(item))
                {
                    result += item;
                }
            }
            return result;
        }

        /// <summary>
        /// Retorna las iniciales de un nombre
        /// </summary>
        /// <param name="nombre">nombre a evaluar</param>
        /// <returns></returns>
        public static string HtmlACadena(string html)
        {
            var cadena = Regex.Replace(html, "<.*?>", string.Empty);
            cadena = cadena.Replace("&amp;", "&");
            cadena = cadena.Replace("&nbsp;", " ");
            return cadena;
        }

        /// <summary>
        /// Obtiene los permisos de Lectura, Escritura y Control Total de la Opción seleccionada
        /// </summary>
        /// <param name="user">Cuenta de usuario de la sesión</param>
        /// <param name="url">Dirección Url de la opción seleccionada</param>
        /// <returns>Permisos de Lectura, Escritura y Control Total de la Opción seleccionada</returns>
        /// COMENTADO POR ANGEL
        //public static Control ObtenerControlPermisos(CuentaUsuario user, string url)
        //{
        //    Control controles = new Control();

        //    bool lectura = false;
        //    bool escritura = false;
        //    bool controlTotal = false;
        //    bool urlEncontrada = false;

        //    foreach (var modulo in user.Modulos)
        //    {
        //        foreach (var subModulo in modulo.SubModulos)
        //        {
        //            if (subModulo.Vistas.Exists(x => x.URL.EndsWith(url)))
        //            {
        //                lectura = subModulo.Vistas.Where(x => x.URL.EndsWith(url)).FirstOrDefault().Controles.FirstOrDefault().Lectura;
        //                escritura = subModulo.Vistas.Where(x => x.URL.EndsWith(url)).FirstOrDefault().Controles.FirstOrDefault().Escritura;
        //                controlTotal = subModulo.Vistas.Where(x => x.URL.EndsWith(url)).FirstOrDefault().Controles.FirstOrDefault().ControlTotal;
        //                urlEncontrada = true;
        //                break;
        //            }
        //        }

        //        if (urlEncontrada)
        //        {
        //            break;
        //        }
        //    }

        //    //Asignando los Permisos
        //    controles.ControlTotal = controlTotal;
        //    controles.Escritura = escritura;
        //    controles.Lectura = lectura;

        //    return controles;
        //}
        public static string[] ApellidoCompuesto(string MiTexto)
        {
            string[] apellido;
            string nuevoApellido = "";

            apellido = MiTexto.Trim().Split();
            int tempFor1 = apellido.GetUpperBound(0);
            for (int i = 0; i <= tempFor1; i++)
            {
                switch (apellido[i].ToLower())
                {
                    case "de":
                    case "del":
                    case "de la":
                    case "de los":
                    case "la":
                    case "las":
                    case "los":
                    case "san":
                    case "y":
                    case "-":
                        nuevoApellido = nuevoApellido + apellido[i] + " ";
                        break;
                    default:
                        nuevoApellido = nuevoApellido + apellido[i] + "/";
                        break;
                }
            }
            if (nuevoApellido.Substring(nuevoApellido.Length - 1) == "/")
            {
                nuevoApellido = nuevoApellido.Substring(0, nuevoApellido.Length - 1);
            }
            return nuevoApellido.Split('/');
        }
        public static string CalcularRangoFechas(DateTime fechaInicio, DateTime fechaFin)
        {
            string retorna = "";
            try
            {
                DateTime fecha1 = new DateTime(fechaInicio.Year, fechaInicio.Month, 1);
                DateTime fecha2 = new DateTime(fechaFin.Year, fechaFin.Month, 1).AddMonths(1).AddDays(-1);
                bool inicioMes = false;
                bool finMes = false;
                int anios = 0, meses = 0, dias = 0;

                if (fecha1 == fechaInicio)
                {
                    inicioMes = true;
                }
                if (fecha2 == fechaFin)
                {
                    finMes = true;
                }
                if (inicioMes && finMes)
                {
                    meses = Math.Abs((fechaInicio.Month - fechaFin.Month) + 12 * (fechaInicio.Year - fechaFin.Year)) + 1;
                }
                else if (inicioMes && !finMes)
                {
                    meses = Math.Abs((fechaInicio.Month - fechaFin.Month) + 12 * (fechaInicio.Year - fechaFin.Year));
                    dias = fechaFin.Day;
                }
                else if (!inicioMes && finMes)
                {

                }

                if (meses > 12)
                {
                    anios = int.Parse((meses / 12).ToString());
                    meses = int.Parse((meses % 12).ToString());
                }
                string etiquetaDias = " Dia", etiquetaMeses = " Mes", etiquetaAnios = " Año";
                if (dias > 1)
                {
                    etiquetaDias = " Dias";
                }
                if (meses > 1)
                {
                    etiquetaMeses = " Meses";
                }
                if (anios > 1)
                {
                    etiquetaAnios = " Años";
                }

                if (anios != 0 && meses != 0 && dias != 0)
                {
                    retorna = ("Por " + anios.ToString() + etiquetaAnios + ", " + meses.ToString() + etiquetaMeses + " y " + dias.ToString() + etiquetaDias);
                }
                else if (anios == 0 && meses != 0 && dias != 0)
                {
                    retorna = ("Por " + meses.ToString() + etiquetaMeses + " y " + dias.ToString() + etiquetaDias);
                }
                else if (anios != 0 && meses != 0 && dias == 0)
                {
                    retorna = ("Por " + anios.ToString() + etiquetaAnios + " y " + meses.ToString() + etiquetaMeses);
                }
                else if (anios != 0 && meses == 0 && dias != 0)
                {
                    retorna = ("Por " + anios.ToString() + etiquetaAnios + " y " + dias.ToString() + etiquetaDias);
                }
                else if (anios == 0 && meses != 0 && dias == 0)
                {
                    retorna = ("Por " + meses.ToString() + etiquetaMeses);
                }
                else if (anios != 0 && meses == 0 && dias == 0)
                {
                    retorna = ("Por " + anios.ToString() + etiquetaAnios);
                }
                else if (anios == 0 && meses == 0 && dias != 0)
                {
                    retorna = ("Por " + dias.ToString() + etiquetaDias);
                }
            }
            catch (System.Exception)
            {

                throw;
            }
            return retorna;
        }
        public static void LogError(System.Exception ex)
        {
            string rutaLog = ConfigurationManager.AppSettings["RutaLog"];
            if (rutaLog != null)
            {
                if (!Directory.Exists(rutaLog))
                {
                    Directory.CreateDirectory(rutaLog);
                }
                rutaLog = rutaLog + "\\LogServicio.txt";
                string mensaje = "Source:" + ex.Source + Environment.NewLine;
                mensaje = mensaje + "Message :" + ex.Message + Environment.NewLine;
                mensaje = mensaje + "StackTrace :" + ex.StackTrace + Environment.NewLine;
                if (ex.InnerException != null)
                {
                    mensaje = mensaje + "InnerException :" + ex.InnerException.Message + Environment.NewLine;
                    if (ex.InnerException.InnerException != null)
                    {
                        mensaje = mensaje + "InnerException Mensaje:" + ex.InnerException.InnerException.Message + Environment.NewLine;
                    }

                }
                mensaje = mensaje + "Date :" + DateTime.Now.ToString() + Environment.NewLine;
                mensaje = mensaje + "-----------------------------------------------------------------------------" + Environment.NewLine;

                if (!System.IO.File.Exists(rutaLog))
                {
                    System.IO.File.WriteAllText(rutaLog, mensaje);
                }
                else
                {
                    System.IO.File.AppendAllText(rutaLog, mensaje);
                }
            }
        }
        public static void LogError(string mensaje)
        {
            string rutaLog = ConfigurationManager.AppSettings["RutaLog"];
            if (rutaLog != null)
            {
                if (!Directory.Exists(rutaLog))
                {
                    Directory.CreateDirectory(rutaLog);
                }

                rutaLog = rutaLog + "\\LogAppSGATE.txt";

                mensaje = mensaje + Environment.NewLine + "Date :" + DateTime.Now.ToString() + Environment.NewLine;
                mensaje = mensaje + "-----------------------------------------------------------------------------" + Environment.NewLine;
                if (!System.IO.File.Exists(rutaLog))
                {
                    System.IO.File.WriteAllText(rutaLog, mensaje);
                }
                else
                {
                    System.IO.File.AppendAllText(rutaLog, mensaje);
                }
            }
        }

        /// <summary>
        /// Permite generar un Archivo desde un Reporting Service
        /// </summary>
        /// <param name="reporteServerUrl">Servidor del reporting</param>
        /// <param name="rutaReporte">Carpeta donde se ubica el reporte</param>
        /// <param name="nombreReporte">Nombre del reporte</param>
        /// <param name="formatoReporte">Formato a exportar</param>
        /// <returns>Archivo en un arreglo de bytes</returns>
        //public static byte[] GeneraArchivoDesdeReporting(       
        //    string reporteServerUrl,
        //    string rutaReporte,
        //    string nombreReporte,
        //    string formatoReporte)//,           
        //{
        //    ReportViewer rswebVisor = new ReportViewer();
        //    rswebVisor.LocalReport.ReportPath = HttpContext.Current.Server.MapPath("~/") + "Reports/PlanEstrategico/rptPlanEstrategico.rdlc";//string.Concat(rutaReporte, nombreReporte);
            
        //    rswebVisor.ShowParameterPrompts = false;
        //    rswebVisor.ZoomMode = ZoomMode.Percent;
        //    rswebVisor.ProcessingMode = ProcessingMode.Local;
        //    rswebVisor.ZoomPercent = 100;

        //    DataTable dt = new DataTable();          

        //    ReportDataSource datasource = new ReportDataSource("dsPlanEstrategico", dt);

        //    rswebVisor.LocalReport.DataSources.Add(datasource);
        //    rswebVisor.LocalReport.Refresh();
  
        //    string[] streamids;
        //    Warning[] warnings;
        //    string mimeType = string.Empty;
        //    string encoding = string.Empty;
        //    string extension = "pdf";
        //    return rswebVisor.LocalReport.Render(formatoReporte, null, out mimeType, out encoding, out extension, out streamids, out warnings);
        //}

        public static string EncryptKey(string cadena)
        {
            if (cadena.Trim().Length != 0)
            {
                byte[] keyArray;
                var Arreglo_a_Cifrar = UTF8Encoding.UTF8.GetBytes(cadena.Trim());

                var hashmd5 = new MD5CryptoServiceProvider();

                keyArray = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(key));
                hashmd5.Clear();
                var tdes = new TripleDESCryptoServiceProvider
                {
                    Key = keyArray,
                    Mode = CipherMode.ECB,
                    Padding = PaddingMode.PKCS7
                };
                var cTransform = tdes.CreateEncryptor();
                var ArrayResultado = cTransform.TransformFinalBlock(Arreglo_a_Cifrar, 0, Arreglo_a_Cifrar.Length);
                tdes.Clear();
                return Convert.ToBase64String(ArrayResultado, 0, ArrayResultado.Length);
            }
            else
            {
                return cadena;
            }
        }

        public static string DecryptKey(string cadena)
        {
            if (cadena.Trim().Length != 0)
            {
                byte[] keyArray;
                var Array_a_Descifrar = Convert.FromBase64String(cadena.Trim());
                var hashmd5 = new MD5CryptoServiceProvider();
                keyArray = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(key));
                hashmd5.Clear();
                var tdes = new TripleDESCryptoServiceProvider
                {
                    Key = keyArray,
                    Mode = CipherMode.ECB,
                    Padding = PaddingMode.PKCS7
                };
                var cTransform = tdes.CreateDecryptor();
                var resultArray = cTransform.TransformFinalBlock(Array_a_Descifrar, 0, Array_a_Descifrar.Length);
                return UTF8Encoding.UTF8.GetString(resultArray);
            }
            else
            {
                return cadena;
            }
        }

        /// <summary>
        /// Obtiene los permisos de Lectura, Escritura y Control Total de la Opción seleccionada
        /// </summary>
        /// <param name="user">Cuenta de usuario de la sesión</param>
        /// <param name="url">Dirección Url de la opción seleccionada</param>
        /// <returns>Permisos de Lectura, Escritura y Control Total de la Opción seleccionada</returns>
        /// COMENTADO POR ANGEL
        //public static List<Control> ObtenerPermisosFormulario(CuentaUsuario user, string url)
        //{
        //    List<Control> controles = new List<Control>();
        //    foreach (var modulo in user.Modulos)
        //    {
        //        foreach (var vista in modulo.Vistas)
        //        {
        //            string[] separador = new string[1];
        //            separador[0] = "//";
        //            var llave = vista.URL.Split(separador, StringSplitOptions.RemoveEmptyEntries);
        //            for (int i = 0; i < llave.Length; i++)
        //            {
        //                if (llave[i].IndexOf("/") > 0)
        //                {
        //                    if (llave[i].Substring(llave[i].IndexOf('/') + 1) == url)
        //                    {
        //                        if (vista.Controles != null)
        //                        {
        //                            controles = vista.Controles;
        //                            return controles;
        //                        }
        //                    }
        //                }
        //            }
        //        }
        //    }
        //    return controles;
        //}
    }
}
