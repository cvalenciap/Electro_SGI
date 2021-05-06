using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantenimiento;
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
    /// Repositorio de Responsable
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class ResponsableLogicRepository : QueryRepositoryLogic<ResponsableLogic>, IResponsableLogicRepository
    {
        /// <summary>
        /// Permite la búsqueda de Responsablees
        /// </summary>
        /// <param name="codigoResponsable">Código de Responsable</param>
        /// <param name="nombres">Nombre de Responsable</param>
        /// <param name="apellidoPaterno">Apellido Paterno</param>
        /// <param name="apellidoMaterno">Apellido Materno</param>
        /// <param name="nombreCompleto">Nombre Completo de Responsable</param>
        /// <param name="nombrePuestoTrabajo">Nombre Puesto Trabajo</param>
        /// <param name="codigoTipoDocumento">Código de Tipo de Documento</param>
        /// <param name="numeroDocumento">Número de Documento</param>
        /// <param name="codigoEmpresa">Código de Empresa</param>
        /// <param name="codigoProyecto">Código de Proyecto</param>
        /// <param name="codigoUsuarioRed">Código de Usuario de Red</param>
        /// <param name="codigoEmpresaSistema">Código de Empresa del Sistema</param>
        /// <param name="codigoSistema">Código de Sistema</param>
        /// <param name="codigoIdioma">Código de Idioma</param>
        /// <param name="estadoRegistro">Estado de Registro</param>
        /// <param name="codigoResponsableLogin">Código de Responsable logueado</param>
        /// <param name="numeroPagina">Número de Página</param>
        /// <param name="tamanioPagina">Tamaño de Página</param>
        /// <returns>Lista de Responsablees</returns>
        public List<ResponsableLogic> BuscarResponsable(
            Guid? codigoResponsable,
            string nombres,
            string apellidoPaterno,
            string apellidoMaterno,
            string nombreCompleto,
            int? codigoGenero,           
            int? codigoCargo,           
            string correoElectronico,
            int? codigoTipoDocumento,
            string numeroDocumento,
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina)
        {
            SqlParameter[] parametros = new SqlParameter[]
            {   
                new SqlParameter("CODIGO_RESPONSABLE", SqlDbType.UniqueIdentifier)      { Value = (object)codigoResponsable ?? DBNull.Value },
                new SqlParameter("NOMBRES", SqlDbType.VarChar)                          { Value = (object)nombres ?? DBNull.Value },
                new SqlParameter("APELLIDO_PATERNO", SqlDbType.VarChar)                 { Value = (object)apellidoPaterno ?? DBNull.Value },
                new SqlParameter("APELLIDO_MATERNO", SqlDbType.VarChar)                 { Value = (object)apellidoMaterno ?? DBNull.Value },
                new SqlParameter("NOMBRE_COMPLETO", SqlDbType.VarChar)                  { Value = (object)nombreCompleto ?? DBNull.Value },
                new SqlParameter("CODIGO_GENERO", SqlDbType.Int)                        { Value = (object)codigoGenero ?? DBNull.Value },                
                new SqlParameter("CODIGO_CARGO", SqlDbType.Int)                         { Value = (object)codigoCargo ?? DBNull.Value },                
                new SqlParameter("CORREO_ELECTRONICO", SqlDbType.VarChar)               { Value = (object)correoElectronico ?? DBNull.Value },
                new SqlParameter("CODIGO_TIPO_DOCUMENTO", SqlDbType.Int)                { Value = (object)codigoTipoDocumento ?? DBNull.Value },
                new SqlParameter("NUMERO_DOCUMENTO", SqlDbType.VarChar)                 { Value = (object)numeroDocumento ?? DBNull.Value },                
                new SqlParameter("CODIGO_EMPRESA_SISTEMA", SqlDbType.UniqueIdentifier)  { Value = (object)codigoEmpresaSistema?? DBNull.Value },
                new SqlParameter("CODIGO_SISTEMA", SqlDbType.UniqueIdentifier)          { Value = (object)codigoSistema ?? DBNull.Value },               
                new SqlParameter("CODIGO_IDIOMA", SqlDbType.VarChar)                    { Value = (object)codigoIdioma ?? DBNull.Value },
                new SqlParameter("ESTADO_REGISTRO", SqlDbType.Char)                     { Value = (object)estadoRegistro ?? DBNull.Value },              
                new SqlParameter("NUMERO_PAGINA", SqlDbType.BigInt)                     { Value = (object)numeroPagina ?? DBNull.Value },
                new SqlParameter("TAMANIO_PAGINA", SqlDbType.BigInt)                    { Value = (object)tamanioPagina ?? DBNull.Value }
            };

            var resultado = this.dataBaseProvider.ExecuteStoreProcedure<ResponsableLogic>("MNT.USP_RESPONSABLE_SEL", parametros).ToList();
            return resultado;
        }
    }
}
