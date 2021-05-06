using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Proceso
{
    public class BandejaPlanOperativoRequest : BaseRequest
    {       
        public Guid? CodigoObjetivoEstrategicoFonafe { get; set; }
        public string DescripcionObjetivoEstrategicoFonafe { get; set; }
        public Guid? CodigoObjetivoEstrategicoEmpresa { get; set; }
        public string DescripcionObjetivoEstrategicoEmpresa { get; set; }
        public Guid? CodigoIndicador { get; set; }
        public string DescripcionIndicador { get; set; }       
        public int? CodigoUnidadMedida { get; set; }
        public string DescripcionUnidadMedida { get; set; }
        public string DescripcionSubTipoPeriodicidad { get; set; }        
        public decimal? Ponderacion { get; set; }
        public string TipoResultado { get; set; }
        public decimal? Valor { get; set; }
        public int? Anio { get; set; }
        public decimal? PrimerTrimestre { get; set; }
        public decimal? SegundoTrimestre { get; set; }
        public decimal? TercerTrimestre { get; set; }
        public decimal? CuartoTrimestre { get; set; }        
        public decimal? EjecucionPeriodoDel { get; set; }
        public decimal? EjecucionPeriodoAl { get; set; }       
        public string CodigoIdioma { get; set; }
    }
}
