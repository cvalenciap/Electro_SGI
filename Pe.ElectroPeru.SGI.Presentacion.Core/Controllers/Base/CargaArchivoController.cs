using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Base;
using System;
using System.IO;
using System.Web;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base
{
    /// <summary>
    /// Controladora de Componente de Carga de Archivo
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 20150318
    /// Modificación:
    /// </remarks>
    public class CargaArchivoController : GenericController
    {
        #region Vistas Parciales
        /// <summary>
        /// Formulario de Carga
        /// </summary>
        /// <returns>Vista de Formulario de carga</returns>
        public ActionResult FormularioCarga()
        {
            return PartialView();
        }
        #endregion

        public void UploadDocument()
        {
            CargarArchivoViewModel ObjCargarArchivo = new CargarArchivoViewModel();
            for (int i = 0; i < Request.Files.Count; i++)
            {
                HttpPostedFileBase item = Request.Files[i];

                ObjCargarArchivo.NombreArchivo = System.IO.Path.GetFileName(item.FileName);
                ObjCargarArchivo.Extension = System.IO.Path.GetExtension(item.FileName);
                ObjCargarArchivo.Tamaño = item.ContentLength;
                byte[] fileData = null;
                using (var binaryReader = new BinaryReader(Request.Files[i].InputStream))
                {
                    fileData = binaryReader.ReadBytes(Request.Files[i].ContentLength);
                }
                ObjCargarArchivo.ArchivoBase64 = Convert.ToBase64String(fileData);
            }
            Response.Write(Newtonsoft.Json.JsonConvert.SerializeObject(ObjCargarArchivo));
        }
    }
}
