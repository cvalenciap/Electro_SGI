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
    public class PermisosLogicRepository : QueryRepository<PermisosLogic>, IPermisosLogicRepository
    {
        public List<PermisosLogic> Buscar(
            int codigoPermisos,
            int codigoPerfil,
            int codigoAccion,
            int codigoOpcion,
            string perfil,
            string accion,
            string opcion,
            string estadoPermiso,
            string estadoRegistro,            
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        )
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_PERMISOS", SqlDbType.Int) { Value = (object)codigoPermisos ?? DBNull.Value },
                new SqlParameter("CODIGO_PERFIL", SqlDbType.Int) { Value = (object)codigoPerfil ?? DBNull.Value },
                new SqlParameter("CODIGO_ACCION", SqlDbType.Int) { Value = (object)codigoAccion ?? DBNull.Value },
                new SqlParameter("CODIGO_OPCION", SqlDbType.Int) { Value = (object)codigoOpcion ?? DBNull.Value },
                new SqlParameter("PERFIL", SqlDbType.VarChar) { Value = (object)perfil ?? DBNull.Value },
                new SqlParameter("ACCION", SqlDbType.VarChar) { Value = (object)accion ?? DBNull.Value },
                new SqlParameter("OPCION", SqlDbType.VarChar) { Value = (object)opcion ?? DBNull.Value },
                new SqlParameter("ESTADO_PERMISO", SqlDbType.Char) { Value = (object)estadoPermiso ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char) { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO_DESCRIPCION", SqlDbType.Char) { Value = (object)estadoRegistroDescripcion ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.Int) { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.Int) { Value = (object)tamanioPagina ?? DBNull.Value },
            };

            List<PermisosLogic> resultado = dataBaseProvider.ExecuteStoreProcedure<PermisosLogic>("SEG.USP_PERMISOS_SEL", parametros).ToList();

            return resultado;
        }

        public PermisosLogic Obtener(float codigo)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_PERMISOS", SqlDbType.BigInt)         { Value = (object)codigo ?? DBNull.Value },                
            };

            PermisosLogic resultado = this.dataBaseProvider.ExecuteStoreProcedure<PermisosLogic>("SEG.USP_PERMISOS_OBTENER", parametros).FirstOrDefault();

            return resultado;
        }

        public List<PermisosLogic> Listar()
        {
            List<PermisosLogic> resultado = this.dataBaseProvider.ExecuteStoreProcedure<PermisosLogic>("SEG.USP_PERMISOS_LISTAR").ToList();

            return resultado;
        }
    }
}
