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
    public class ObjetivoEstrategicoEmpresaDetalleService : GenericService, IObjetivoEstrategicoEmpresaDetalleService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IObjetivoEstrategicoEmpresaDetalleLogicRepository ObjetivoEstrategicoEmpresaDetalleLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IObjetivoEstrategicoEmpresaDetalleEntityRepository ObjetivoEstrategicoEmpresaDetalleEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<ObjetivoEstrategicoEmpresaDetalleResponse>> BuscarObjetivoEstrategicoEmpresaDetalle(ObjetivoEstrategicoEmpresaDetalleRequest filtro)
        {
            ProcessResult<List<ObjetivoEstrategicoEmpresaDetalleResponse>> resultado = new ProcessResult<List<ObjetivoEstrategicoEmpresaDetalleResponse>>();

            try
            {
                List<ObjetivoEstrategicoEmpresaDetalleLogic> listado = ObjetivoEstrategicoEmpresaDetalleLogicRepository.BuscarObjetivoEstrategicoEmpresaDetalle(
                    filtro.CodigoObjetivoEstrategicoEmpresaDetalle,
                    filtro.CodigoObjetivoEstrategicoEmpresa,
                    filtro.CodigoAmbito,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<ObjetivoEstrategicoEmpresaDetalleResponse>();

                Mapper.Map<List<ObjetivoEstrategicoEmpresaDetalleLogic>, List<ObjetivoEstrategicoEmpresaDetalleResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaDetalleService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<ObjetivoEstrategicoEmpresaDetalleResponse> RegistrarObjetivoEstrategicoEmpresaDetalle(ObjetivoEstrategicoEmpresaDetalleRequest data)
        {
            ProcessResult<ObjetivoEstrategicoEmpresaDetalleResponse> resultado = new ProcessResult<ObjetivoEstrategicoEmpresaDetalleResponse>();
            resultado.Result = new ObjetivoEstrategicoEmpresaDetalleResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    ObjetivoEstrategicoEmpresaDetalleEntity ObjetivoEstrategicoEmpresaDetalleSincronizar = ObjetivoEstrategicoEmpresaDetalleEntityRepository.GetById(data.CodigoObjetivoEstrategicoEmpresaDetalle);
                    ObjetivoEstrategicoEmpresaDetalleEntity ObjetivoEstrategicoEmpresaDetalleGeneral = Mapper.Map<ObjetivoEstrategicoEmpresaDetalleRequest, ObjetivoEstrategicoEmpresaDetalleEntity>(data);

                    if (ObjetivoEstrategicoEmpresaDetalleSincronizar != null)
                    {
                        Mapper.Map<ObjetivoEstrategicoEmpresaDetalleEntity, ObjetivoEstrategicoEmpresaDetalleEntity>(ObjetivoEstrategicoEmpresaDetalleGeneral, ObjetivoEstrategicoEmpresaDetalleSincronizar);
                        ObjetivoEstrategicoEmpresaDetalleEntityRepository.Editar(ObjetivoEstrategicoEmpresaDetalleSincronizar);
                        resultado.Result.CodigoObjetivoEstrategicoEmpresaDetalle = data.CodigoObjetivoEstrategicoEmpresaDetalle;
                        resultado.Result.CodigoObjetivoEstrategicoEmpresa = data.CodigoObjetivoEstrategicoEmpresa;                     
                    }
                    else
                    {
                        ObjetivoEstrategicoEmpresaDetalleEntityRepository.Insertar(ObjetivoEstrategicoEmpresaDetalleGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaDetalleService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoObjetivoEstrategicoEmpresaDetalle = ObjetivoEstrategicoEmpresaDetalleGeneral.CodigoObjetivoEstrategicoEmpresaDetalle;
                        resultado.Result.CodigoObjetivoEstrategicoEmpresa = ObjetivoEstrategicoEmpresaDetalleGeneral.CodigoObjetivoEstrategicoEmpresa;
                    }

                    ObjetivoEstrategicoEmpresaDetalleEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaDetalleService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarObjetivoEstrategicoEmpresaDetalle(ObjetivoEstrategicoEmpresaDetalleRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                ObjetivoEstrategicoEmpresaDetalleEntityRepository.Eliminar(data.CodigoObjetivoEstrategicoEmpresaDetalle);
                resultado.Result = ObjetivoEstrategicoEmpresaDetalleEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaDetalleService>(e.Message);
            }
            return resultado;
        }

        #endregion
    }
}
