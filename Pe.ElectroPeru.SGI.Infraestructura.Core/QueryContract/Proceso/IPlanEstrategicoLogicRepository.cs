using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Proceso;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Proceso
{
    public interface IPlanEstrategicoLogicRepository : IQueryRepository<PlanEstrategicoLogic>
    {
        List<PlanEstrategicoLogic> BuscarPlanEstrategico(
            string descripcionPerspectiva,
            string descripcionObjetivoEstrategicoFonafe,
            string descripcionObjetivoEstrategicoEmpresa,
            string descripcionIndicador,
            Guid codigoEmpresaSistema,
            Guid codigoSistema,
            string codigoIdioma,
            string estadoRegistro,
            long numeroPagina,
            long tamanioPagina);

        List<PlanEstrategicoLogic> BuscarPlanEstrategicoRpt();
        List<PlanEstrategicoLogic> BuscarAlineamientoRpt();
        List<PlanEstrategicoLogic> BuscarMatrizEstrategicaRpt();
    }
}
