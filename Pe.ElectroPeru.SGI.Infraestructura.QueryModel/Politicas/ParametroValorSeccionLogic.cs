using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Politicas
{
    /// <summary>
    /// Representa los datos de Parametro de Valor
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 27032015 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class ParametroValorSeccionLogic : Logic
    {
        /// <summary>
        /// Estadro de Registro
        /// </summary>
        public List<ParametroSeccionLogic> ListadoSeccionValor { get; set; }

        /// <summary>
        /// Estadro de Registro
        /// </summary>
        public List<ParametroValorLogic> ListadoValorRelacionado { get; set; }

        /// <summary>
        /// Estadro de Registro
        /// </summary>
        public List<ParametroValorLogic> ListadoValor { get; set; }
    }
}
