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
    public sealed class AreaAdapter
    {
        /// <summary>
        /// Realiza la adaptación de campos para la búsqueda
        /// </summary>
        /// <param name="areaLogic">Entidad Lógica de Área</param>
        /// <returns>Objeto Área Response con los datos de búsqueda</returns>
        public static AreaResponse ObtenerAreaPaginado(AreaLogic areaLogic)
        {
            AreaResponse areaResponse = new AreaResponse();

            areaResponse.CodigoArea = areaLogic.CodigoArea;           
            areaResponse.NombreArea = areaLogic.NombreArea;            
            areaResponse.CodigoResponsable = areaLogic.CodigoResponsable;
            areaResponse.NombreResponsable = areaLogic.NombreResponsable;
            areaResponse.EstadoRegistroDescripcion = areaLogic.EstadoRegistroDescripcion;
            areaResponse.EstadoRegistro = areaLogic.EstadoRegistro;
            areaResponse.NumeroFila = areaLogic.NumeroRegistro;
            areaResponse.FilasTotal = areaLogic.TotalRegistro;

            return areaResponse;
        }
    }
}
