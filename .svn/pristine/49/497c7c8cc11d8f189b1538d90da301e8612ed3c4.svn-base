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
    public sealed class IndicadorAdapter
    {
        /// <summary>
        /// Realiza la adaptación de campos para la búsqueda
        /// </summary>
        /// <param name="IndicadorLogic">Entidad Lógica de Área</param>
        /// <returns>Objeto Área Response con los datos de búsqueda</returns>
        public static IndicadorResponse ObtenerIndicadorPaginado(IndicadorLogic IndicadorLogic)
        {
            IndicadorResponse IndicadorResponse = new IndicadorResponse();

            IndicadorResponse.CodigoIndicador = IndicadorLogic.CodigoIndicador;
            IndicadorResponse.DescripcionIndicador = IndicadorLogic.DescripcionIndicador;
            IndicadorResponse.CodigoFormula = IndicadorLogic.CodigoFormula;
            IndicadorResponse.NombreFormula = IndicadorLogic.NombreFormula;         
            IndicadorResponse.CodigoResponsable = IndicadorLogic.CodigoResponsable;
            IndicadorResponse.NombreCompletoResponsable = IndicadorLogic.NombreCompletoResponsable;
            IndicadorResponse.CodigoPeriodicidad = IndicadorLogic.CodigoPeriodicidad;
            IndicadorResponse.NombrePeriodicidad = IndicadorLogic.NombrePeriodicidad;
            IndicadorResponse.CodigoUnidadMedida = IndicadorLogic.CodigoUnidadMedida;
            IndicadorResponse.NombreUnidadMedida = IndicadorLogic.NombreUnidadMedida;
            IndicadorResponse.EstadoRegistroDescripcion = IndicadorLogic.EstadoRegistroDescripcion;
            IndicadorResponse.EstadoRegistro = IndicadorLogic.EstadoRegistro;
            IndicadorResponse.NumeroFila = IndicadorLogic.NumeroRegistro;
            IndicadorResponse.FilasTotal = IndicadorLogic.TotalRegistro;

            return IndicadorResponse;
        }
    }
}
