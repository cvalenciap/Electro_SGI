using Microsoft.Reporting.WebForms;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.NotificacionAutomatica;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Correo;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Tareas;
using Pe.ElectroPeru.SGI.Transversal.Core.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.PlantillaNotificacion;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using AutoMapper;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Automaticas
{
    /// <summary>
    /// Implementación de tareas automáticas
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05042017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class NotificacionAutomaticaService : GenericService, INotificacionAutomaticaService
    {

        #region propiedades
        
        /// <summary>
        /// Servicio plantilla de notificacion
        /// </summary>
        public IPlantillaNotificacionLogicRepository plantillaNotificacionLogicRepository { get; set; }       
        /// <summary>
        /// Servicio de Parámetro Valor
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }
        #endregion

        /// <summary>
        /// Realiza la generacion de los reportes
        /// para el envio por correo de las tareas automaticas
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        public void ImprimirDocumento(ReporteViewRequest request)
        {
            try
            {
                request.FormatoReporte = "pdf";
                if (!string.IsNullOrWhiteSpace(request.CodigoTipoReporte))
                {
                    switch (request.CodigoTipoReporte)
                    {
                        case DatosConstantes.TipoReporte.Responsable:
                            
                            var plantillaNotificacionResponsable = plantillaNotificacionLogicRepository.BuscarPlantillaNotificacion(null, DatosConstantes.TipoPlantillaCorreo.AutomaticaPorResponsable, null, null, DatosConstantes.EstadoRegistro.Activo, 0, Int32.MaxValue).FirstOrDefault();
                            if (request.TipoResponsablePendiente)
                            {
                                if (!String.IsNullOrEmpty(request.CorreoElectronico))
                                {
                                    List<ReportParameter> parameters = new List<ReportParameter>();
                                    parameters.Add(new ReportParameter("CODIGO_EMPRESA_SISTEMA", Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru).ToString(), true));
                                    parameters.Add(new ReportParameter("CODIGO_SISTEMA", Guid.Parse(DatosConstantes.Sistema.CodigoSGI).ToString(), true));
                                    parameters.Add(new ReportParameter("CODIGO_COLABORADOR_RESPONSABLE", request.CodigoColaboradorResponsable.ToString(), true));
                                    parameters.Add(new ReportParameter("CODIGO_IDIOMA", DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol, true));
                                    parameters.Add(new ReportParameter("FECHA_EJECUCION", DateTime.Now.ToString(), true));
                                    parameters.Add(new ReportParameter("TOTAL_ACCIONES", request.TotalAcciones.ToString(), true));

                                    var nombreReportePendientes = string.Concat("PENDIENTES_", DateTime.Now.ToString("dd.MM.yyyy"), ".pdf");
                                    var archivoGeneradoPendientes = GeneraArchivoDesdeReporting(DatosConstantes.ConfiguracionReporting.ReporteServerUrl, DatosConstantes.ConfiguracionReporting.ReporteRuta, "ReporteResponsablePendientes", request.FormatoReporte, parameters);

                                    var emailRequest = new EmailRequest();
                                    emailRequest.Asunto = plantillaNotificacionResponsable.Asunto;
                                    emailRequest.Mensaje = plantillaNotificacionResponsable.Contenido;
                                    emailRequest.Para.Add(new DireccionesRequest()
                                    {
                                        Email = request.CorreoElectronico,
                                        NombreCompleto = request.NombreCompletoColaborador
                                    });
                                    emailRequest.Adjuntos.Add(new AdjuntosRequest()
                                    {
                                        NombreArchivo = nombreReportePendientes,
                                        Archivo = archivoGeneradoPendientes
                                    });

                                    if (archivoGeneradoPendientes != null)
                                    {
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("envio " + emailRequest.Para.FirstOrDefault().Email);
                                        var envioCorreo = Enviar(emailRequest);
                                    }
                                    else
                                    {
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------------------------------");
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("No se genero adjunto --ResponsablePendientes---->" + request.NombreCompletoColaborador);
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------------------------------");
                                    }
                                }
                                else
                                {
                                    //registrar en el log
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------------------------------");
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("NotificacionResponsable ----- ResponsablePendiente" + request.NombreCompletoColaborador);
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("El usuario no cuenta con cuenta de correo electrónico");
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------------------------------");
                                }
                            }
                            else 
                            {
                                if (!String.IsNullOrEmpty(request.CorreoElectronico))
                                {
                                    List<ReportParameter> parameters = new List<ReportParameter>();
                                    parameters.Add(new ReportParameter("CODIGO_EMPRESA_SISTEMA", Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru).ToString(), true));
                                    parameters.Add(new ReportParameter("CODIGO_SISTEMA", Guid.Parse(DatosConstantes.Sistema.CodigoSGI).ToString(), true));
                                    parameters.Add(new ReportParameter("CODIGO_COLABORADOR_RESPONSABLE", request.CodigoColaboradorResponsable.Value.ToString(), true));
                                    parameters.Add(new ReportParameter("CODIGO_IDIOMA", DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol, true));
                                    parameters.Add(new ReportParameter("FECHA_EJECUCION", DateTime.Now.ToString(), true));
                                    parameters.Add(new ReportParameter("TOTAL_ACCIONES", request.TotalAcciones.ToString(), true));

                                    var nombreReporteVencidos = string.Concat("VENCIDOS_", DateTime.Now.ToString("dd.MM.yyyy"), ".pdf");
                                    var archivoGeneradoVencidos = GeneraArchivoDesdeReporting(DatosConstantes.ConfiguracionReporting.ReporteServerUrl, DatosConstantes.ConfiguracionReporting.ReporteRuta, "ReporteResponsableVencidas", request.FormatoReporte, parameters);

                                    var emailRequest = new EmailRequest();
                                    emailRequest.Asunto = plantillaNotificacionResponsable.Asunto;
                                    emailRequest.Mensaje = plantillaNotificacionResponsable.Contenido;

                                    emailRequest.Para.Add(new DireccionesRequest()
                                    {
                                        Email = request.CorreoElectronico,
                                        NombreCompleto = request.NombreCompletoColaborador
                                    });
                                    
                                    emailRequest.Adjuntos.Add(new AdjuntosRequest()
                                    {
                                        NombreArchivo = nombreReporteVencidos,
                                        Archivo = archivoGeneradoVencidos
                                    });

                                    if (archivoGeneradoVencidos != null)
                                    {
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("envio " + emailRequest.Para.FirstOrDefault().Email);
                                        var envioCorreo = Enviar(emailRequest);
                                    }
                                    else
                                    {
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------------------------------");
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("No se genero adjunto --ResponsableVencidas---->" + request.NombreCompletoColaborador);
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------------------------------");
                                    }
                                }
                                else
                                {
                                    //registrar en el log
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------------------------------");
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("NotificacionAutomatica ----- ResponsableVencidas" + request.NombreCompletoColaborador);
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("El usuario no cuenta con cuenta de correo electrónico");
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------------------------------");
                                }
                            }
                            break;                        

                        case DatosConstantes.TipoReporte.ProyectoDepartamento:
                           
                            if (request.Para.Count > 0) 
                            {
                                List<ReportParameter> parameters = new List<ReportParameter>();
                                parameters.Add(new ReportParameter("CODIGO_EMPRESA_SISTEMA", Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru).ToString(), true));
                                parameters.Add(new ReportParameter("CODIGO_SISTEMA", Guid.Parse(DatosConstantes.Sistema.CodigoSGI).ToString(), true));
                                parameters.Add(new ReportParameter("CODIGO_IDIOMA", DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol, true));
                                parameters.Add(new ReportParameter("FECHA_EJECUCION", DateTime.Now.ToString(), true));
                                parameters.Add(new ReportParameter("CODIGO_DEPARTAMENTO", request.IdOrigen.ToString()));

                                var emailRequest = new EmailRequest();
                                foreach (var item in request.Para)
                                {
                                    emailRequest.Para.Add(new DireccionesRequest()
                                    {
                                        Email = item.Email,
                                        NombreCompleto = item.NombreCompleto
                                    });
                                }
                                
                                if (emailRequest.Adjuntos.Count > 0)
                                {
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("envio " + emailRequest.Para.FirstOrDefault().Email);
                                    var plantillaNotificacionTotal = plantillaNotificacionLogicRepository.BuscarPlantillaNotificacion(null, DatosConstantes.TipoPlantillaCorreo.AutomaticaPorProyectoDepartamento, null, null, DatosConstantes.EstadoRegistro.Activo, 0, Int32.MaxValue).FirstOrDefault();
                                                                        

                                    emailRequest.Asunto = plantillaNotificacionTotal.Asunto;
                                   
                                    emailRequest.Mensaje = plantillaNotificacionTotal.Contenido;
                                    var envioCorreo = Enviar(emailRequest);
                                }
                                else
                                {
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("-------------------------------------------------------------------------");
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("NotificacionAutomatica ----- ProyectoDepartamento");
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("El email no cuenta con adjuntos, Departamento -" + request.IdOrigen);
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("-------------------------------------------------------------------------");
                                }
                            }
                            else
                            {
                                Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------------------------------");
                                Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("NotificacionAutomatica ----- ProyectoDepartamento---");
                                Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("No se cuenta con lista de usuarios a notificar------");
                                Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------------------------------");
                            }
                            //}
                            break;

                        case DatosConstantes.TipoReporte.AutomaticaTotal:
                            
                                if (request.Para.Count > 0) 
                                {
                                    List<ReportParameter> parameters = new List<ReportParameter>();
                                    parameters.Add(new ReportParameter("CODIGO_EMPRESA_SISTEMA", Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru).ToString(), true));
                                    parameters.Add(new ReportParameter("CODIGO_SISTEMA", Guid.Parse(DatosConstantes.Sistema.CodigoSGI).ToString(), true));
                                    parameters.Add(new ReportParameter("CODIGO_IDIOMA", DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol, true));
                                    parameters.Add(new ReportParameter("FECHA_EJECUCION", DateTime.Now.ToString(), true));

                                    var emailRequest = new EmailRequest();
                                    foreach (var item in request.Para)
                                    {
                                        emailRequest.Para.Add(new DireccionesRequest()
                                        {
                                            Email = item.Email,
                                            NombreCompleto = item.NombreCompleto
                                        });
                                    }
                    
                                    if (emailRequest.Adjuntos.Count > 0)
                                    {
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("envio " + emailRequest.Para.FirstOrDefault().Email);
                                        var plantillaNotificacionTotal = plantillaNotificacionLogicRepository.BuscarPlantillaNotificacion(null, DatosConstantes.TipoPlantillaCorreo.AutomaticaTotal, null, null, DatosConstantes.EstadoRegistro.Activo, 0, Int32.MaxValue).FirstOrDefault();                                        
                                        emailRequest.Asunto = plantillaNotificacionTotal.Asunto;
                                        emailRequest.Mensaje = plantillaNotificacionTotal.Contenido;
                                        var envioCorreo = Enviar(emailRequest);
                                    }
                                    else
                                    {
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("-------------------------------------------------------------------------");
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("NotificacionAutomatica ----- AutomaticaTotal");
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("El email no cuenta con adjuntos, usuario -" + request.NombreCompletoColaborador);
                                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("-------------------------------------------------------------------------");
                                    }
                                }
                                else
                                {
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("------------------------------------------------------------------------------------");
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("NotificacionAutomatica ----- AutomaticaTotal-----------------------------------------");
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("No se cuenta con colaboradores a los cuales se les notificara------------------------ ");
                                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("------------------------------------------------------------------------------------");
                                }
                            //}
                            break;

                        default:
                            break;
                    }                    
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <returns>Descripción de un mes en español</returns>
        public string RetornarMes(int numeroMes)
        {
            List<string> arrayMeses = new List<string>();
            arrayMeses.Add("Enero");
            arrayMeses.Add("Febrero");
            arrayMeses.Add("Marzo");
            arrayMeses.Add("Abril");
            arrayMeses.Add("Mayo");
            arrayMeses.Add("Junio");
            arrayMeses.Add("Julio");
            arrayMeses.Add("Agosto");
            arrayMeses.Add("Setiembre");
            arrayMeses.Add("Octubre");
            arrayMeses.Add("Noviembre");
            arrayMeses.Add("Diciembre");

            return arrayMeses[numeroMes-1];
        }


        public static byte[] GeneraArchivoDesdeReporting(
            string reporteServerUrl,
            string rutaReporte,
            string nombreReporte,
            string formatoReporte,
            List<ReportParameter> parametros)
        {
            var rswebVisor = new ReportViewer();
            rswebVisor.ServerReport.ReportServerUrl = new Uri(reporteServerUrl);
            rswebVisor.ServerReport.ReportServerCredentials = new ReporteCredencial();
            rswebVisor.ServerReport.ReportPath = string.Concat(rutaReporte, nombreReporte);

            rswebVisor.ShowParameterPrompts = false;
            rswebVisor.ServerReport.SetParameters(parametros);
            rswebVisor.ZoomMode = ZoomMode.Percent;
            rswebVisor.ZoomPercent = 100;
            rswebVisor.ServerReport.Refresh();

            string mimeType, encoding, extension;
            string[] streamids;
            Warning[] warnings;
            return rswebVisor.ServerReport.Render(formatoReporte, null, out mimeType, out encoding, out extension, out streamids, out warnings);
        }

        public static bool Enviar(EmailRequest logic)
        {
            MailMessage lMailMessage = new MailMessage();
            try
            {
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
                    foreach (AdjuntosRequest item in logic.Adjuntos)
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
                Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("Send");
                Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("---------------------------");
                return true;
            }
            catch (Exception e)
            {
                Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError(e.Message);    
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
