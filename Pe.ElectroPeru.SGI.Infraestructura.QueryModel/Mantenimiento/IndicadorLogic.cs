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
    public class IndicadorLogic : Logic
    {
        public Guid? CodigoIndicador { get; set; }
        public string DescripcionIndicador { get; set; }
        public Guid? CodigoFormula { get; set; }
        public string NombreFormula { get; set; }
        public Guid? CodigoResponsable { get; set; }
        public string NombreCompletoResponsable { get; set; }
        public int? CodigoPeriodicidad { get; set; }
        public string NombrePeriodicidad { get; set; }
        public Guid? CodigoArea { get; set; }   
        public string NombreArea { get; set; }
        public int? CodigoUnidadMedida { get; set; }
        public string NombreUnidadMedida { get; set; }
        public int? CodigoTipoIndicador { get; set; }
        public string NombreTipoIndicador { get; set; }
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
        public decimal? RatioMaximo { get; set; }
        public decimal? RatioMinimo { get; set; }
        public decimal? Ponderacion { get; set; }

        /// <summary>
        /// Ámbito
        /// </summary>
        public string IndicadorAmbito { get; set; }

        public string EstadoRegistroDescripcion { get; set; }
    }
}

