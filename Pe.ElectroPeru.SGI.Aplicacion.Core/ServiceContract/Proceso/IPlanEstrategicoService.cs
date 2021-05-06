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
    public interface IPlanEstrategicoService : IGenericService
    {
        ProcessResult<List<BandejaPlanEstrategicoResponse>> BuscarPlanEstrategico(BandejaPlanEstrategicoRequest filtro);

        ProcessResult<List<BandejaPlanEstrategicoResponse>> BuscarPlanEstrategicoRpt();

        ProcessResult<List<BandejaPlanEstrategicoResponse>> BuscarAlineamientoRpt();

        ProcessResult<List<BandejaPlanEstrategicoResponse>> BuscarMatrizEstrategicaRpt();
    }
}
