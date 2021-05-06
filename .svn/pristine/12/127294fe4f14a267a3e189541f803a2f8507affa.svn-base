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
    public class AsignacionLogicRepository : QueryRepository<AsignacionLogic>, IAsignacionLogicRepository
    {
        public List<AsignacionLogic> Buscar(
            int codigoAsignacion,
            int codigoSistema,
            int codigoUsuario,
            int codigoPerfil,
            string sistema,
            string usuario,
            string perfil,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        )
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_ASIGNACION", SqlDbType.Int) { Value = (object)codigoAsignacion ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.Int) { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_USUARIO", SqlDbType.Int) { Value = (object)codigoUsuario ?? DBNull.Value },
                new SqlParameter("CODIGO_PERFIL", SqlDbType.Int) { Value = (object)codigoPerfil ?? DBNull.Value },
                new SqlParameter("SISTEMA", SqlDbType.VarChar) { Value = (object)sistema ?? DBNull.Value },
                new SqlParameter("USUARIO", SqlDbType.VarChar) { Value = (object)usuario ?? DBNull.Value },
                new SqlParameter("PERFIL", SqlDbType.VarChar) { Value = (object)perfil ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char) { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO_DESCRIPCION", SqlDbType.Char) { Value = (object)estadoRegistroDescripcion ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.Int) { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.Int) { Value = (object)tamanioPagina ?? DBNull.Value },
            };

            List<AsignacionLogic> resultado = dataBaseProvider.ExecuteStoreProcedure<AsignacionLogic>("SEG.USP_ASIGNACION_SEL", parametros).ToList();

            return resultado;
        }

        public AsignacionLogic Obtener(float codigo)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_ASIGNACION", SqlDbType.BigInt) { Value = (object)codigo ?? DBNull.Value },
            };

            AsignacionLogic resultado = this.dataBaseProvider.ExecuteStoreProcedure<AsignacionLogic>("SEG.USP_ASIGNACION_OBTENER", parametros).FirstOrDefault();

            return resultado;
        }

        public List<AsignacionLogic> Listar()
        {
            List<AsignacionLogic> resultado = this.dataBaseProvider.ExecuteStoreProcedure<AsignacionLogic>("SEG.USP_ASIGNACION_LISTAR").ToList();

            return resultado;
        }
    }
}
