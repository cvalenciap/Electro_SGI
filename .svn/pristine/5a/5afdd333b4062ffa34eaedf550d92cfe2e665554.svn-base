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
    public class ObjetivoEstrategicoEmpresaService : GenericService, IObjetivoEstrategicoEmpresaService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IObjetivoEstrategicoEmpresaLogicRepository ObjetivoEstrategicoEmpresaLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IObjetivoEstrategicoEmpresaEntityRepository ObjetivoEstrategicoEmpresaEntityRepository { get; set; }

        public IResponsableEntityRepository responsableEntityRepository { get; set; }

        public IObjetivoEstrategicoEmpresaDetalleService objetivoEspecificoDetalleService { get; set; }

        #endregion

        #region Métodos  
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<BandejaObjetivoEstrategicoEmpresaResponse>> BuscarObjetivoEstrategicoEmpresa(BandejaObjetivoEstrategicoEmpresaRequest filtro)
        {
            ProcessResult<List<BandejaObjetivoEstrategicoEmpresaResponse>> resultado = new ProcessResult<List<BandejaObjetivoEstrategicoEmpresaResponse>>();

            try
            {
                List<ObjetivoEstrategicoEmpresaLogic> listado = ObjetivoEstrategicoEmpresaLogicRepository.BuscarObjetivoEstrategicoEmpresa(
                    filtro.CodigoObjetivoEstrategicoEmpresa,
                    filtro.NombreObjetivoEstrategicoEmpresa,
                    filtro.DescripcionObjetivoEstrategicoEmpresa,
                    filtro.NombreCompletoResponsable,
                    filtro.CodigoModeloConceptual,                  
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,//DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<BandejaObjetivoEstrategicoEmpresaResponse>();

                Mapper.Map<List<ObjetivoEstrategicoEmpresaLogic>, List<BandejaObjetivoEstrategicoEmpresaResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaService>(e.Message);
            }

            return resultado;
        }


        public ProcessResult<ObjetivoEstrategicoEmpresaResponse> RegistrarObjetivoEstrategicoEmpresa(ObjetivoEstrategicoEmpresaRequest data)
        {
            ProcessResult<ObjetivoEstrategicoEmpresaResponse> resultado = new ProcessResult<ObjetivoEstrategicoEmpresaResponse>();
            resultado.Result = new ObjetivoEstrategicoEmpresaResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    ObjetivoEstrategicoEmpresaEntity ObjetivoEstrategicoEmpresaSincronizar = ObjetivoEstrategicoEmpresaEntityRepository.GetById(data.CodigoObjetivoEstrategicoEmpresa);
                    ObjetivoEstrategicoEmpresaEntity ObjetivoEstrategicoEmpresaGeneral = Mapper.Map<ObjetivoEstrategicoEmpresaRequest, ObjetivoEstrategicoEmpresaEntity>(data);

                    if (ObjetivoEstrategicoEmpresaSincronizar != null)
                    {
                        Mapper.Map<ObjetivoEstrategicoEmpresaEntity, ObjetivoEstrategicoEmpresaEntity>(ObjetivoEstrategicoEmpresaGeneral, ObjetivoEstrategicoEmpresaSincronizar);
                        ObjetivoEstrategicoEmpresaSincronizar.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                        ObjetivoEstrategicoEmpresaEntityRepository.Editar(ObjetivoEstrategicoEmpresaSincronizar);
                        resultado.Result.CodigoObjetivoEstrategicoEmpresa = data.CodigoObjetivoEstrategicoEmpresa;
                        resultado.Result.NombreObjetivoEstrategicoEmpresa = data.NombreObjetivoEstrategicoEmpresa;
                        resultado.Result.DescripcionObjetivoEstrategicoEmpresa = data.DescripcionObjetivoEstrategicoEmpresa;
                        resultado.Result.CodigoModeloConceptual = data.CodigoModeloConceptual;
                        resultado.Result.CodigoResponsable = data.CodigoResponsable;
                        resultado.Result.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                    }
                    else
                    {
                        ObjetivoEstrategicoEmpresaEntityRepository.Insertar(ObjetivoEstrategicoEmpresaGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoObjetivoEstrategicoEmpresa = ObjetivoEstrategicoEmpresaGeneral.CodigoObjetivoEstrategicoEmpresa;                        
                    }

                    ObjetivoEstrategicoEmpresaEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarObjetivoEstrategicoEmpresa(ObjetivoEstrategicoEmpresaRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                ObjetivoEstrategicoEmpresaDetalleRequest oOEED = new ObjetivoEstrategicoEmpresaDetalleRequest();
                oOEED.CodigoObjetivoEstrategicoEmpresa = data.CodigoObjetivoEstrategicoEmpresa;
                oOEED.CodigoIdioma = data.CodigoIdioma;
                var indicadoresAsociados = objetivoEspecificoDetalleService.BuscarObjetivoEstrategicoEmpresaDetalle(oOEED);

                if (indicadoresAsociados.Result.Count > 0)
                {
                    for (int i = 0; i < indicadoresAsociados.Result.Count; i++)
                    {
                        if (indicadoresAsociados.Result[0].EstadoRegistro == DatosConstantes.EstadoRegistro.Activo)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaService>(MensajesSistemaResource.EtiquetaMsgValidacionConsistencia);
                            break;
                        }
                        else
                        {
                            ObjetivoEstrategicoEmpresaEntityRepository.Eliminar(data.CodigoObjetivoEstrategicoEmpresa);
                            resultado.Result = ObjetivoEstrategicoEmpresaEntityRepository.GuardarCambios();
                        }
                    }
                }
                else {
                    ObjetivoEstrategicoEmpresaEntityRepository.Eliminar(data.CodigoObjetivoEstrategicoEmpresa);
                    resultado.Result = ObjetivoEstrategicoEmpresaEntityRepository.GuardarCambios();
                }                
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaService>(e.Message);
            }
            return resultado;
        }

        public ProcessResult<object> ReactivarObjetivoEstrategicoEmpresa(ObjetivoEstrategicoEmpresaRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                ObjetivoEstrategicoEmpresaEntityRepository.Reactivar(data.CodigoObjetivoEstrategicoEmpresa);
                resultado.Result = ObjetivoEstrategicoEmpresaEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaService>(e.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite obtener una Observacion Planeada Entity
        /// </summary>
        /// <param name="CodigoExpediente"></param>
        /// <returns>Entidad Observacion Planeada Response</returns>
        public ProcessResult<ObjetivoEstrategicoEmpresaResponse> ObtenerObjetivoEstrategicoEmpresa(ObjetivoEstrategicoEmpresaRequest data)
        {
            ProcessResult<ObjetivoEstrategicoEmpresaResponse> resultado = new ProcessResult<ObjetivoEstrategicoEmpresaResponse>();
            resultado.Result = new ObjetivoEstrategicoEmpresaResponse();
            try
            {
                if (data.CodigoObjetivoEstrategicoEmpresa.HasValue)
                {
                    BandejaObjetivoEstrategicoEmpresaRequest modelo = new BandejaObjetivoEstrategicoEmpresaRequest();
                    modelo.CodigoObjetivoEstrategicoEmpresa = data.CodigoObjetivoEstrategicoEmpresa;
                    modelo.CodigoIdioma = data.CodigoIdioma;
                   
                    ObjetivoEstrategicoEmpresaEntity ObjetivoEstrategicoEmpresaEntity = ObjetivoEstrategicoEmpresaEntityRepository.GetById(data.CodigoObjetivoEstrategicoEmpresa);
      
                    if (ObjetivoEstrategicoEmpresaEntity != null)
                    {
                        ResponsableEntity responsableEntity = responsableEntityRepository.GetById(ObjetivoEstrategicoEmpresaEntity.CodigoResponsable);

                        resultado.Result = Mapper.Map<ObjetivoEstrategicoEmpresaEntity, ObjetivoEstrategicoEmpresaResponse>(ObjetivoEstrategicoEmpresaEntity);
                        resultado.Result.NombreCompletoResponsable = responsableEntity.Nombres + " " + responsableEntity.ApellidoPaterno + " " + responsableEntity.ApellidoMaterno;                        
                    }
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoEmpresaService>(ex.Message);
            }
            return resultado;
        }

        #endregion
    }
}
