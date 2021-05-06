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
    public class PerfilLogicRepository : QueryRepository<PerfilLogic>, IPerfilLogicRepository
    {
        public List<PerfilLogic> Buscar(
            int codigoPerfil,
            int codigoSistema,
            string sistema,
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
                new SqlParameter("CODIGO_PERFIL", SqlDbType.Int) { Value = (object)codigoPerfil ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.Int) { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("SISTEMA", SqlDbType.VarChar) { Value = (object)sistema ?? DBNull.Value },
                new SqlParameter("NOMBRE", SqlDbType.VarChar) { Value = (object)nombre ?? DBNull.Value },
                new SqlParameter("DESCRIPCION", SqlDbType.VarChar) { Value = (object)descripcion ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char) { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO_DESCRIPCION", SqlDbType.Char) { Value = (object)estadoRegistroDescripcion ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.Int) { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.Int) { Value = (object)tamanioPagina ?? DBNull.Value },
            };

            List<PerfilLogic> resultado = dataBaseProvider.ExecuteStoreProcedure<PerfilLogic>("SEG.USP_PERFIL_SEL", parametros).ToList();

            return resultado;
        }

        public PerfilLogic Obtener(float codigo)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_PERFIL", SqlDbType.Int) { Value = (object)codigo ?? DBNull.Value },
            };

            PerfilLogic resultado = this.dataBaseProvider.ExecuteStoreProcedure<PerfilLogic>("SEG.USP_PERFIL_OBTENER", parametros).FirstOrDefault();

            return resultado;
        }

        public List<PerfilLogic> Listar()
        {
            List<PerfilLogic> resultado = this.dataBaseProvider.ExecuteStoreProcedure<PerfilLogic>("SEG.USP_PERFIL_LISTAR").ToList();

            return resultado;
        }
    }
}
