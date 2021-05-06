using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Proceso;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Proceso;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Proceso
{
    public interface IPlanOperativoService : IGenericService
    {
        ProcessResult<List<BandejaPlanOperativoResponse>> BuscarPlanOperativo(BandejaPlanOperativoRequest filtro);
        ProcessResult<List<BandejaPlanOperativoResponse>> BuscarPlanOperativoRpt();

    }
}
