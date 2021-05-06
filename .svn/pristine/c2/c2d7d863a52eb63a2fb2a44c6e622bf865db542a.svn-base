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
    /// Interface del repositorio logic de AccionEstrategicaInstitucional
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 29112017 <br />   
    /// </remarks>
    public interface IAccionEstrategicaInstitucionalDetalleLogicRepository : IQueryRepositoryLogic<AccionEstrategicaInstitucionalDetalleLogic>
    {
        /// <summary>
        /// Permite la búsqueda de los registros de AccionEstrategicaInstitucional
        /// </summary>
        List<AccionEstrategicaInstitucionalDetalleLogic> BuscarAccionEstrategicaInstitucionalDetalle(
            Guid? codigoAccionEstrategicaInstitucionalDetalle,
            Guid? codigoAccionEstrategicaInstitucional,            
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina);
    }
}
