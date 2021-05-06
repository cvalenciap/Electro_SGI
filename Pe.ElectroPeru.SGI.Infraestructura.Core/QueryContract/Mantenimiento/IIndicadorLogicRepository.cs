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
    public interface IIndicadorLogicRepository : IQueryRepository<IndicadorLogic>
    {
        /// <summary>
        /// Permite la búsqueda de Áreas
        /// </summary>
        /// <param name="codigoIndicador">Código de Área</param>
        /// <param name="nombreResponsable">Nombre del Responsable</param>  
        /// <param name="nombreIndicador">Nombre de Área</param>        
        /// <param name="codigoIdioma">Código del Idioma</param>
        /// <param name="estadoRegistro">Estado de Registro</param>
        /// <param name="numeroPagina">Número de Página</param>
        /// <param name="tamanioPagina">Tamaño de Página</param>
        /// <returns>Lista de Áreas</returns>
        List<IndicadorLogic> BuscarIndicador(
            Guid? codigoIndicador,
            Guid? codigoArea,   
            string descripcionIndicador,
            DateTime? fechaDesde,
            DateTime? fechaHesde,      
            int? codigoTipoIndicador,    
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina);
    }
}
