using AutoMapper;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Message;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using System;
using System.Linq;
using System.Transactions;
using System.Collections.Generic;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Mantenimiento
{
    /// <summary>
    /// Servicio de Mantenimiento
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 28112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService : GenericService, IObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalLogicRepository objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntityRepository objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse>> BuscarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalRequest filtro)
        {
            ProcessResult<List<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse>> resultado = new ProcessResult<List<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse>>();

            try
            {
                List<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalLogic> listado = objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalLogicRepository.BuscarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(
                    filtro.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional,
                    filtro.CodigoObjetivoEstrategicoEmpresa,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse>();

                Mapper.Map<List<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalLogic>, List<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse> RegistrarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalRequest data)
        {
            ProcessResult<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse> resultado = new ProcessResult<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse>();
            resultado.Result = new ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntity objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalSincronizar = objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntityRepository.GetById(data.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional);
                    ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntity objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalGeneral = Mapper.Map<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalRequest, ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntity>(data);

                    if (objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalSincronizar != null)
                    {
                        Mapper.Map<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntity, ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntity>(objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalGeneral, objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalSincronizar);
                        objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntityRepository.Editar(objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalSincronizar);
                        resultado.Result.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional = data.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional;
                        resultado.Result.CodigoObjetivoEstrategicoEmpresa = data.CodigoObjetivoEstrategicoEmpresa;                     
                    }
                    else
                    {
                        objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntityRepository.Insertar(objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional = objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalGeneral.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional;
                        resultado.Result.CodigoObjetivoEstrategicoEmpresa = objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalGeneral.CodigoObjetivoEstrategicoEmpresa;
                    }

                    objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntityRepository.Eliminar(data.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional);
                resultado.Result = objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService>(e.Message);
            }
            return resultado;
        }

        #endregion
    }
}
