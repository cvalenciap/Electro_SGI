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
    public class ObjetivoEstrategicoSectorialService : GenericService, IObjetivoEstrategicoSectorialService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IObjetivoEstrategicoSectorialLogicRepository objetivoEstrategicoSectorialLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IObjetivoEstrategicoSectorialEntityRepository objetivoEstrategicoSectorialEntityRepository { get; set; }

        public IResponsableEntityRepository responsableEntityRepository { get; set; }

        public IObjetivoEstrategicoSectorialDetalleService objetivoEspecificoDetalleService { get; set; }

        #endregion

        #region Métodos  
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<BandejaObjetivoEstrategicoSectorialResponse>> BuscarObjetivoEstrategicoSectorial(BandejaObjetivoEstrategicoSectorialRequest filtro)
        {
            ProcessResult<List<BandejaObjetivoEstrategicoSectorialResponse>> resultado = new ProcessResult<List<BandejaObjetivoEstrategicoSectorialResponse>>();

            try
            {
                List<ObjetivoEstrategicoSectorialLogic> listado = objetivoEstrategicoSectorialLogicRepository.BuscarObjetivoEstrategicoSectorial(
                    filtro.CodigoObjetivoEstrategicoSectorial,
                    filtro.NombreObjetivoEstrategicoSectorial,
                    filtro.DescripcionObjetivoEstrategicoSectorial,
                    filtro.NombreCompletoResponsable,                   
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,//DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<BandejaObjetivoEstrategicoSectorialResponse>();

                Mapper.Map<List<ObjetivoEstrategicoSectorialLogic>, List<BandejaObjetivoEstrategicoSectorialResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialService>(e.Message);
            }

            return resultado;
        }


        public ProcessResult<ObjetivoEstrategicoSectorialResponse> RegistrarObjetivoEstrategicoSectorial(ObjetivoEstrategicoSectorialRequest data)
        {
            ProcessResult<ObjetivoEstrategicoSectorialResponse> resultado = new ProcessResult<ObjetivoEstrategicoSectorialResponse>();
            resultado.Result = new ObjetivoEstrategicoSectorialResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    ObjetivoEstrategicoSectorialEntity objetivoEstrategicoSectorialSincronizar = objetivoEstrategicoSectorialEntityRepository.GetById(data.CodigoObjetivoEstrategicoSectorial);
                    ObjetivoEstrategicoSectorialEntity objetivoEstrategicoSectorialGeneral = Mapper.Map<ObjetivoEstrategicoSectorialRequest, ObjetivoEstrategicoSectorialEntity>(data);

                    if (objetivoEstrategicoSectorialSincronizar != null)
                    {
                        Mapper.Map<ObjetivoEstrategicoSectorialEntity, ObjetivoEstrategicoSectorialEntity>(objetivoEstrategicoSectorialGeneral, objetivoEstrategicoSectorialSincronizar);
                        objetivoEstrategicoSectorialSincronizar.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                        objetivoEstrategicoSectorialEntityRepository.Editar(objetivoEstrategicoSectorialSincronizar);
                        resultado.Result.CodigoObjetivoEstrategicoSectorial = data.CodigoObjetivoEstrategicoSectorial;
                        resultado.Result.NombreObjetivoEstrategicoSectorial = data.NombreObjetivoEstrategicoSectorial;
                        resultado.Result.DescripcionObjetivoEstrategicoSectorial = data.DescripcionObjetivoEstrategicoSectorial;
                        resultado.Result.CodigoResponsable = data.CodigoResponsable;
                        resultado.Result.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                    }
                    else
                    {
                        objetivoEstrategicoSectorialEntityRepository.Insertar(objetivoEstrategicoSectorialGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoObjetivoEstrategicoSectorial = objetivoEstrategicoSectorialGeneral.CodigoObjetivoEstrategicoSectorial;                        
                    }

                    objetivoEstrategicoSectorialEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarObjetivoEstrategicoSectorial(ObjetivoEstrategicoSectorialRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                ObjetivoEstrategicoSectorialDetalleRequest oOEED = new ObjetivoEstrategicoSectorialDetalleRequest();
                oOEED.CodigoObjetivoEstrategicoSectorial = data.CodigoObjetivoEstrategicoSectorial;
                oOEED.CodigoIdioma = data.CodigoIdioma;
                var indicadoresAsociados = objetivoEspecificoDetalleService.BuscarObjetivoEstrategicoSectorialDetalle(oOEED);

                if (indicadoresAsociados.Result.Count > 0)
                {
                    for (int i = 0; i < indicadoresAsociados.Result.Count; i++)
                    {
                        if (indicadoresAsociados.Result[0].EstadoRegistro == DatosConstantes.EstadoRegistro.Activo)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialService>(MensajesSistemaResource.EtiquetaMsgValidacionConsistenciaOES);
                            break;
                        }
                        else
                        {
                            objetivoEstrategicoSectorialEntityRepository.Eliminar(data.CodigoObjetivoEstrategicoSectorial);
                            resultado.Result = objetivoEstrategicoSectorialEntityRepository.GuardarCambios();
                        }
                    }
                }
                else {
                    objetivoEstrategicoSectorialEntityRepository.Eliminar(data.CodigoObjetivoEstrategicoSectorial);
                    resultado.Result = objetivoEstrategicoSectorialEntityRepository.GuardarCambios();
                }                
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialService>(e.Message);
            }
            return resultado;
        }

        public ProcessResult<object> ReactivarObjetivoEstrategicoSectorial(ObjetivoEstrategicoSectorialRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                objetivoEstrategicoSectorialEntityRepository.Reactivar(data.CodigoObjetivoEstrategicoSectorial);
                resultado.Result = objetivoEstrategicoSectorialEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialService>(e.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite obtener una Observacion Planeada Entity
        /// </summary>
        /// <param name="CodigoExpediente"></param>
        /// <returns>Entidad Observacion Planeada Response</returns>
        public ProcessResult<ObjetivoEstrategicoSectorialResponse> ObtenerObjetivoEstrategicoSectorial(ObjetivoEstrategicoSectorialRequest data)
        {
            ProcessResult<ObjetivoEstrategicoSectorialResponse> resultado = new ProcessResult<ObjetivoEstrategicoSectorialResponse>();
            resultado.Result = new ObjetivoEstrategicoSectorialResponse();
            try
            {
                if (data.CodigoObjetivoEstrategicoSectorial.HasValue)
                {
                    BandejaObjetivoEstrategicoSectorialRequest modelo = new BandejaObjetivoEstrategicoSectorialRequest();
                    modelo.CodigoObjetivoEstrategicoSectorial = data.CodigoObjetivoEstrategicoSectorial;
                    modelo.CodigoIdioma = data.CodigoIdioma;
                   
                    ObjetivoEstrategicoSectorialEntity ObjetivoEstrategicoSectorialEntity = objetivoEstrategicoSectorialEntityRepository.GetById(data.CodigoObjetivoEstrategicoSectorial);
      
                    if (ObjetivoEstrategicoSectorialEntity != null)
                    {
                        ResponsableEntity responsableEntity = responsableEntityRepository.GetById(ObjetivoEstrategicoSectorialEntity.CodigoResponsable);

                        resultado.Result = Mapper.Map<ObjetivoEstrategicoSectorialEntity, ObjetivoEstrategicoSectorialResponse>(ObjetivoEstrategicoSectorialEntity);
                        resultado.Result.NombreCompletoResponsable = responsableEntity.Nombres + " " + responsableEntity.ApellidoPaterno + " " + responsableEntity.ApellidoMaterno;                        
                    }
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoSectorialService>(ex.Message);
            }
            return resultado;
        }

        #endregion
    }
}
