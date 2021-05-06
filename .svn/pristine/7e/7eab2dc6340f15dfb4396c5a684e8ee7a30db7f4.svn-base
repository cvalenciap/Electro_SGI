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
    public class IndicadorLogicRepository : QueryRepository<IndicadorLogic>, IIndicadorLogicRepository
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
        public List<IndicadorLogic> BuscarIndicador(
            Guid? codigoIndicador,
            Guid? codigoArea,
            string descripcionIndicador,
            DateTime? fechaDesde,
            DateTime? fechaHasta,
            int? codigoTipoIndicador,   
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_INDICADOR", SqlDbType.UniqueIdentifier)        { Value = (object)codigoIndicador ?? DBNull.Value },                
                new SqlParameter("CODIGO_AREA", SqlDbType.UniqueIdentifier)             { Value = (object)codigoArea ?? DBNull.Value },
                new SqlParameter("DESCRIPCION_INDICADOR", SqlDbType.VarChar)            { Value = (object)descripcionIndicador ?? DBNull.Value },
                new SqlParameter("FECHA_DESDE", SqlDbType.DateTime)                     { Value = (object)fechaDesde ?? DBNull.Value },                                                
                new SqlParameter("FECHA_HASTA", SqlDbType.DateTime)                     { Value = (object)fechaHasta ?? DBNull.Value },                                                                
                new SqlParameter("CODIGO_TIPO_INDICADOR", SqlDbType.Int)                { Value = (object)codigoTipoIndicador ?? DBNull.Value },                                                                
                new SqlParameter("CODIGO_EMPRESA_SISTEMA", SqlDbType.UniqueIdentifier)  { Value = (object)codigoEmpresaSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)          { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.VarChar)                    { Value = (object)codigoIdioma ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char)                     { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.BigInt)                     { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.BigInt)                    { Value = (object)tamanioPagina ?? DBNull.Value },
            };

            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<IndicadorLogic>("MNT.USP_INDICADOR_SEL", parametros).ToList();
            return resultado;
        }
    }
}
