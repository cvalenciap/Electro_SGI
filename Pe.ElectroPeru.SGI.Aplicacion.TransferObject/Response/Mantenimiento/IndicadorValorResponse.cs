using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class IndicadorValorResponse : BaseResponse
    {
        /// <summary>
        /// Codigo Indicador Valor
        /// </summary>
        public Guid? CodigoIndicadorValor { get; set; }
        /// <summary>
        /// Codigo Indicador
        /// </summary>
        public Guid CodigoIndicador { get; set; }
        /// <summary>
        /// Año
        /// </summary>
        public string Anio { get; set; }
        /// <summary>
        /// Mes
        /// </summary>
        public string Mes { get; set; }
        /// <summary>
        /// Sub Tipo
        /// </summary>
        public string CodigoSubTipoPeriodicidad { get; set; }
        /// <summary>
        /// Sub Tipo
        /// </summary>
        public string DescripcionSubTipoPeriodicidad { get; set; }
        /// <summary>
        /// Valor Valor
        /// </summary>
        public decimal? ValorReal { get; set; }

        public int? Permiso { get; set; }
    }
}
