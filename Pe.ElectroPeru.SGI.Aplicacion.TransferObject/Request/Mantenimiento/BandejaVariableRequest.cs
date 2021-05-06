using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    /// <summary>
    /// Representa el objeto Request de la bandeja de Observacion Planeada
    /// </summary>
    /// <remarks>
    /// Creación: 	    GMD 28112017 <br />
    /// Modificación: 	             <br />
    /// </remarks>
    public class BandejaVariableRequest : BaseRequest
    {
        public Guid? CodigoVariable { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string Nombre { get; set; }
        /// <summary>
        /// Número de Registro OPT
        /// </summary>
        public string NombreSiglaVariable { get; set; }
        /// <summary>
        /// Número de Registro OPT
        /// </summary>
        public string DescripcionVariable { get; set; }
        /// <summary>
        /// Número de Registro OPT
        /// </summary>
        public string NombreTipoVariable { get; set; }
        /// <summary>
        /// Fecha de Ejecución
        /// </summary>
        public DateTime? FechaInicioVigencia { get; set; }
        /// <summary>
        /// Fecha de ejecución en cadena de texto
        /// </summary>
        public string FechaInicioVigenciaString { get; set; }
        /// <summary>
        /// Fecha de Ejecución
        /// </summary>
        public DateTime? FechaFinVigencia { get; set; }
        /// <summary>
        /// Fecha de ejecución en cadena de texto
        /// </summary>
        public string FechaFinVigenciaString { get; set; }
        /// <summary>
        /// Tipo Variable
        /// </summary>
        public Guid? CodigoArea { get; set; }
        /// <summary>
        /// Tipo Variable
        /// </summary>
        public string NombreArea { get; set; }
        /// <summary>
        /// Tipo Gestión
        /// </summary>
        public string NombreCompletoResponsable { get; set; }
        /// <summary>
        /// Area
        /// </summary>
        public int? CodigoPeriodicidad { get; set; }
        /// <summary>
        /// Area
        /// </summary>
        public string DescripcionPeriodicidad { get; set; }
        /// <summary>
        /// Codigo Idioma
        /// </summary>
        public string CodigoIdioma { get; set; }
        /// <summary>
        /// Area
        /// </summary>
        public string NombreVariable { get; set; }

        public int? CodigoTipoVariable { get; set; }

        public string EstadoRegistroDescripcion { get; set; }
    }
}
