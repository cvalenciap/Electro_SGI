using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.Repository.Base;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Query.Seguridad
{
    public class SistemaLogicRepository : QueryRepository<SistemaLogic>, ISistemaLogicRepository
    {
        public List<SistemaLogic> Buscar(
            int codigoSistema,
            string nombre,
            string descripcion,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        )
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.Int) { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("NOMBRE", SqlDbType.VarChar) { Value = (object)nombre ?? DBNull.Value },
                new SqlParameter("DESCRIPCION", SqlDbType.VarChar) { Value = (object)descripcion ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char) { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO_DESCRIPCION", SqlDbType.Char) { Value = (object)estadoRegistroDescripcion ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.Int) { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.Int) { Value = (object)tamanioPagina ?? DBNull.Value },
            };

            List<SistemaLogic> resultado = dataBaseProvider.ExecuteStoreProcedure<SistemaLogic>("SEG.USP_SISTEMA_SEL", parametros).ToList();

            return resultado;
        }

        public SistemaLogic Obtener(float codigo)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.BigInt)         { Value = (object)codigo ?? DBNull.Value },
            };

            SistemaLogic resultado = this.dataBaseProvider.ExecuteStoreProcedure<SistemaLogic>("SEG.USP_SISTEMA_OBTENER", parametros).FirstOrDefault();

            return resultado;
        }

        public List<SistemaLogic> Listar()
        {
            List<SistemaLogic> resultado = this.dataBaseProvider.ExecuteStoreProcedure<SistemaLogic>("SEG.USP_SISTEMA_LISTAR").ToList();

            return resultado;
        }
    }
}
