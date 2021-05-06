using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class VariableValorRequest : BaseRequest
    {
        /// <summary>
        /// Codigo Variable Meta
        /// </summary>
        public Guid? CodigoVariableValor { get; set; }
        /// <summary>
        /// Codigo Variable
        /// </summary>
        public Guid CodigoVariable { get; set; }
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
        /// Valor Meta
        /// </summary>
        public decimal? Valor { get; set; }

        /// <summary>
        /// Código del idioma
        /// </summary>
        public string CodigoIdioma { get; set; }
    }
}
