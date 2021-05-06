using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Reportes;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Reportes;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Reportes
{
    public interface IDashboardService : IGenericService
    {
        ProcessResult<List<DashboardResponse>> Buscar(DashboardRequest filtro);
    }
}
