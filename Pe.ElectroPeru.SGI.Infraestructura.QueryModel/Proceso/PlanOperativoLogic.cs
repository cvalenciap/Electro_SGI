using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Proceso
{
    public class PlanOperativoLogic : Logic
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
        public string Anio { get; set; }
        public decimal? PrimerTrimestre { get; set; }
        public decimal? SegundoTrimestre { get; set; }
        public decimal? TercerTrimestre { get; set; }
        public decimal? CuartoTrimestre { get; set; }
        public decimal? EjecucionPeriodoDel { get; set; }
        public decimal? EjecucionPeriodoAl { get; set; }       
    }
}
