using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantimiento
{
    /// <summary>
    /// Interface del repositorio logic de Área
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public interface IAreaLogicRepository : IQueryRepository<AreaLogic>
    {
        /// <summary>
        /// Permite la búsqueda de Áreas
        /// </summary>
        /// <param name="codigoArea">Código de Área</param>
        /// <param name="nombreResponsable">Nombre del Responsable</param>  
        /// <param name="nombreArea">Nombre de Área</param>        
        /// <param name="codigoIdioma">Código del Idioma</param>
        /// <param name="estadoRegistro">Estado de Registro</param>
        /// <param name="numeroPagina">Número de Página</param>
        /// <param name="tamanioPagina">Tamaño de Página</param>
        /// <returns>Lista de Áreas</returns>
        List<AreaLogic> BuscarArea(
            Guid? codigoArea,           
            string nombreResponsable,           
            string nombreArea,           
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina);
    }
}
