using Pe.ElectroPeru.SGI.Aplicacion.Adapter.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Proceso;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Proceso;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Proceso;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Proceso;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Proceso;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
using AutoMapper;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Message;
using System.Transactions;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Proceso
{
    public class PlanOperativoService : GenericService, IPlanOperativoService
    {
        #region Propiedades

        public IPlanOperativoLogicRepository PlanOperativoLogicRepository { get; set; }

        #endregion

        public ProcessResult<List<BandejaPlanOperativoResponse>> BuscarPlanOperativo(BandejaPlanOperativoRequest filtro)
        {
            ProcessResult<List<BandejaPlanOperativoResponse>> resultado = new ProcessResult<List<BandejaPlanOperativoResponse>>();

            try
            {
                List<PlanOperativoLogic> listaPlanOperativo = PlanOperativoLogicRepository.BuscarPlanOperativo(                  
                    filtro.DescripcionObjetivoEstrategicoFonafe,                    
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<BandejaPlanOperativoResponse>();

                Mapper.Map<List<PlanOperativoLogic>, List<BandejaPlanOperativoResponse>>(listaPlanOperativo, resultado.Result);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PlanOperativoService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<BandejaPlanOperativoResponse>> BuscarPlanOperativoRpt()
        {
            ProcessResult<List<BandejaPlanOperativoResponse>> resultado = new ProcessResult<List<BandejaPlanOperativoResponse>>();

            try
            {
                List<PlanOperativoLogic> listaPlanOperativo = PlanOperativoLogicRepository.BuscarPlanOperativoRpt();

                resultado.Result = new List<BandejaPlanOperativoResponse>();

                Mapper.Map<List<PlanOperativoLogic>, List<BandejaPlanOperativoResponse>>(listaPlanOperativo, resultado.Result);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PlanOperativoService>(ex);
            }

            return resultado;
        }
    }
}
