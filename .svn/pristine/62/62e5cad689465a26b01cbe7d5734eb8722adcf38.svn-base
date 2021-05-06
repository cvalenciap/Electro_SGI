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
    public class OpcionLogicRepository : QueryRepository<OpcionLogic>, IOpcionLogicRepository
    {
        public List<OpcionLogic> Buscar(
            int codigoOpcion,
            int codigoModulo,
            int opcionPadre,
            string opcionPadreNombre,
            string nombre,
            string descripcion,
            string controlador,
            string metodo,
            string area,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        )
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_OPCION", SqlDbType.Int) { Value = (object)codigoOpcion ?? DBNull.Value },
                new SqlParameter("CODIGO_MODULO", SqlDbType.Int) { Value = (object)codigoModulo ?? DBNull.Value },
                new SqlParameter("OPCION_PADRE", SqlDbType.Int) { Value = (object)opcionPadre ?? DBNull.Value },
                new SqlParameter("OPCION_PADRE_NOMBRE", SqlDbType.VarChar) { Value = (object)opcionPadreNombre ?? DBNull.Value },
                new SqlParameter("NOMBRE", SqlDbType.VarChar) { Value = (object)nombre ?? DBNull.Value },
                new SqlParameter("DESCRIPCION", SqlDbType.VarChar) { Value = (object)descripcion ?? DBNull.Value },
                new SqlParameter("CONTROLADOR", SqlDbType.VarChar) { Value = (object)controlador ?? DBNull.Value },
                new SqlParameter("METODO", SqlDbType.VarChar) { Value = (object)metodo ?? DBNull.Value },
                new SqlParameter("AREA", SqlDbType.VarChar) { Value = (object)area ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char) { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO_DESCRIPCION", SqlDbType.Char) { Value = (object)estadoRegistroDescripcion ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.Int) { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.Int) { Value = (object)tamanioPagina ?? DBNull.Value },
            };

            List<OpcionLogic> resultado = dataBaseProvider.ExecuteStoreProcedure<OpcionLogic>("SEG.USP_OPCION_SEL", parametros).ToList();

            return resultado;
        }

        public OpcionLogic Obtener(float codigo)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_OPCION", SqlDbType.BigInt)         { Value = (object)codigo ?? DBNull.Value },
            };

            OpcionLogic resultado = this.dataBaseProvider.ExecuteStoreProcedure<OpcionLogic>("SEG.USP_OPCION_OBTENER", parametros).FirstOrDefault();

            return resultado;
        }

        public List<OpcionLogic> Listar()
        {
            List<OpcionLogic> resultado = this.dataBaseProvider.ExecuteStoreProcedure<OpcionLogic>("SEG.USP_OPCION_LISTAR").ToList();

            return resultado;
        }
    }
}
