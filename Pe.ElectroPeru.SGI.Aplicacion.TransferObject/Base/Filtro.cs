
using System.Collections.Generic;
namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Base
{
    /// <summary>
    /// Base para los DTOS filtros
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class Filtro
    {
        public Filtro()
        {
            this.NumeroPagina = 0;// PARA QUE FUNCIONE
            this.RegistrosPagina = int.MaxValue;
        }
        /// <summary>
        /// Pagina solicitada
        /// </summary>
        public int NumeroPagina { get; set; }
        /// <summary>
        /// Registros por Pagina
        /// </summary>
        public int RegistrosPagina { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ColumnaOrden { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string TipoOrden { get; set; }

        public List<FiltrosColumna> Filtros { get; set; }
    }
    public class FiltrosColumna
    {
        public string Columna { get; set; }
        public string Valor { get; set; }
    }
}
