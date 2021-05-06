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
    /// Interface del repositorio logic de ObjetivoEstrategicoSectorial
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 29112017 <br />   
    /// </remarks>
    public interface IIndicadorMetaAnualLogicRepository : IQueryRepositoryLogic<IndicadorMetaAnualLogic>
    {
        /// <summary>
        /// Permite la búsqueda de los registros de ObjetivoEstrategicoSectorial
        /// </summary>
        List<IndicadorMetaAnualLogic> BuscarIndicadorMetaAnual(
            Guid? codigoIndicadorMetaAnual,
            Guid? codigoIndicador,
            string Anio,            
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina);
    }
}
