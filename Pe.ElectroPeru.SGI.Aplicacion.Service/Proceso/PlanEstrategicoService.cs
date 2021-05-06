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
    public class PlanEstrategicoService : GenericService, IPlanEstrategicoService
    {
        #region Propiedades

        public IPlanEstrategicoLogicRepository planEstrategicoLogicRepository { get; set; }

        #endregion

        public ProcessResult<List<BandejaPlanEstrategicoResponse>> BuscarPlanEstrategico(BandejaPlanEstrategicoRequest filtro)
        {
            ProcessResult<List<BandejaPlanEstrategicoResponse>> resultado = new ProcessResult<List<BandejaPlanEstrategicoResponse>>();

            try
            {
                List<PlanEstrategicoLogic> listaPlanEstrategico = planEstrategicoLogicRepository.BuscarPlanEstrategico(
                    filtro.DescripcionPerspectiva,
                    filtro.DescripcionObjetivoEstrategicoFonafe,
                    filtro.DescripcionObjetivoEstrategicoEmpresa,
                    filtro.DescripcionIndicador,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,// = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null),
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<BandejaPlanEstrategicoResponse>();

                Mapper.Map<List<PlanEstrategicoLogic>, List<BandejaPlanEstrategicoResponse>>(listaPlanEstrategico, resultado.Result);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PlanEstrategicoService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<BandejaPlanEstrategicoResponse>> BuscarPlanEstrategicoRpt()
        {
            ProcessResult<List<BandejaPlanEstrategicoResponse>> resultado = new ProcessResult<List<BandejaPlanEstrategicoResponse>>();

            try
            {
                List<PlanEstrategicoLogic> listaPlanEstrategico = planEstrategicoLogicRepository.BuscarPlanEstrategicoRpt();

                resultado.Result = new List<BandejaPlanEstrategicoResponse>();

                Mapper.Map<List<PlanEstrategicoLogic>, List<BandejaPlanEstrategicoResponse>>(listaPlanEstrategico, resultado.Result);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PlanEstrategicoService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<BandejaPlanEstrategicoResponse>> BuscarAlineamientoRpt()
        {
            ProcessResult<List<BandejaPlanEstrategicoResponse>> resultado = new ProcessResult<List<BandejaPlanEstrategicoResponse>>();

            try
            {
                List<PlanEstrategicoLogic> listAlineamiento = planEstrategicoLogicRepository.BuscarAlineamientoRpt();

                resultado.Result = new List<BandejaPlanEstrategicoResponse>();

                Mapper.Map<List<PlanEstrategicoLogic>, List<BandejaPlanEstrategicoResponse>>(listAlineamiento, resultado.Result);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PlanEstrategicoService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<BandejaPlanEstrategicoResponse>> BuscarMatrizEstrategicaRpt()
        {
            ProcessResult<List<BandejaPlanEstrategicoResponse>> resultado = new ProcessResult<List<BandejaPlanEstrategicoResponse>>();

            try
            {
                List<PlanEstrategicoLogic> listMAEI = planEstrategicoLogicRepository.BuscarMatrizEstrategicaRpt();

                resultado.Result = new List<BandejaPlanEstrategicoResponse>();

                Mapper.Map<List<PlanEstrategicoLogic>, List<BandejaPlanEstrategicoResponse>>(listMAEI, resultado.Result);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PlanEstrategicoService>(ex);
            }

            return resultado;
        }
    }
}
