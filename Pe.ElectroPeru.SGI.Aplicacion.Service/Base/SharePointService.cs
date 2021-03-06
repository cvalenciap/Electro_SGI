using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using Microsoft.SharePoint.Client;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Contractual;


namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Base
{
    /// <summary>
    /// Clase para Interacción con un servidor SharePoint
    /// GRC: 09-06-2015
    /// </summary>
    public class SharePointService : GenericService, ISharePointService
    {
        /// <summary>
        /// Interfaz de comunicación con parámetro de políticas.
        /// </summary>
        public IPoliticaService politicaService { get; set; }

        /// <summary>
        /// Interfaz de comunicación con parámetro de valores.
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }

        /// <summary>
        /// Retorna las credenciales de acceso al SharePoint
        /// </summary>
        /// <returns>Credenciales de acceso a sharepoint</returns>
        public NetworkCredential RetornaCredencialesServer()
        {
            string userShp = string.Empty, passWord = string.Empty, dominio = string.Empty;
            NetworkCredential credentialsSHP;

            var crdSharePoint = parametroValorService.BuscarParametroValorDinamico(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.CredencialAccesoSP,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                IndicadorEmpresa = true
            });            
            userShp = crdSharePoint.Result[0].Atributo3;
            passWord = crdSharePoint.Result[0].Atributo4;
            dominio = crdSharePoint.Result[0].Atributo5;

            return credentialsSHP = new NetworkCredential(userShp, passWord, dominio);
        }
        /// <summary>
        /// Retorna el Site del Servidor SharePoint configurado
        /// </summary>
        /// <returns>Url Sharepoint</returns>
        public string RetornaSiteUrlSharePoint()
        {
            string lsUrlServerSHP = "", lsSite = "", siteURL = "";
            var cfgSharePoint = parametroValorService.BuscarParametroValorDinamico(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.ConfiguracionServidorSP,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                IndicadorEmpresa = true
            });
            
            lsUrlServerSHP = cfgSharePoint.Result[0].Atributo3;            
            lsSite = cfgSharePoint.Result[1].Atributo3;

            siteURL = string.Format("{0}{1}", lsUrlServerSHP, lsSite);
            return siteURL;
        }
        /// <summary>
        /// Retorna el arreglo de bytes del documento SharePoint
        /// </summary>
        /// <param name="hayError">Cadena para ver si hay errores al retornar el documento.</param>
        /// <param name="idItem">Código del Archivo en el SharePoint</param>
        /// <param name="siteUrl">URL del Site SharePoint</param>
        /// <param name="listName">Lista de biblioteca.</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<Object> DescargaArchivoPorId(ref string hayError, long idItem, string listName)
        {
            ProcessResult<Object> resultado = new ProcessResult<Object>();
            hayError = string.Empty;
            MemoryStream memorySt = null;
            string siteUrl = string.Empty;
            siteUrl = RetornaSiteUrlSharePoint();
            try
            {
                using (ClientContext context = new ClientContext(siteUrl))
                {
                    context.Credentials = RetornaCredencialesServer();
                    CamlQuery query = new CamlQuery();
                    query.ViewXml = string.Format(@"
                    <View Scope='Recursive'>
                        <Query>
                            <Where>
                                <Eq><FieldRef Name='ID'/><Value Type='Number'>" + idItem + @"</Value></Eq>
                            </Where>
                            <RowLimit>1</RowLimit>
                        </Query>                                                                    
                    </View>", idItem);

                    List list = context.Web.Lists.GetByTitle(listName);
                    ListItemCollection listItems = list.GetItems(query);
                    context.Load(listItems);
                    context.ExecuteQuery();

                    if (listItems.Count == 1)
                    {
                        ListItem item = listItems.First();
                        Microsoft.SharePoint.Client.File file = item.File;
                        ClientResult<Stream> data = file.OpenBinaryStream();
                        ////Load the Stream data for the file
                        context.Load(file);
                        context.ExecuteQuery();
                        if (data != null)
                        {
                            using (memorySt = new MemoryStream())
                            {
                                data.Value.CopyTo(memorySt);
                            }
                        }

                        resultado.Result = memorySt.ToArray();
                    }
                    else
                    {
                        memorySt = null;
                    }
                }
            }
            catch (Exception ex)
            {
                hayError = ex.Message;
                LogBL.grabarLogError(ex);//GRC16062015
                resultado.Result = null;
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<SharePointService>(ex);
            }
            return resultado;
        }
        /// <summary>
        /// Registra un nuevo archivo en el servidor de SharePoint
        /// </summary>        
        /// <param name="hayError">variable que contiene el mensaje de error al registrar</param>
        /// <param name="listName">biblioteca de donde se encontrará el archivo</param>
        /// <param name="folderName">nombre de carpeta del archivo</param>
        /// <param name="fileName">nombre del archivo</param>
        /// <param name="myFile">stream del archivo</param>
        /// <param name="prmSiteURL">URL del servidor SharePoint</param>
        /// <param name="prmCredenciales">Credenciales de acceso al servidor SharePoint</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<Object> RegistraArchivoSharePoint(ref string hayError, string listName, string folderName, string fileName, MemoryStream myFile, string prmSiteURL = null, NetworkCredential prmCredenciales = null)
        {
            ProcessResult<Object> resultado = new ProcessResult<Object>();
            string siteUrl = string.Empty;
            if (string.IsNullOrEmpty(prmSiteURL))
            {
                siteUrl = RetornaSiteUrlSharePoint();
            }
            else
            {
                siteUrl = prmSiteURL;
            }

            try
            {
                using (ClientContext clientContext = new ClientContext(siteUrl))
                {
                    Web webSite = clientContext.Web;
                    #region Logeo
                    if (prmCredenciales == null)
                    {
                        clientContext.Credentials = RetornaCredencialesServer();
                    }
                    else
                    {
                        clientContext.Credentials = prmCredenciales;
                    }
                    #endregion

                    #region CreacionListaPrincipal
                    /*-------------------Verificamos si la Lista ya existe.GRC.---------------------*/
                    List existeLista = null;
                    ListCollection lstCollection = clientContext.Web.Lists;
                    IEnumerable<List> misLitas = clientContext.LoadQuery(lstCollection.Include(list => list.Title));
                    clientContext.ExecuteQuery();

                    existeLista = misLitas.FirstOrDefault(lista => lista.Title.ToLower() == listName.ToLower());
                    if (existeLista == null)
                    {
                        ListCreationInformation creationInfo = new ListCreationInformation();
                        creationInfo.Title = listName;
                        creationInfo.TemplateType = (int)ListTemplateType.DocumentLibrary;
                        List listGeneral = webSite.Lists.Add(creationInfo);
                        listGeneral.Description = DatosConstantes.ArchivosContrato.DescripcionBibliotecaSHP;
                        listGeneral.Update();
                        clientContext.ExecuteQuery();
                    }
                    #endregion

                    #region crearDirectorio
                    var folder = CreateCarpeta(clientContext.Web, listName, folderName);
                    #endregion

                    #region listaDirectorio
                    List listaSitio = clientContext.Web.Lists.GetByTitle(listName);

                    clientContext.Load(listaSitio);
                    clientContext.Load(listaSitio.RootFolder);
                    clientContext.ExecuteQuery();
                    var serverRelativeURLFile = listaSitio.RootFolder.ServerRelativeUrl.ToString() + (string.IsNullOrEmpty(folderName) ? "" : "/" + folderName)
                                                + "/" + fileName;
                    #endregion

                    #region GenerarBytesSHP
                    Stream stmMyFile;
                    byte[] newFile = myFile.ToArray();
                    stmMyFile = new MemoryStream(newFile);
                    #endregion

                    #region CopiarStreamArchivo
                    Microsoft.SharePoint.Client.File.SaveBinaryDirect(clientContext, serverRelativeURLFile, stmMyFile, true);
                    #endregion

                    #region LeerNuevoArchivo
                    clientContext.Load(webSite);
                    clientContext.ExecuteQuery();
                    // cargamos el archivo guardado
                    Microsoft.SharePoint.Client.File getNewFile = webSite.GetFileByServerRelativeUrl(serverRelativeURLFile);
                    clientContext.Load(getNewFile);
                    #endregion

                    #region CargarDatos
                    ListItem myItem = getNewFile.ListItemAllFields;

                    clientContext.Load(myItem);
                    clientContext.Load(myItem.File);
                    clientContext.ExecuteQuery();
                    resultado.Result = myItem.Id;
                    #endregion
                }
            }
            catch (Exception ex)
            {
                hayError = ex.Message;
                LogBL.grabarLogError(ex);
                resultado.Result = -1;
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<SharePointService>(ex);

            }
            return resultado;
        }
        /// <summary>
        /// Método para eliminar los archivos del repositorio SharePoint.
        /// </summary>
        /// <param name="lstArchivosSHP">lista que contiene los ID de los archivos</param>
        /// <param name="listName">nombre del directorio dentro del cual se buscan los archivos</param>
        /// <param name="hayError">parámetro para capturar los errores del procedimiento</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<Object> EliminaArchivoSharePoint(List<int> lstArchivosSHP, string listName, ref string hayError)
        {
            ProcessResult<Object> resultado = new ProcessResult<Object>();
            string siteUrl = string.Empty;
            siteUrl = RetornaSiteUrlSharePoint();
            try
            {
                Dictionary<string, string> termsArray = new Dictionary<string, string>();
                using (ClientContext clientContext = new ClientContext(siteUrl))
                {
                    #region Logueo
                    clientContext.Credentials = RetornaCredencialesServer();
                    #endregion
                    foreach (int idFile in lstArchivosSHP)
                    {
                        CamlQuery query = new CamlQuery();
                        query.ViewXml = string.Format(@"
                        <View Scope='Recursive'>
                            <Query>
                                <Where>
                                    <Eq><FieldRef Name='ID'/><Value Type='Number'>" + idFile + @"</Value></Eq>
                                </Where>
                                <RowLimit>1</RowLimit>
                            </Query>
                        </View>", idFile);

                        List list = clientContext.Web.Lists.GetByTitle(listName);
                        ListItemCollection listItems = list.GetItems(query);
                        clientContext.Load(listItems);
                        clientContext.ExecuteQuery();
                        if (listItems.Count > 0)
                        {
                            ListItem item = listItems[0];
                            item.DeleteObject();
                        }
                    }
                    clientContext.ExecuteQuery();
                }
                resultado.Result = 1;
            }
            catch (Exception ex)
            {
                hayError = ex.Message;
                LogBL.grabarLogError(ex);//GRC16062015
                resultado.Result = -1;
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<SharePointService>(ex);
            }
            return resultado;
        }
        /// <summary>
        /// Crear una carpeta dentro de un directorio SharePoint.
        /// </summary>
        /// <param name="web">contexto cliente web sharepoint</param>
        /// <param name="listTitle">titutlo de la carpeta</param>
        /// <param name="fullFolderUrl">ruta del directorio a crear la carpeta</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        private Folder CreateCarpeta(Web web, string listTitle, string fullFolderUrl)
        {
            if (string.IsNullOrEmpty(fullFolderUrl))
            {
                throw new ArgumentNullException("fullFolderUrl");
            }
            List list = web.Lists.GetByTitle(listTitle);
            return CreateCarpetaInterna(web, list.RootFolder, fullFolderUrl);
        }
        /// <summary>
        /// Crear una carpeta dentro de un directorio SharePoint.
        /// </summary>
        /// <param name="web">contexto cliente web sharepoint</param>
        /// <param name="parentFolder">carpeta padrea que contendra carpeta actual</param>
        /// <param name="fullFolderUrl">ruta del directorio a crear la carpeta</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        private Folder CreateCarpetaInterna(Web web, Folder parentFolder, string fullFolderUrl)
        {
            string[] folderUrls = fullFolderUrl.Split(new char[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
            string folderUrl = folderUrls[0];
            Folder curFolder = parentFolder.Folders.Add(folderUrl);
            web.Context.Load(curFolder);
            web.Context.ExecuteQuery();

            if (folderUrls.Length > 1)
            {
                string subFolderUrl = string.Join("/", folderUrls, 1, folderUrls.Length - 1);
                return CreateCarpetaInterna(web, curFolder, subFolderUrl);
            }
            return curFolder;
        }
        /// <summary>
        /// Obtiene la carpeta de acuerdo a una ruta
        /// </summary>
        /// <param name="web">contexto cliente web sharepoint</param>
        /// <param name="fullFolderUrl">ruta del directorio que contiene la carpeta</param>
        /// <returns>Ruta de carpeta</returns>
        private Folder GetFolder(Web web, string fullFolderUrl)
        {
            if (string.IsNullOrEmpty(fullFolderUrl))
            {
                throw new ArgumentNullException("fullFolderUrl");
            }

            if (!web.IsPropertyAvailable("ServerRelativeUrl"))
            {
                web.Context.Load(web, w => w.ServerRelativeUrl);
                web.Context.ExecuteQuery();
            }
            var folder = web.GetFolderByServerRelativeUrl(web.ServerRelativeUrl + fullFolderUrl);
            web.Context.Load(folder);
            web.Context.ExecuteQuery();
            return folder;
        }

        /// <summary>
        /// Retorna la ruta del directorio SharePoint para escribir el archivo.
        /// </summary>
        /// <param name="CodigoFile">Código de archivo, será el nombre del file.</param>
        /// <param name="PrmFile">Código de parámetro de archivo.</param>
        /// <returns>Ruta de directorio de sharepoint para escribir archivo</returns>
        /// Proyecto Pe.ElectroPeru.SGI
        /// 20-03-2017
        public ProcessResult<string> RetornaDirectorioFile()
        {
            ProcessResult<string> resultado = new ProcessResult<string>();
            string lsValue = string.Empty, directorioSHP = string.Empty; 
            try
            {
                var RepositorioSharePoint = parametroValorService.BuscarParametroValorDinamico(new ParametroValorRequest()
                {
                    CodigoIdentificador = DatosConstantes.ParametrosGenerales.RepositorioSP,
                    CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                    IndicadorEmpresa = true
                });

                foreach (var item in RepositorioSharePoint.Result)
                {
                    lsValue = string.Empty;
                    if (item.Atributo1.Equals("01"))
                    {
                        lsValue = item.Atributo3.Replace("[ANIO_CREACION_RECORD]", DateTime.Now.Year.ToString());
                        directorioSHP += lsValue + "/";
                    }
                    if (item.Atributo1.Equals("02"))
                    {
                        lsValue = item.Atributo3.Replace("[NOMBRE_PROYECTO]", "Sistema de Gestión de Acciones y Entrenamiento");
                        directorioSHP += lsValue + "/";
                    }
                    //if (item.Atributo1.Equals("03") && TipoRecord == "03")
                    //{
                    //    lsValue = item.Atributo3.Replace("[CODIGO_RECORD]", CodigoRecord);
                    //    directorioSHP += lsValue;
                    //}
                    //if (item.Atributo1.Equals("04") && TipoRecord == "04")
                    //{
                    //    lsValue = item.Atributo3.Replace("[CODIGO_RECORD]", CodigoRecord);
                    //    directorioSHP += lsValue;
                    //}
                }
                resultado.Result = directorioSHP;
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
            }
            return resultado;
        }        
    }
}
