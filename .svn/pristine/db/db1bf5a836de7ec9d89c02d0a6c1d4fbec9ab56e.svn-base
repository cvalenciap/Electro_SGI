using Pe.ElectroPeru.SGI.Infraestructura.Core.Context;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Correo;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Correo;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Reflection;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.Proxy.Correo
{
    /*public class CorreoLogicProxy : ICorreoLogicProxy
    {
        /// <summary>
        /// Envia Email
        /// </summary>
        /// <param name="logic">EmailLogic</param>
        /// <returns>Resultado del proceso</returns>
        public bool Enviar(EmailLogic logic)
        {
            MailMessage lMailMessage = new MailMessage();
            try
            {
                LogBL.grabarLogError(new Exception("proxy"));
                MailAddress fromAddress = new MailAddress(DatosConstantes.ConfiguracionSendMail.EmailUsuarioSMTP, DatosConstantes.ConfiguracionSendMail.NombreUsuarioSMTP);
                lMailMessage.From = fromAddress;
                lMailMessage.Subject = logic.Asunto;
                lMailMessage.IsBodyHtml = true;
                lMailMessage.Body = logic.Mensaje;

                LogBL.grabarLogError(new Exception("-----Para-----"));

                foreach (var item in logic.Para)
                {
                    if (!string.IsNullOrEmpty(item.Email))
                    {
                        MailAddress address = new MailAddress(item.Email, item.NombreCompleto);
                        lMailMessage.To.Add(address);
                    }
                }

                foreach (var item in logic.ConCopia)
                {
                    if (!string.IsNullOrEmpty(item.Email))
                    {
                        MailAddress address = new MailAddress(item.Email, item.NombreCompleto);
                        lMailMessage.CC.Add(address);
                    }
                }

                if (logic.Adjuntos != null)
                {
                    foreach (AdjuntosLogic item in logic.Adjuntos)
                    {
                        MemoryStream ms = new MemoryStream(item.Archivo);
                        lMailMessage.Attachments.Add(new System.Net.Mail.Attachment(ms, item.NombreArchivo));
                    }
                }

                LogBL.grabarLogError(new Exception("smtp"));
                SmtpClient SMTP = new SmtpClient(DatosConstantes.ConfiguracionSendMail.ServidorSMTP);
                SMTP.EnableSsl = Convert.ToBoolean(DatosConstantes.ConfiguracionSendMail.ConexionSegura_SMTP);
                SMTP.Credentials = new System.Net.NetworkCredential(DatosConstantes.ConfiguracionSendMail.UsuarioSMTP, DatosConstantes.ConfiguracionSendMail.PasswordSMTP);
                SMTP.Port = Convert.ToInt32(DatosConstantes.ConfiguracionSendMail.Puerto_SMTP);

                
                ServicePointManager.ServerCertificateValidationCallback = delegate(object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
                {
                    return true;
                };
                LogBL.grabarLogError(new Exception("antes del send"));
                
                SMTP.Send(lMailMessage);
                return true;
                LogBL.grabarLogError(new Exception("despues del send"));
                
            }
            catch (Exception e)
            {
                //if (!System.IO.File.Exists(@"F:\Apps\AppSGD\WriteText.txt"))
                //{
                //    System.IO.File.WriteAllText(@"F:\Apps\AppSGD\WriteText.txt", string.Concat("OnElapsedTime: ", e.Message));
                //}
                //else
                //{
                //    System.IO.File.AppendAllText(@"F:\Apps\AppSGD\WriteText.txt", string.Concat("OnElapsedTime: ", e.Message));
                //}

                return false;
            }
            finally
            {
                foreach (System.Net.Mail.Attachment a in lMailMessage.Attachments)
                {
                    a.Dispose();
                }
                lMailMessage.Attachments.Clear();
                lMailMessage.Attachments.Dispose();
                lMailMessage.Dispose();
            }
        }
    }


    public class LogBL
    {
        public static void grabarLogError(Exception ex)
        {
            LogEN obeLog = new LogEN();
            obeLog.MensajeError = ex.Message;
            obeLog.DetalleError = ex.StackTrace;
            grabarArchivoTxt<LogEN>(obeLog, Formato.ArchivoAMD("LogError.txt"));
        }

        public static void grabarArchivoTxt<T>(T obj, string archivo)
        {
            PropertyInfo[] propiedades = obj.GetType().GetProperties();
            object valor;
            using (StreamWriter sw = new StreamWriter(archivo, true))
            {
                foreach (PropertyInfo item in propiedades)
                {
                    valor = item.GetValue(obj, null);
                    if (valor != null) sw.WriteLine("{0} = {1}", item.Name, valor.ToString());
                }
                sw.WriteLine(new String('_', 50));
            }
        }

        public class Formato
        {
            public static string ArchivoAMD(string archivo)
            {
                String ls_dir = AppDomain.CurrentDomain.BaseDirectory;
                ls_dir = ls_dir + @"LogApp";
                //string archivoSinExt = Path.Combine(Path.GetDirectoryName(archivo), Path.GetFileNameWithoutExtension(archivo));
                string archivoSinExt = Path.Combine(ls_dir, Path.GetFileNameWithoutExtension(archivo));
                DateTime fechaHoy = DateTime.Now;
                string cadenaAMD = String.Format("{0}_{1}_{2}_{3}{4}", archivoSinExt, fechaHoy.Year, fechaHoy.Month.ToString().PadLeft(2, '0'), fechaHoy.Day.ToString().PadLeft(2, '0'), Path.GetExtension(archivo));
                return (cadenaAMD);
            }
        }
    }

    public class LogEN
    {
        public DateTime FechaHora { get; set; }
        public string Aplicacion { get; set; }
        public string Usuario { get; set; }
        public string NombrePC { get; set; }
        public string MensajeError { get; set; }
        public string DetalleError { get; set; }
        public LogEN()
        {
            FechaHora = DateTime.Now;
        }
    }*/
}
