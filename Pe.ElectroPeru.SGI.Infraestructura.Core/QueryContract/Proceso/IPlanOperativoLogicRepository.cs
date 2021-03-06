using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Proceso;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Proceso
{
    public interface IPlanOperativoLogicRepository : IQueryRepository<PlanOperativoLogic>
    {
        List<PlanOperativoLogic> BuscarPlanOperativo(
            string descripcionObjetivoEstrategicoFonafe,
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina);

        List<PlanOperativoLogic> BuscarPlanOperativoRpt();
    }
}
