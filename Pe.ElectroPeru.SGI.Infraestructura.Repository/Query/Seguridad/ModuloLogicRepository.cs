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
    public class ModuloLogicRepository : QueryRepository<ModuloLogic>, IModuloLogicRepository
    {
        public List<ModuloLogic> Buscar(
            int codigoModulo,
            int codigoSistema,
            string nombre,
            string descripcion,
            int moduloPadre,
            string moduloPadreNombre,
            string controlador,
            string metodo,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        )
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_MODULO", SqlDbType.Int) { Value = (object)codigoModulo ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.Int) { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("NOMBRE", SqlDbType.VarChar) { Value = (object)nombre ?? DBNull.Value },
                new SqlParameter("DESCRIPCION", SqlDbType.VarChar) { Value = (object)descripcion ?? DBNull.Value },
                new SqlParameter("MODULO_PADRE", SqlDbType.Int) { Value = (object)moduloPadre ?? DBNull.Value },
                new SqlParameter("MODULO_PADRE_NOMBRE", SqlDbType.VarChar) { Value = (object)moduloPadreNombre ?? DBNull.Value },
                new SqlParameter("CONTROLADOR", SqlDbType.VarChar) { Value = (object)controlador ?? DBNull.Value },
                new SqlParameter("METODO", SqlDbType.VarChar) { Value = (object)metodo ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char) { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO_DESCRIPCION", SqlDbType.Char) { Value = (object)estadoRegistroDescripcion ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.Int) { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.Int) { Value = (object)tamanioPagina ?? DBNull.Value },
            };

            List<ModuloLogic> resultado = dataBaseProvider.ExecuteStoreProcedure<ModuloLogic>("SEG.USP_MODULO_SEL", parametros).ToList();

            return resultado;
        }

        public ModuloLogic Obtener(float codigo)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_MODULO", SqlDbType.BigInt)         { Value = (object)codigo ?? DBNull.Value },
            };

            ModuloLogic resultado = this.dataBaseProvider.ExecuteStoreProcedure<ModuloLogic>("SEG.USP_MODULO_OBTENER", parametros).FirstOrDefault();

            return resultado;
        }

        public List<ModuloLogic> Listar()
        {
            List<ModuloLogic> resultado = this.dataBaseProvider.ExecuteStoreProcedure<ModuloLogic>("SEG.USP_MODULO_LISTAR").ToList();

            return resultado;
        }
    }
}
