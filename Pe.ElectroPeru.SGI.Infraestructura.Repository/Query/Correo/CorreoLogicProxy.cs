using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
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

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Query.Correo
{
    public class CorreoLogicProxy : ICorreoLogicProxy
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
                Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("CorreoLogicProxy");
                MailAddress fromAddress = new MailAddress(DatosConstantes.ConfiguracionSendMail.EmailUsuarioSMTP, DatosConstantes.ConfiguracionSendMail.NombreUsuarioSMTP);
                lMailMessage.From = fromAddress;
                lMailMessage.Subject = logic.Asunto;
                lMailMessage.IsBodyHtml = true;
                lMailMessage.Body = logic.Mensaje;

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

                SmtpClient SMTP = new SmtpClient(DatosConstantes.ConfiguracionSendMail.ServidorSMTP);
                SMTP.EnableSsl = Convert.ToBoolean(DatosConstantes.ConfiguracionSendMail.ConexionSegura_SMTP);
                SMTP.Credentials = new System.Net.NetworkCredential(DatosConstantes.ConfiguracionSendMail.UsuarioSMTP, DatosConstantes.ConfiguracionSendMail.PasswordSMTP);
                SMTP.Port = Convert.ToInt32(DatosConstantes.ConfiguracionSendMail.Puerto_SMTP);

                ServicePointManager.ServerCertificateValidationCallback = delegate(object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
                {
                    return true;
                };
                
                SMTP.Send(lMailMessage);                
                return true;
            }
            catch (Exception e)
            {
                Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError(e.Message);
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
    
}
