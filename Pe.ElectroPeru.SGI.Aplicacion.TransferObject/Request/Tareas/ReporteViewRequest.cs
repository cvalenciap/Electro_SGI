using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Tareas
{
    /// <summary>
    /// Request de Vista de Reporte
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05042017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class ReporteViewRequest
    {
        public ReporteViewRequest()
        {
            this.Para = new List<DireccionesEmailRequest>();
            this.RutaReporte = DatosConstantes.ConfiguracionReporting.ReporteRuta;
            this.Parametros = new List<ParametrosReporting>();
        }
        /// <summary>
        /// Ruta del reporte
        /// </summary>
        public string RutaReporte { get; set; }
        /// <summary>
        /// Ruta del reporte
        /// </summary>
        public string NombreReporte { get; set; }
        /// <summary>
        /// NombreExportar
        /// </summary>
        public string NombreExportar { get; set; }
        /// <summary>
        /// FormatoReporte
        /// </summary>
        public string FormatoReporte { get; set; }
        /// <summary>
        /// Nombre del Trabajador
        /// </summary>
        public string NombreTrabajador { get; set; }
        /// <summary>
        /// Tipo de reporte
        /// </summary>
        public string CodigoTipoReporte { get; set; }
        /// <summary>
        /// Listado de parametros
        /// </summary>
        public List<ParametrosReporting> Parametros { get; set; }
        /// <summary>
        /// correo electronico
        /// </summary>
        public string CorreoElectronico { get; set; }
        /// <summary>
        /// id de origen
        /// </summary>
        public int IdOrigen { get; set; }
        /// <summary>
        /// nombre completo del colaborador
        /// </summary>
        public string NombreCompletoColaborador { get; set; }
        /// <summary>
        /// Total de acciones
        /// </summary>
        public int TotalAcciones { get; set; }
        /// <summary>
        /// Codigo del colaborador responsable
        /// </summary>
        public Guid? CodigoColaboradorResponsable { get; set; }
        /// <summary>
        /// Identificador del tipo de responsable (pendiente, vencida)
        /// </summary>
        public bool TipoResponsablePendiente { get; set; }
        /// <summary>
        /// Para
        /// </summary>
        public List<DireccionesEmailRequest> Para { get; set; }
    }

    public class ParametrosReporting
    {
        /// <summary>
        /// Name
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// Values
        /// </summary>
        public string Values { get; set; }
        /// <summary>
        /// Visible
        /// </summary>
        public bool Visible { get; set; }
    }

    public class DireccionesEmailRequest 
    {
        /// <summary>
        /// Email
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// Para
        /// </summary>
        public string NombreCompleto { get; set; }
    }
}
