using Pe.ElectroPeru.SGI.Aplicacion.Adapter.Reportes;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Reportes;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Reportes;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Reportes;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Reportes;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Reportes;
using System;
using System.Collections.Generic;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Reportes;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Reportes;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Reportes
{
    public class DashboardService : GenericService, IDashboardService
    {
        public IDashboardLogicRepository LogicRepository { get; set; }

        public IDashboardEntityRepository EntityRepository { get; set; }

        public ProcessResult<List<DashboardResponse>> Buscar(DashboardRequest filtro)
        {
            ProcessResult<List<DashboardResponse>> resultado = new ProcessResult<List<DashboardResponse>>();

            try
            {
                List<DashboardLogic> lista = LogicRepository.Buscar(
                    filtro.CodigoIdioma,
                    filtro.CodigoIndicador,
                    filtro.TipoDashboard,
                    filtro.Anio,
                    filtro.Fecha,
                    filtro.TipoPeriodicidad,
                    filtro.CodigoSubTipoPeriodicidad);

                resultado.Result = new List<DashboardResponse>();

                foreach (DashboardLogic item in lista)
                {
                    DashboardResponse Response = DashboardAdapter.ObtenerListado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<DashboardService>(ex);
            }

            return resultado;
        }
    }
}
