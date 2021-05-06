using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento
{
    /// <summary>
    /// Logic de Tabla de Área
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class VariableDetalleLogic : Logic
    {
        /// <summary>
        /// Código de Área
        /// </summary>
        public Guid? CodigoDetalleVariable { get; set; }
        /// <summary>
        /// Código de Área
        /// </summary>
        public Guid? CodigoVariable { get; set; }
        /// <summary>
        /// Fecha Ejecucion
        /// </summary>
        public DateTime? FechaInicioVigencia { get; set; }
        /// <summary>
        /// Fecha Ejecucion String
        /// </summary>
        public string FechaInicioVigenciaString { get; set; }
        /// <summary>
        /// Fecha Ejecucion
        /// </summary>
        public DateTime? FechaFinVigencia { get; set; }
        /// <summary>
        /// Fecha Ejecucion String
        /// </summary>
        public string FechaFinVigenciaString { get; set; }
        /// <summary>
        /// Fecha Ejecucion String
        /// </summary>
        public Guid? CodigoArea { get; set; }
        /// <summary>
        /// Fecha Ejecucion String
        /// </summary>
        public string NombreArea { get; set; }
        /// <summary>
        /// Fecha Ejecucion String
        /// </summary>
        public Guid? CodigoResponsable { get; set; }
        /// <summary>
        /// Fecha Ejecucion String
        /// </summary>
        public string NombreCompletoResponsable { get; set; }
        /// <summary>
        /// Fecha Ejecucion String
        /// </summary>
        public int? CodigoPeriodicidad { get; set; }
        /// <summary>
        /// Fecha Ejecucion String
        /// </summary>
        public string DescripcionPeriodicidad { get; set; }       
        /// <summary>
        /// Nombre de Área
        /// </summary>
        public string NombreVariable { get; set; }
        /// <summary>
        /// Nombre de Responsable
        /// </summary>
        public string NombreSiglaVariable { get; set; }
        /// <summary>
        /// Nombre de Área
        /// </summary>
        public string DescripcionVariable { get; set; }
        /// <summary>
        /// Nombre de Área
        /// </summary>
        public int? CodigoTipoVariable { get; set; }
        /// <summary>
        /// Nombre de Área
        /// </summary>
        public string NombreTipoVariable { get; set; }
        /// <summary>
        /// Nombre de Área
        /// </summary>
        public string EstadoRegistroDescripcion { get; set; }
    }
}

