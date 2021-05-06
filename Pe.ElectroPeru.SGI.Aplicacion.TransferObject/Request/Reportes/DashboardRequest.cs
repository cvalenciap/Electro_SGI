using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Reportes
{
    public class DashboardRequest : BaseRequest
    {
        public string CodigoIdioma { get; set; }

        public Guid? CodigoIndicador { get; set; }

        public string TipoDashboard { get; set; }

        public int TipoPeriodicidad { get; set; }

        public string Anio { get; set; }

        public string Fecha { get; set; }

        public string CodigoSubTipoPeriodicidad { get; set; }
    }
}
