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
    public class ObjetivoEstrategicoSectorialDetalleService : GenericService, IObjetivoEstrategicoSectorialDetalleService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IObjetivoEstrategicoSectorialDetalleLogicRepository objetivoEstrategicoSectorialDetalleLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IObjetivoEstrategicoSectorialDetalleEntityRepository objetivoEstrategicoSectorialDetalleEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<ObjetivoEstrategicoSectorialDetalleResponse>> BuscarObjetivoEstrategicoSectorialDetalle(ObjetivoEstrategicoSectorialDetalleRequest filtro)
        {
            ProcessResult<List<ObjetivoEstrategicoSectorialDetalleResponse>> resultado = new ProcessResult<List<ObjetivoEstrategicoSectorialDetalleResponse>>();

            try
            {
                List<ObjetivoEstrategicoSectorialDetalleLogic> listado = objetivoEstrategicoSectorialDetalleLogicRepository.BuscarObjetivoEstrategicoSectorialDetalle(
                    filtro.CodigoObjetivoEstrategicoSectorialDetalle,
                    filtro.CodigoObjetivoEstrategicoSectorial,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<ObjetivoEstrategicoSectorialDetalleResponse>();

                Mapper.Map<List<ObjetivoEstrategicoSectorialDetalleLogic>, List<ObjetivoEstrategicoSectorialDetalleResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialDetalleService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<ObjetivoEstrategicoSectorialDetalleResponse> RegistrarObjetivoEstrategicoSectorialDetalle(ObjetivoEstrategicoSectorialDetalleRequest data)
        {
            ProcessResult<ObjetivoEstrategicoSectorialDetalleResponse> resultado = new ProcessResult<ObjetivoEstrategicoSectorialDetalleResponse>();
            resultado.Result = new ObjetivoEstrategicoSectorialDetalleResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    ObjetivoEstrategicoSectorialDetalleEntity objetivoEstrategicoSectorialDetalleSincronizar = objetivoEstrategicoSectorialDetalleEntityRepository.GetById(data.CodigoObjetivoEstrategicoSectorialDetalle);
                    ObjetivoEstrategicoSectorialDetalleEntity objetivoEstrategicoSectorialDetalleGeneral = Mapper.Map<ObjetivoEstrategicoSectorialDetalleRequest, ObjetivoEstrategicoSectorialDetalleEntity>(data);

                    if (objetivoEstrategicoSectorialDetalleSincronizar != null)
                    {
                        Mapper.Map<ObjetivoEstrategicoSectorialDetalleEntity, ObjetivoEstrategicoSectorialDetalleEntity>(objetivoEstrategicoSectorialDetalleGeneral, objetivoEstrategicoSectorialDetalleSincronizar);
                        objetivoEstrategicoSectorialDetalleEntityRepository.Editar(objetivoEstrategicoSectorialDetalleSincronizar);
                        resultado.Result.CodigoObjetivoEstrategicoSectorialDetalle = data.CodigoObjetivoEstrategicoSectorialDetalle;
                        resultado.Result.CodigoObjetivoEstrategicoSectorial = data.CodigoObjetivoEstrategicoSectorial;                     
                    }
                    else
                    {
                        objetivoEstrategicoSectorialDetalleEntityRepository.Insertar(objetivoEstrategicoSectorialDetalleGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialDetalleService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoObjetivoEstrategicoSectorialDetalle = objetivoEstrategicoSectorialDetalleGeneral.CodigoObjetivoEstrategicoSectorialDetalle;
                        resultado.Result.CodigoObjetivoEstrategicoSectorial = objetivoEstrategicoSectorialDetalleGeneral.CodigoObjetivoEstrategicoSectorial;
                    }

                    objetivoEstrategicoSectorialDetalleEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialDetalleService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarObjetivoEstrategicoSectorialDetalle(ObjetivoEstrategicoSectorialDetalleRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                objetivoEstrategicoSectorialDetalleEntityRepository.Eliminar(data.CodigoObjetivoEstrategicoSectorialDetalle);
                resultado.Result = objetivoEstrategicoSectorialDetalleEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialDetalleService>(e.Message);
            }
            return resultado;
        }

        #endregion
    }
}
