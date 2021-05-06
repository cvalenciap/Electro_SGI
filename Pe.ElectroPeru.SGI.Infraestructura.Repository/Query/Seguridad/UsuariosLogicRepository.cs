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
    public class UsuariosLogicRepository : QueryRepository<UsuariosLogic>, IUsuariosLogicRepository
    {
        public List<UsuariosLogic> Buscar(
            int codigoUsuario,
            string nombre,
            string apellido,
            string numDocumentoIdentidad,
            string usuario,
            string nombreCargo,
            int codigoCargo,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        )
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_USUARIO", SqlDbType.Int) { Value = (object)codigoUsuario ?? DBNull.Value },
                new SqlParameter("NOMBRE", SqlDbType.VarChar) { Value = (object)nombre ?? DBNull.Value },
                new SqlParameter("APELLIDO", SqlDbType.VarChar) { Value = (object)apellido ?? DBNull.Value },
                new SqlParameter("NUM_DOCUMENTO_IDENTIDAD", SqlDbType.VarChar) { Value = (object)numDocumentoIdentidad ?? DBNull.Value },
                new SqlParameter("USUARIO", SqlDbType.VarChar) { Value = (object)usuario ?? DBNull.Value },
                new SqlParameter("NOMBRE_CARGO", SqlDbType.VarChar) { Value = (object)nombreCargo ?? DBNull.Value },
                new SqlParameter("CODIGO_CARGO", SqlDbType.Int) { Value = (object)codigoCargo ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char) { Value = (object)estadoRegistro ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO_DESCRIPCION", SqlDbType.Char) { Value = (object)estadoRegistroDescripcion ?? DBNull.Value },
                new SqlParameter("NUMERO_PAGINA", SqlDbType.Int) { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.Int) { Value = (object)tamanioPagina ?? DBNull.Value },
            };

            List<UsuariosLogic> resultado = dataBaseProvider.ExecuteStoreProcedure<UsuariosLogic>("SEG.USP_USUARIOS_SEL", parametros).ToList();

            return resultado;
        }

        public UsuariosLogic Obtener(int codigo, int codigoSistema)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_USUARIOS", SqlDbType.BigInt)         { Value = (object)codigo ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.BigInt)         { Value = (object)codigoSistema ?? DBNull.Value },
            };

            UsuariosLogic resultado = this.dataBaseProvider.ExecuteStoreProcedure<UsuariosLogic>("SEG.USP_USUARIO_OBTENER", parametros).FirstOrDefault();

            return resultado;
        }

        public List<UsuariosLogic> Listar()
        {
            List<UsuariosLogic> resultado = this.dataBaseProvider.ExecuteStoreProcedure<UsuariosLogic>("SEG.USP_USUARIOS_LISTAR").ToList();

            return resultado;
        }

        public UsuariosLogic Login(string usuario, string contrasena)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("USUARIO", SqlDbType.VarChar) { Value = (object)usuario ?? DBNull.Value },
                new SqlParameter("CONTRASENA", SqlDbType.VarChar) { Value = (object)contrasena ?? DBNull.Value },
            };

            UsuariosLogic resultado = this.dataBaseProvider.ExecuteStoreProcedure<UsuariosLogic>("SEG.USP_LOGIN", parametros).FirstOrDefault();

            return resultado;
        }

        public SistemaLogic Sistema_x_Token(string token, int codigo_usuario)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("TOKEN", SqlDbType.VarChar) { Value = (object)token ?? DBNull.Value },
                new SqlParameter("CODIGO_USUARIOS", SqlDbType.Int) { Value = (object)codigo_usuario ?? DBNull.Value },
            };

            SistemaLogic resultado = this.dataBaseProvider.ExecuteStoreProcedure<SistemaLogic>("SEG.USP_SISTEMA_X_TOKEN", parametros).FirstOrDefault();

            return resultado;
        }

        public List<OpcionLogic> Usuario_x_Sistema(string usuario, int codigo_sistema)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("USUARIO", SqlDbType.VarChar) { Value = (object)usuario ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.Int) { Value = (object)codigo_sistema ?? DBNull.Value },
            };
            List<OpcionLogic> resultado = this.dataBaseProvider.ExecuteStoreProcedure<OpcionLogic>("SEG.USP_USUARIO_X_SISTEMA", parametros).ToList();

            return resultado;
        }
    }
}
