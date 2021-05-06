using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantenimiento
{
    /// <summary>
    /// Interface del repositorio logic de Responsable
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public interface IResponsableLogicRepository : IQueryRepositoryLogic<ResponsableLogic>
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
        List<ResponsableLogic> BuscarResponsable(
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
            long tamanioPagina);
    }
}
