using System;
using System.Collections.Generic;
using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Contractual;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Base
{
    /// <summary>
    /// Definición del Repositorio Proveedor
    /// </summary>
    public interface IProveedorRepository : IQueryRepository<ProveedorLogic>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="codigoIdentificacion">Código de identificación</param>
        /// <param name="nombre">Nombre</param>
        /// <param name="nombreComercial">Nombre de comercial</param>
        /// <param name="tipoDocumento">Tipo de documento</param>
        /// <param name="estadoRegistro">Estado de registro</param>
        /// <param name="usuarioCreacion">Usuario de creacion</param>
        /// <param name="fechaCreacion">Fecha de creación</param>
        /// <param name="terminalCreacion">Terminal de creación</param>
        /// <returns>Indicador con el resultado de la operacion</returns>
        int ExisteProveedor(
            string codigoIdentificacion,
            string nombre,
            string nombreComercial,
            string tipoDocumento,
            string estadoRegistro,
            string usuarioCreacion,
            DateTime fechaCreacion,
            string terminalCreacion
        );        




    }
}
