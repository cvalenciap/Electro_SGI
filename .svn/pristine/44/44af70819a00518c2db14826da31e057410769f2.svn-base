using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Politicas;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Politicas;
using Pe.ElectroPeru.SGI.Infraestructura.Repository.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Base;
using System.Data.Entity.Infrastructure;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Query.Politicas
{
    /// <summary>
    /// Implementación del repositorio de Parametro Valor
    /// </summary>
    /// <remarks>
    /// Creación:   GMD <br />
    /// Modificación:            <br />
    /// </remarks>
    public class ParametroValorLogicRepository : QueryRepositoryLogic<ParametroValorLogic>, IParametroValorLogicRepository
    {
        /// <summary>
        /// Entorno de Aplicación Actual
        /// </summary>
        public IEntornoActualAplicacion entornoActualAplicacion { get; set; }

        /// <summary>
        /// Realiza la busqueda de Parametro Valor
        /// </summary>
        /// <param name="codigoParametro">Código de Parametro</param>
        /// <param name="indicadorEmpresa">Indicador Empresa</param>
        /// <param name="codigoEmpresa">Código de Empresa</param>
        /// <param name="codigoSistema">Código de Sistema</param>
        /// <param name="codigoIdentificador">Código Identificador</param>
        /// <param name="tipoParametro">Tipo de Parámetro</param>
        /// <param name="codigoSeccion">Código de Sección</param>
        /// <param name="codigoValor">Código de Valor</param>
        /// <param name="valor">Valor</param>
        /// <param name="estadoRegistro">Estado de Registro</param>
        /// <returns>Lista de valores de parametro</returns>
        public List<ParametroValorLogic> BuscarParametroValor(int? codigoParametro, bool? indicadorEmpresa, Guid? codigoEmpresa, Guid? codigoSistema, string codigoIdentificador, string tipoParametro, int? codigoSeccion, int? codigoValor, string valor, string estadoRegistro)
        {

            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_PARAMETRO", SqlDbType.Int)             { Value = (object)codigoParametro ?? DBNull.Value },
                new SqlParameter("INDICADOR_EMPRESA", SqlDbType.Bit)            { Value = (object)indicadorEmpresa ?? DBNull.Value },
                new SqlParameter("CODIGO_EMPRESA", SqlDbType.UniqueIdentifier)  { Value = (object)codigoEmpresa ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)  { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_IDENTIFICADOR", SqlDbType.VarChar)     { Value = (object)codigoIdentificador ?? DBNull.Value },                
                new SqlParameter("TIPO_PARAMETRO", SqlDbType.Char)              { Value = (object)tipoParametro ?? DBNull.Value },
                new SqlParameter("CODIGO_SECCION", SqlDbType.Int)               { Value = (object)codigoSeccion ?? DBNull.Value },
                new SqlParameter("CODIGO_VALOR", SqlDbType.Int)                 { Value = (object)codigoValor ?? DBNull.Value },
                new SqlParameter("VALOR", SqlDbType.VarChar)                    { Value = (object)valor ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char)             { Value = (object)estadoRegistro ?? DBNull.Value }
            };
            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<ParametroValorLogic>("POL.USP_PARAMETRO_VALOR_SEL", parametros).ToList();

            return resultado;
        }


        
        /// <summary>
        /// Realiza la busqueda de Parametro Valor
        /// </summary>
        /// <param name="codigoParametro">Código de Parametro</param>
        /// <param name="indicadorEmpresa">Indicador de Global</param>
        /// <param name="codigoEmpresa">Código de Empresa</param>
        /// <param name="codigoSistema">Código de Sistema</param>
        /// <param name="codigoIdentificador">Código Identificador</param>
        /// <param name="tipoParametro">Tipo de Parámetro</param>
        /// <param name="codigoSeccion">Código de Sección</param>
        /// <param name="codigoValor">Código de Valor</param>
        /// <param name="valor">Valor</param>
        /// <param name="estadoRegistro">Estado de Registro</param>
        /// <returns>Lista de valores de parametro</returns>
        public ParametroValorSeccionLogic BuscarParametroValorSeccion(int? codigoParametro, bool? indicadorEmpresa, Guid? codigoEmpresa, Guid? codigoSistema, string codigoIdentificador, string tipoParametro, int? codigoSeccion, int? codigoValor, string valor, string estadoRegistro)
        {
            ParametroValorSeccionLogic oParametroValorSeccionLogic = new ParametroValorSeccionLogic();
            List<ParametroValorLogic> resultado = new List<ParametroValorLogic>();
            List<ParametroSeccionLogic> seccion = new List<ParametroSeccionLogic>();
            List<ParametroValorLogic> valorRelacionado = new List<ParametroValorLogic>();
            oParametroValorSeccionLogic.ListadoSeccionValor = new List<ParametroSeccionLogic>();
            oParametroValorSeccionLogic.ListadoValorRelacionado = new List<ParametroValorLogic>();
            oParametroValorSeccionLogic.ListadoValor = new List<ParametroValorLogic>();
            try
            {
                SqlParameter[] parametros = new SqlParameter[]
                {
                    new SqlParameter("CODIGO_PARAMETRO", SqlDbType.Int)             { Value = (object)codigoParametro ?? DBNull.Value },
                    new SqlParameter("INDICADOR_EMPRESA", SqlDbType.Bit)            { Value = (object)indicadorEmpresa ?? DBNull.Value },
                    new SqlParameter("CODIGO_EMPRESA", SqlDbType.UniqueIdentifier)  { Value = (object)codigoEmpresa ?? DBNull.Value },
                    new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)  { Value = (object)codigoSistema ?? DBNull.Value },
                    new SqlParameter("CODIGO_IDENTIFICADOR", SqlDbType.NVarChar)    { Value = (object)codigoIdentificador ?? DBNull.Value },                
                    new SqlParameter("TIPO_PARAMETRO", SqlDbType.Char)              { Value = (object)tipoParametro ?? DBNull.Value },
                    new SqlParameter("CODIGO_SECCION", SqlDbType.Int)               { Value = (object)codigoSeccion ?? DBNull.Value },
                    new SqlParameter("CODIGO_VALOR", SqlDbType.Int)                 { Value = (object)codigoValor ?? DBNull.Value },
                    new SqlParameter("VALOR", SqlDbType.VarChar)                    { Value = (object)valor ?? DBNull.Value },
                    new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char)             { Value = (object)estadoRegistro ?? DBNull.Value }
                };
                var command = this.dataBaseProvider.DataBase.Connection.CreateCommand();
                command.CommandText = "[POL].[USP_PARAMETRO_VALOR_PARAMETRO_SECCION_TODOS]";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddRange(parametros);

                this.dataBaseProvider.DataBase.Connection.Open();
                var reader = command.ExecuteReader();
                resultado = ((IObjectContextAdapter)this.dataBaseProvider).ObjectContext.Translate<ParametroValorLogic>(reader).ToList();
                reader.NextResult();
                seccion = ((IObjectContextAdapter)this.dataBaseProvider).ObjectContext.Translate<ParametroSeccionLogic>(reader).ToList();
                reader.NextResult();
                valorRelacionado = ((IObjectContextAdapter)this.dataBaseProvider).ObjectContext.Translate<ParametroValorLogic>(reader).ToList();
                if (resultado != null)
                {
                    oParametroValorSeccionLogic.ListadoValor= resultado;
                    if (seccion != null)
                    {
                        oParametroValorSeccionLogic.ListadoSeccionValor= seccion;
                        if (valorRelacionado != null)
                        {
                            oParametroValorSeccionLogic.ListadoValorRelacionado = valorRelacionado;
                        }
                    }
                }
                else
                {
                    oParametroValorSeccionLogic = new ParametroValorSeccionLogic();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                this.dataBaseProvider.DataBase.Connection.Close();
            }
            return oParametroValorSeccionLogic;
        }


        /// <summary>
        /// Realiza la búsqueda de Valores de las Secciones de un Parámetro
        /// </summary>
        /// <param name="codigoEmpresa">Código de Empresa</param>
        /// <param name="indicadorEmpresa">Indicador de Empresa</param>
        /// <param name="codigoSistema">Código de Sistema</param>
        /// <param name="codigoIdentificadorParametro">Código de Identificador de Parámetro</param>
        /// <param name="codigoIdioma">Código de Idioma</param>
        /// <returns>Lista de Valores de las Secciones de un Parámetro</returns>
        public List<ParametroValorLogic> BuscarValorPorSeccionParametro(
            Guid codigoEmpresa,
            bool indicadorEmpresa,
            Guid codigoSistema,
            string codigoIdentificadorParametro,
            string codigoIdioma)
        {

            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_EMPRESA", SqlDbType.UniqueIdentifier)          { Value = (object)codigoEmpresa ?? DBNull.Value },
                new SqlParameter("INDICADOR_EMPRESA", SqlDbType.Bit)                    { Value = (object)indicadorEmpresa ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)          { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_IDENTIFICADOR_PARAMETRO", SqlDbType.NVarChar)  { Value = (object)codigoIdentificadorParametro ?? DBNull.Value },
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.NVarChar)                   { Value = (object)codigoIdioma ?? DBNull.Value },                
            };

            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<ParametroValorLogic>("PUB.USP_PARAMETRO_VALOR_VALOR_POR_SECCION_SEL", parametros).ToList();
            return resultado;
        }

        /// <summary>
        /// Realiza la búsqueda de Valores de las Secciones Adicionales de un Parámetro
        /// </summary>
        /// <param name="codigoEmpresa">Código de Empresa</param>
        /// <param name="indicadorEmpresa">Indicador de Empresa</param>
        /// <param name="codigoSistema">Código de Sistema</param>
        /// <param name="codigoIdentificadorParametro">Código de Identificador de Parámetro</param>
        /// <param name="codigoIdioma">Código de Idioma</param>
        /// <returns>Lista de Valores de las Secciones Adicionales de un Parámetro</returns>
        public List<ParametroValorLogic> BuscarValorSeccionAdicionalParametro(
            Guid codigoEmpresa,
            bool indicadorEmpresa,
            Guid codigoSistema,
            string codigoIdentificadorParametro,
            string codigoIdioma)
        {

            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_EMPRESA", SqlDbType.UniqueIdentifier)          { Value = (object)codigoEmpresa ?? DBNull.Value },
                new SqlParameter("INDICADOR_EMPRESA", SqlDbType.Bit)                    { Value = (object)indicadorEmpresa ?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)          { Value = (object)codigoSistema ?? DBNull.Value },
                new SqlParameter("CODIGO_IDENTIFICADOR_PARAMETRO", SqlDbType.NVarChar)  { Value = (object)codigoIdentificadorParametro ?? DBNull.Value },
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.NVarChar)                   { Value = (object)codigoIdioma ?? DBNull.Value },                
            };

            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<ParametroValorLogic>("POL.USP_PARAMETRO_VALOR_SECCION_ADICIONAL_SEL", parametros).ToList();
            return resultado;
        }

        /// <summary>
        /// Realiza el registro de un parametro valor
        /// </summary>
        /// <param name="parametroValorLogic">Entidad logica de parametro valor</param>
        /// <returns>Cantidad de registros registrados</returns>
        public int RegistrarParametroValor(ParametroValorLogic parametroValorLogic)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_PARAMETRO", SqlDbType.Int)             { Value = parametroValorLogic.CodigoParametro },                             
                new SqlParameter("CODIGO_SECCION", SqlDbType.Int)               { Value = parametroValorLogic.CodigoSeccion },
                new SqlParameter("CODIGO_VALOR", SqlDbType.Int)                 { Value = parametroValorLogic.CodigoValor },
                new SqlParameter("VALOR", SqlDbType.NVarChar)                   { Value = parametroValorLogic.Valor },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char)             { Value = parametroValorLogic.EstadoRegistro },
                new SqlParameter("USUARIO_CREACION", SqlDbType.NVarChar)        { Value = entornoActualAplicacion.UsuarioSession },
                new SqlParameter("TERMINAL_CREACION", SqlDbType.NVarChar)       { Value = entornoActualAplicacion.Terminal }
            };
            var resultado = this.dataBaseProvider.ExecuteStoreProcedureNonQuery("POL.USP_PARAMETRO_VALOR_INS", parametros);

            return resultado;
        }

        /// <summary>
        /// Realiza la modificación de un parametro valor
        /// </summary>
        /// <param name="parametroValorLogic">Entidad logica de parametro valor</param>
        /// <returns>Cantidad de registros modificados</returns>
        public int ModificarParametroValor(ParametroValorLogic parametroValorLogic)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("CODIGO_PARAMETRO", SqlDbType.Int)             { Value = parametroValorLogic.CodigoParametro },                             
                new SqlParameter("CODIGO_SECCION", SqlDbType.Int)               { Value = parametroValorLogic.CodigoSeccion },
                new SqlParameter("CODIGO_VALOR", SqlDbType.Int)                 { Value = parametroValorLogic.CodigoValor },
                new SqlParameter("VALOR", SqlDbType.NVarChar)                   { Value = (object) parametroValorLogic.Valor ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char)             { Value = (object) parametroValorLogic.EstadoRegistro ?? DBNull.Value },
                new SqlParameter("USUARIO_MODIFICACION", SqlDbType.NVarChar)    { Value = entornoActualAplicacion.UsuarioSession },
                new SqlParameter("TERMINAL_MODIFICACION", SqlDbType.NVarChar)   { Value = entornoActualAplicacion.Terminal }
            };
            var resultado = this.dataBaseProvider.ExecuteStoreProcedureNonQuery("POL.USP_PARAMETRO_VALOR_UPD", parametros);

            return resultado;
        }
    }
}