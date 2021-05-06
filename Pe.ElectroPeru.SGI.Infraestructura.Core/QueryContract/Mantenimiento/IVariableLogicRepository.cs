using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantenimiento
{
    /// <summary>
    /// Interface del repositorio logic de Variable
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 29112017 <br />   
    /// </remarks>
    public interface IVariableLogicRepository : IQueryRepositoryLogic<VariableLogic>
    {
        /// <summary>
        /// Permite la búsqueda de los registros de Variable
        /// </summary>
        List<VariableDetalleLogic> BuscarVariable(
            Guid? codigoVariable,
            string nombreVariable,
            string nombreSiglaVariable,
            DateTime? fechaInicioVigencia,
            DateTime? fechaFinVigencia,
            Guid? codigoArea,
            int? codigoPeriodicidad,
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina);
    }
}
