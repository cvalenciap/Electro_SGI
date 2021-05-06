using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Mantenimiento
{
    /// <summary>
    /// Implementación del Adaptador de Área
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public sealed class ResponsableAdapter
    {
        /// <summary>
        /// Realiza la adaptación de campos para la búsqueda
        /// </summary>
        /// <param name="ResponsableLogic">Entidad Lógica de Área</param>
        /// <returns>Objeto Área Response con los datos de búsqueda</returns>
        public static ResponsableResponse ObtenerResponsablePaginado(ResponsableLogic responsableLogic)
        {
            ResponsableResponse responsableResponse = new ResponsableResponse();

            responsableResponse.CodigoResponsable = responsableLogic.CodigoResponsable;
            responsableResponse.Nombres = responsableLogic.Nombres;
            responsableResponse.ApellidoPaterno = responsableLogic.ApellidoPaterno;
            responsableResponse.ApellidoMaterno = responsableLogic.ApellidoMaterno;
            responsableResponse.NombreCompleto = responsableLogic.NombreCompleto;
            responsableResponse.CodigoGenero = responsableLogic.CodigoGenero;
            responsableResponse.NombreGenero = responsableLogic.NombreGenero;
            responsableResponse.CodigoCargo = responsableLogic.CodigoCargo;
            responsableResponse.NombreCargo = responsableLogic.NombreCargo;
            responsableResponse.CorreoElectronico = responsableLogic.CorreoElectronico;
            responsableResponse.CodigoTipoDocumento = responsableLogic.CodigoTipoDocumento;
            responsableResponse.NombreTipoDocumento = responsableLogic.NombreTipoDocumento;
            responsableResponse.NumeroDocumento = responsableLogic.NumeroDocumento;
            responsableResponse.EstadoRegistroDescripcion = responsableLogic.EstadoRegistroDescripcion;
            responsableResponse.EstadoRegistro = responsableLogic.EstadoRegistro;
            responsableResponse.NumeroFila = responsableLogic.NumeroRegistro;
            responsableResponse.FilasTotal = responsableLogic.TotalRegistro;

            return responsableResponse;
        }
    }
}
