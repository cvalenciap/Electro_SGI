using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class BandejaIndicadorRequest : BaseRequest
    {
        public Guid? CodigoIndicador { get; set; }        
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string DescripcionIndicador { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public Guid? CodigoResponsable { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public Guid? CodigoArea { get; set; }
        /// <summary>
        /// Número de Registro OPT
        /// </summary>
        public string NombreCompletoResponsable { get; set; }
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
        /// Número de Registro OPT
        /// </summary>
        public string NombreArea { get; set; }
        /// <summary>
        /// Número de Registro OPT
        /// </summary>
        public string NombreFormula { get; set; }
        
        public string NombreTipoIndicador { get; set; }        

        public int? CodigoTipoIndicador { get; set; }
        /// <summary>
        /// Codigo Idioma
        /// </summary>
        public string CodigoIdioma { get; set; }

        /// <summary>
        /// Estado
        /// </summary>
        public string EstadoRegistroDescripcion { get; set; }

        /// <summary>
        /// Ámbito
        /// </summary>
        public string IndicadorAmbito { get; set; }
    }
}
