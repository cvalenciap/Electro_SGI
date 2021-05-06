using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Reportes;
using System;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Reportes
{
    public interface IDashboardLogicRepository : IQueryRepository<DashboardLogic>
    {
        List<DashboardLogic> Buscar(
            string codigoIdioma,
            Guid? CodigoIndicador,
            string tipoDashboard,
            string anio,
            string fecha,
            int tipoPeriodicidad,
            string codigoTipoPeriodicidad
        );
    }
}
