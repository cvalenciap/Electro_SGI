using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantimiento;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.Repository.Base;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Query.Mantenimiento
{
    /// <summary>
    /// Repositorio de Área
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class AreaLogicRepository : QueryRepository<AreaLogic>, IAreaLogicRepository
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
        public List<AreaLogic> BuscarArea(
             Guid? codigoArea,             
            string nombreResponsable,           
            string nombreArea,           
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_AREA", SqlDbType.UniqueIdentifier)         { Value = (object)codigoArea ?? DBNull.Value },                
                new SqlParameter("NOMBRE_AREA", SqlDbType.NVarChar)                 { Value = (object)nombreArea ?? DBNull.Value },
                new SqlParameter("NOMBRE_COMPLETO_RESPONSABLE", SqlDbType.VarChar)  { Value = (object)nombreResponsable ?? DBNull.Value },                                                
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.VarChar)                { Value = (object)codigoIdioma ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char)                 { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.BigInt)                 { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.BigInt)                { Value = (object)tamanioPagina ?? DBNull.Value },
            };

            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<AreaLogic>("MNT.USP_AREA_SEL", parametros).ToList();
            return resultado;
        }
    }
}
