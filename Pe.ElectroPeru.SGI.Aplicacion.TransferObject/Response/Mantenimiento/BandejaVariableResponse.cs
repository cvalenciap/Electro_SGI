using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class BandejaVariableResponse : BaseRequest
    {
        /// <summary>
        /// Codigo Variable
        /// </summary>
        public Guid? CodigoVariable { get; set; }
        /// <summary>
        /// Nombre
        /// </summary>
        public string Nombre { get; set; }
        /// <summary>
        /// Nombre Sigla Variable
        /// </summary>
        public string NombreSiglaVariable { get; set; }
        /// <summary>
        /// Descripción Variable
        /// </summary>
        public string DescripcionVariable { get; set; }
        /// <summary>
        /// Nombre Tipo Variable
        /// </summary>
        public string NombreTipoVariable { get; set; }
        /// <summary>
        /// Fecha de Inicio de Vigencia
        /// </summary>
        public DateTime? FechaInicioVigencia { get; set; }
        /// <summary>
        /// Fecha de Inicio de Vigencia en String
        /// </summary>
        public string FechaInicioVigenciaString { get; set; }
        /// <summary>
        /// Fecha de Fin de Vigencia
        /// </summary>
        public DateTime? FechaFinVigencia { get; set; }
        /// <summary>
        /// Fecha de Fin de Vigencia en String
        /// </summary>
        public string FechaFinVigenciaString { get; set; }
        /// <summary>
        /// Código de Área
        /// </summary>
        public Guid? CodigoArea { get; set; }
        /// <summary>
        /// Nombre de Área
        /// </summary>
        public string NombreArea { get; set; }
        /// <summary>
        /// Nombre Completo de Responsable
        /// </summary>
        public string NombreCompletoResponsable { get; set; }
        /// <summary>
        /// Código de Periodicidad
        /// </summary>
        public int? CodigoPeriodicidad { get; set; }
        /// <summary>
        /// Descripción de Periodicidad
        /// </summary>
        public string DescripcionPeriodicidad { get; set; }
        /// <summary>
        /// Nombre de Variable
        /// </summary>
        public string NombreVariable { get; set; }

        public int? CodigoTipoVariable { get; set; }

        public int? Permiso { get; set; }

        public string EstadoRegistroDescripcion { get; set; }
    }
}
